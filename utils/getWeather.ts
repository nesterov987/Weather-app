import { addCurrentWeather, addForecastWeather } from "@/store/reducers";
import { AppDispatch } from "@/store/store";

const API_KEY = "24876d301393b96769ee606e34c02dee";

export async function getWeather(dispatch: AppDispatch, city: string): Promise<boolean> {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  
  try {
    const result = await fetch(apiUrl);
    const result2 = await fetch(forecastUrl)
    if (!result.ok || !result2.ok) {
      throw new Error(result.statusText);
    }

    const resultData = await result.json();
    const result2Data = await result2.json()
    dispatch(addCurrentWeather({ weather: resultData }));
    dispatch(addForecastWeather({forecast:result2Data}))
    return true;
  } catch (error) {
    console.error("Помилка:", (error as Error).message);
    return false;
  }
}