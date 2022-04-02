import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function MonthDay(props) {
  const { title, type, currentMonth } = props;

  return <div className={`monthday-container ${type}`}>
    <span className={`title ${!!currentMonth ? 'current' : 'not-current'}`}>{title}</span>
  </div>;
}

MonthDay.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currentMonth: PropTypes.bool.isRequired
};

export default MonthDay;