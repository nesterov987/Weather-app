import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  currentWeather: any[];
  forecastWeather: any;
}

const initialState: WeatherState = {
  currentWeather: [],
  forecastWeather: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addCurrentWeather: (state, action: PayloadAction<any>) => {
      state.currentWeather = [action.payload];
    },
    addForecastWeather: (state, action: PayloadAction<any>) => {
      state.forecastWeather = action.payload;
    },
  },
});

export const { addCurrentWeather, addForecastWeather } = weatherSlice.actions;
export default weatherSlice.reducer;