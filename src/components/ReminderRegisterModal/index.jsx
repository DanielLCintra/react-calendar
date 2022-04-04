import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "../Button";
import { addReminder, updateReminder } from "../../store/slices/calendar.slice";
import { useDispatch } from "react-redux";
import { REMINDER_MODEL } from "../../models/reminder";
import { getWeatherForecastByAddressAndDate } from "../../services/methods";
import Weather from "../Weather/index.jsx";
import { useSelector } from "react-redux";

function ReminderRegisterModal(props) {
  const dispatch = useDispatch();

  const { title = "modal`s title", handleClose } = props;
  let [reminder, setReminder] = useState({ ...REMINDER_MODEL });
  let [weatherData, setweatherData] = useState("");

  const { currentReminder } = useSelector((state) => state.calendarReducer);

  useEffect(() => {
    if (currentReminder?.id) {
      setReminder(currentReminder);
    }
  }, [currentReminder]);

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h1 className="modal-title"> {title}</h1>
        <button className="modal-close-button" onClick={handleClose}>
          {" "}
          X
        </button>
      </div>
      <div className="modal-body">
        <div className="input-container">
          <label className="input-label">Title</label>
          <input
            className="input-form"
            type="text"
            value={reminder.title || ""}
            onChange={(e) =>
              setReminder({ ...reminder, title: e.target.value })
            }
            id="title" 
            name="title"
            maxlength="30"
          />
        </div>

        <div className="input-container">
          <label className="input-label">Date</label>
          <input
            className="input-form"
            type="date"
            value={reminder.date || ""}
            onChange={(e) => setReminder({ ...reminder, date: e.target.value })}
            onBlur={async (e) => {
              if (e.target.value && reminder.city) {
                const weatherForecast = await getWeatherForecastByAddressAndDate(
                  reminder.city,
                  e.target.value,
                  e.target.value
                );
                setweatherData(weatherForecast.data);
              }
            }}
            id="date" 
            name="date"
          />
        </div>

        <div className="input-container">
          <label className="input-label">Time</label>
          <input
            className="input-form"
            type="time"
            value={reminder.time || ""}
            onChange={(e) => setReminder({ ...reminder, time: e.target.value })}
            id="time" 
            name="time"
          />
        </div>

        <div className="input-container">
          <label className="input-label">City</label>
          <input
            className="input-form"
            type="text"
            value={reminder.city || ""}
            onChange={async (e) =>
              setReminder({ ...reminder, city: e.target.value })
            }
            onBlur={async (e) => {
              if (e.target.value &&  reminder.date) {
                const weatherForecast = await getWeatherForecastByAddressAndDate(
                  e.target.value,
                  reminder.date,
                  reminder.date
                );
                setweatherData(weatherForecast.data);
              }
            }}
            id="city" 
            name="city"
          />
        </div>

        <div className="input-container">
          {!!weatherData ? (
            <Weather data={weatherData} city={reminder.city} date={reminder.date}/>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="modal-footer">
        <Button colorState="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          colorState="default"
          onClick={() => {
            currentReminder?.id ? dispatch(updateReminder(reminder)) : dispatch(addReminder(reminder))
            setReminder({ ...REMINDER_MODEL });
          }}
        >
          {currentReminder?.id ? "Update" : "Save"}
        </Button>
      </div>
    </div>
  );
}

ReminderRegisterModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default ReminderRegisterModal;
