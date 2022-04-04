import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import moment from "moment";

function Weather(props) {
  const { data, city, date } = props;

  const getWeatherIcon = (icon) => {
    const weatherIcon = require(`../../assets/weather-icons/${icon}.png`);

    return weatherIcon.default;
  };

  return (
    <>
      <div>Weather Forecast on {moment(date).format("DD/MM/YYYY")}</div>
      <div className="weather-container">
        <div>
          <img src={getWeatherIcon(data.days[0].icon) || ''} alt='weather icon'/>
        </div>
        <div className="weather-city">{city}</div>
        <div className="min-max-temperature-container">
          <span className="min-temperature">{data.days[0].tempmin} °</span>/
          <span className="max-temperature">{data.days[0].tempmax} °</span>
        </div>
      </div>
    </>
  );
}

Weather.propTypes = {
  data: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Weather;
