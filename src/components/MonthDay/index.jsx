import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function MonthDay(props) {
  const { title, type, currentMonth, reminders } = props;

  return (
    <div className={`monthday-container ${type}`}>
      <span className={`title ${!!currentMonth ? "current" : "not-current"}`}>
        {title}
      </span>
      <div className="reminders-container">
        <ul>
          {reminders.length > 0 &&
            reminders.map((reminder, index) => (
              <li className="text" key={index}>
                {reminder.time} - {reminder.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

MonthDay.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currentMonth: PropTypes.bool.isRequired,
  reminders: PropTypes.array.isRequired
};

export default MonthDay;
