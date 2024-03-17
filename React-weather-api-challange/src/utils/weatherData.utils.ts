import { WeatherData } from "./types.utils";

export const parseDataToSort = (data: WeatherData): string[][] => {
  const arr: string[][] = [];
  data.hourly.time.forEach((el, idx) => {
    arr.push([
      el,
      data.hourly.temperature_2m[idx].toString(),
      data.hourly.wind_speed_10m[idx].toString(),
    ]);
  });
  return arr;
};
