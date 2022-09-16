import axios from "axios";
// `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_WEATHER_API_ENDPOINT}&q=${location}`;
// `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_WEATHER_API2}&query=${location}`;

const weatherApiEndPoint = (location) =>
  `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_WEATHER_API_ENDPOINT}&q=${location}`;

export const getData = async (city) => {
  const {
    data: {
      current: {
        temp_c: temperature,
        condition: { text, icon },
      },
      location: { country, region, name },
    },
  } = await axios.get(weatherApiEndPoint(city));
  return { region, country, name, temperature, icon, text };
};
