import { ReactNode } from "react";

export type TodayWeatherDataType = {
  temperature: number;
  image: ReactNode;
  time: Date;
};
export type AppLanguageType='en' | 'ru'
