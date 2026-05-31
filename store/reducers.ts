import { IWeather, IWeatherResponse } from "@/types/weather-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  currentWeather: IWeather[];
  forecastWeather:IWeatherResponse | undefined
}
const initialState: WeatherState = {
  currentWeather: [],
  forecastWeather: undefined
};
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addCurrentWeather: (state, action) => {
      state.currentWeather=[action.payload.weather]
    },
    addForecastWeather: (
      state,
      action: PayloadAction<{ forecast: IWeatherResponse }>
    ) => {
      state.forecastWeather=action.payload.forecast
    }
  }
  
});

export const addCurrentWeather = weatherSlice.actions.addCurrentWeather;
export const addForecastWeather = weatherSlice.actions.addForecastWeather
export default weatherSlice.reducer;
