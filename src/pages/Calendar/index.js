import React, { useState } from "react";
import WeekDay from "../../components/WeekDay";
import { useSelector } from "react-redux";
import "./styles.scss";
import MonthDay from "../../components/MonthDay";
import Button from "../../components/Button/index.jsx";
import ReminderRegisterModal from "../../components/ReminderRegisterModal";
import { toggleShowRegisterModal } from "../../store/slices/calendar.slice";
import { useDispatch } from "react-redux";


function Calendar(props) {
  const { weekDays, calendar, showRegisterModal } = useSelector((state) => state.calendarReducer);
  const dispatch = useDispatch();


  return (
    <div className="container">
      {showRegisterModal && (
        <ReminderRegisterModal
          title="Reminder`s Register"
          handleClose={() => dispatch(toggleShowRegisterModal({state: false}))}
        />
      )}
      <h1>April - 2022</h1>

      <div className="calendar-content">
        <div className="header">
          {weekDays.map((weekday, index) => (
            <WeekDay key={index} title={weekday} />
          ))}
        </div>

        <div className="body">
          {calendar["2022"]['4'].days.map((monthday, index) => (
            <MonthDay
              key={index}
              title={monthday.day}
              type={monthday.type}
              currentMonth={monthday.currentMonth}
              reminders={monthday.reminders}
            />
          ))}
        </div>

        <div className="footer">
          <Button
            colorState="default"
            onClick={() =>
              dispatch(toggleShowRegisterModal({state: true}))
            }
          >
            Add Reminder
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
