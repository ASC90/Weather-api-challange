import { useEffect, useState } from "react";
import "./WeatherDashboard.styled.css";
import { SortTypes, WeatherData } from "../utils/types.utils";
import { parseDate } from "../utils/time.utils";
import { parseDataToSort } from "../utils/weatherData.utils";
import { ToggleSort } from "../components/ToggleSort";
import _ from "lodash";
const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,wind_speed_10m";
export const WeatherDashboard = () => {
  const [resetTime, setResetTime] = useState(false);
  const [resetTemperature, setResetTemperature] = useState(false);
  const [resetWind, setResetWind] = useState(false);
  const weatherData = localStorage.getItem("weather-data");
  const [storeData, setStoreData] = useState<WeatherData>(
    weatherData ? JSON.parse(weatherData) : null
  );
  const [dataToSort, setDataToSort] = useState<string[][]>([]);
  const handleSort = (type: string, name: string) => {
    let dataTypeIndex = 0;
    switch (name) {
      case "Time":
        dataTypeIndex = 0;
        setResetTime(false);
        setResetTemperature(true);
        setResetWind(true);
        break;
      case "Temperature":
        dataTypeIndex = 1;
        setResetTime(true);
        setResetTemperature(false);
        setResetWind(true);
        break;
      case "Wind":
        dataTypeIndex = 2;
        setResetTime(true);
        setResetTemperature(true);
        setResetWind(false);
        break;

      default:
        break;
    }
    switch (type) {
      case SortTypes[0]:
        setDataToSort(parseDataToSort(storeData));
        break;
      case SortTypes[1]:
        setDataToSort(
          _.orderBy(
            dataToSort,
            [
              (dataType: string[]) =>
                !dataTypeIndex
                  ? dataType[dataTypeIndex]
                  : Number(dataType[dataTypeIndex]),
            ],
            ["asc"]
          )
        );
        break;
      case SortTypes[2]:
        setDataToSort(
          _.orderBy(
            dataToSort,
            [
              (dataType: string[]) =>
                !dataTypeIndex
                  ? dataType[dataTypeIndex]
                  : Number(dataType[dataTypeIndex]),
            ],
            ["desc"]
          )
        );
        break;
      default:
        setDataToSort(parseDataToSort(storeData));
        break;
    }
  };
  useEffect(() => {
    if (!storeData) {
      fetch(URL)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response error");
          }
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setStoreData(res);
          localStorage.setItem("weather-data", JSON.stringify(res));
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {});
    }
    if (storeData) {
      setDataToSort(parseDataToSort(storeData));
    }
  }, [storeData]);
  return (
    <>
      <div className="table">
        <div className="table--head">
          <div className="table--row">
            <div className="table--cell">
              <ToggleSort
                name="Time"
                resetSortType={resetTime}
                sortType={(type: string) => {
                  handleSort(type, "Time");
                }}
              />
            </div>
            <div className="table--cell">
              <ToggleSort
                name="Temperature 2m"
                resetSortType={resetTemperature}
                sortType={(type: string) => {
                  handleSort(type, "Temperature");
                }}
              />
            </div>
            <div className="table--cell">
              <ToggleSort
                name="Wind speed 10m"
                resetSortType={resetWind}
                sortType={(type: string) => {
                  handleSort(type, "Wind");
                }}
              />
            </div>
          </div>
        </div>
        <div className="table--body">
          {dataToSort &&
            dataToSort?.map((el, idx) => (
              <div className="table--row" key={idx}>
                <div className="table--cell">{parseDate(el[0])}</div>
                <div className="table--cell">{el[1]}</div>
                <div className="table--cell">{el[2]}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
