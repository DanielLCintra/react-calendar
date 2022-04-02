import React from "react";
import WeekDay from "../../components/WeekDay";
import { weekDays, calendar } from "./utils";
import "./styles.scss";
import MonthDay from "../../components/MonthDay";

function Calendar(props) {
  return (
    <div className="container">
      <h1>Calendar</h1>

      <div className="calendar-content">
        <div className="header">
          {weekDays.map((weekday) => (
            <WeekDay title={weekday} />
          ))}
        </div>

        <div className="body">
          {calendar["2022"].April.days.map((monthday, index) => (
            <MonthDay
              key={index}
              title={monthday.day}
              type={monthday.type}
              currentMonth={monthday.currentMonth}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
