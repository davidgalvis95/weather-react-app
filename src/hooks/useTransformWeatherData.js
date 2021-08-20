import { updateTime } from "../util/utilFunctions";

const currentWeatherSpecification = {
  temperature: null,
  realFeel: null,
  currentTime: null,
  description: null,
  pressure: null,
  humidity: null,
  tempMax: null,
  tempMin: null,
  sunrise: null,
  sunset: null,
  windSpeed: null,
  trimKelvin: function trimKelvin(kelvin) {
    return parseInt(kelvin.toFixed(0));
  },
  mapFromKelvinToFarenheit: function mapFromKelvinToFarenheit(kelvin) {
    return parseInt(parseFloat(((kelvin - 273.15) * 9) / 5 + 32).toFixed(0));
  },
  mapFromKelvinToCelsius: function mapFromKelvinToCelsius(kelvin) {
    return parseInt((kelvin - 273.15).toFixed(0));
  },
  mapTemperature: function mapTemperature(temperature, operation) {
    const tempMappingFunctionsMap = new Map();
    tempMappingFunctionsMap.set("kc", this.mapFromKelvinToCelsius);
    tempMappingFunctionsMap.set("kf", this.mapFromKelvinToFarenheit);
    tempMappingFunctionsMap.set("tk", this.trimKelvin);

    return tempMappingFunctionsMap.get(operation)(temperature);
  },
};

const useTransformWeatherData = () => {
  // const [result, setResult] = useState(currentWeatherSpecification);

  const transformData = (data) => {
    if (data) {
      const result = { ...currentWeatherSpecification };
      result.temperature = result.mapTemperature(data.main.temp, "kc");
      result.realFeel = result.mapTemperature(data.main.feels_like, "kc");
      result.pressure = data.main.pressure; //pressure is given in mbar
      result.humidity = data.main.humidity; //This is given in percentage
      result.tempMax = result.mapTemperature(data.main.temp_max, "kc");
      result.tempMin = result.mapTemperature(data.main.temp_min, "kc");
      //TODO use the updatable function for dynamic time
      // result.currentTime = new Date();
      result.description = data.weather[0].description;
      result.sunrise = getTimeFromTimestamp(data.sys.sunrise);
      result.sunset = getTimeFromTimestamp(data.sys.sunset);
      result.windSpeed = data.wind.speed; //kmh

      return result;
    }
    return currentWeatherSpecification;
  };

  return { transformData: transformData };
};

const getTimeFromTimestamp = (timestamp) => {
  return updateTime(new Date(timestamp * 1000));
};

// function mapFromKelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0);
// }

// function mapFromKelvinToFarenheit(kelvin) {
//   return ((kelvin - 273.15) * 9) / 5 + 32;
// }

// function trimKelvin(kelvin) {
//   return parseFloat(kelvin).toFixed(0);
// }

// const mapTemperature = (temperature, operation) => {
//   const tempMappingFunctionsMap = new Map();
//   tempMappingFunctionsMap.set("kc", mapFromKelvinToCelsius);
//   tempMappingFunctionsMap.set("kf", mapFromKelvinToFarenheit);
//   tempMappingFunctionsMap.set("tk", trimKelvin);

//   return tempMappingFunctionsMap.get(operation)(temperature);
// };

export default useTransformWeatherData;
