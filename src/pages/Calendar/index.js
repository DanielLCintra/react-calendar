import React from "react";
import WeekDay from "../../components/WeekDay";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import MonthDay from "../../components/MonthDay";
import Button from "../../components/Button/index.jsx";
import { addReminder } from "../../store/slices/calendar.slice";

function Calendar(props) {
  const { weekDays, calendar } = useSelector((state) => state.calendarReducer);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>April - 2022</h1>

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
              reminders={monthday.reminders}
            />
          ))}
        </div>

        <div className="footer">
          <Button
            onClick={() =>
              dispatch(
                addReminder({
                  year: "2022",
                  month: "April",
                  day: "22",
                  hour: "08",
                  description: "teste",
                  city: "São Paulo"
                })
              )
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
