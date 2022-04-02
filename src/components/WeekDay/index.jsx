import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function WeekDay(props) {
  const { title } = props;

  return <div className='weekday-container'>
    <span className='title'>{title}</span>
  </div>;
}

WeekDay.propTypes = {
  title: PropTypes.string.isRequired
};

export default WeekDay;
