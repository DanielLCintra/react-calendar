import React, { useEffect } from "react";
import WeekDay from "../../components/WeekDay";
import { useSelector } from "react-redux";
import "./styles.scss";
import MonthDay from "../../components/MonthDay";
import Button from "../../components/Button/index.jsx";
import ReminderRegisterModal from "../../components/ReminderRegisterModal";
import { clearCurrentReminder, setAlreadyNotified, toggleShowRegisterModal } from "../../store/slices/calendar.slice";
import { useDispatch } from "react-redux";
import {NotificationContainer, NotificationManager} from 'react-notifications';


function Calendar(props) {
  const { weekDays, calendar, showRegisterModal } = useSelector((state) => state.calendarReducer);
  const dispatch = useDispatch();


  useEffect(() => {
    setInterval(() => {
      const currentdate = new Date(); 

      const day = currentdate.getDate();
      const month = currentdate.getMonth() + 1;
      const year = currentdate.getFullYear();
      const hour = currentdate.getHours(); 
      const minute = currentdate.getMinutes();

      calendar[year][month].days?.find(d => d.day == day).reminders?.forEach(r => {
        if (r?.time) {
          const arrHour = r.time.split(':');

          if (arrHour[0] == hour && arrHour[1] == minute && !r.notified) {
            NotificationManager.info(r.title);
            dispatch(setAlreadyNotified({date: r.date, id: r.id}))
          }
        }
        
      })
    }, 10000);
  }, [calendar, dispatch])
  


  return (
    <div className="container">
      <NotificationContainer/>
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
          {!showRegisterModal && (
            <Button
              colorState="default"
              onClick={() => {
                dispatch(clearCurrentReminder())
                dispatch(toggleShowRegisterModal({state: true}))
              }
              }
            >
              Add Reminder
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
