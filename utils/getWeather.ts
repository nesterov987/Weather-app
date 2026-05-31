import { addCurrentWeather, addForecastWeather } from "@/store/weatherSlice";
import { AppDispatch } from "@/store/store";

const API_KEY = "24876d301393b96769ee606e34c02dee";

export async function getWeather(
  dispatch: AppDispatch,
  city: string
): Promise<boolean> {
  try {
    const trimmedCity = city.trim();

    if (!trimmedCity) return false;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&appid=${API_KEY}&units=metric`
    );

    const data = await res.json();
    console.log("CURRENT:", data);

    // 🔥 главная защита
    if (data.cod !== 200) {
      console.log("CITY ERROR:", data.message);
      return false;
    }

    const res2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${trimmedCity}&appid=${API_KEY}&units=metric`
    );

    const data2 = await res2.json();
    console.log("FORECAST:", data2);

    dispatch(addCurrentWeather(data));
    dispatch(addForecastWeather(data2));

    return true;
  } catch (error) {
    console.log("ERROR:", error);
    return false;
  }
}