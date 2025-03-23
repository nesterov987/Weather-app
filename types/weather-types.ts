interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface Clouds {
  all: number;
}

interface Rain {
  "1h"?: number;
  "3h"?: number;
}

interface SysList {
  pod: string; 
  }

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  rain?: Rain;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherEntry { 
  dt: number; 
  main: Main; 
  weather: Weather[];
  clouds: Clouds; 
  wind: Wind; 
  visibility: number;
  pop: number; 
  rain?: Rain; 
  sys: SysList; 
  dt_txt: string; 
} 

interface City { 
    id: number; 
    name: string; 
    coord: Coord; 
    country: string; 
    population: number; 
    timezone: number; 
    sunrise: number; 
    sunset: number; 
  }

export interface IWeatherResponse { 
  cod: string; 
  message: number; 
  cnt: number; 
  list: WeatherEntry[]; 
  city: City; 
}