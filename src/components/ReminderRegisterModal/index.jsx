import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "../Button";
import { addReminder } from "../../store/slices/calendar.slice";
import { useDispatch } from "react-redux";
import {REMINDER_MODEL} from '../../models/reminder'

function ReminderRegisterModal(props) {
  const dispatch = useDispatch();

  const { title = "Título do modal", handleClose, currentReminder } = props;
  let [reminder, setReminder] = useState({ ...REMINDER_MODEL });

  useEffect(() => {
    if (currentReminder?.id) {
      setReminder(currentReminder)
    }
  }, [currentReminder])
  

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
            value={reminder.title || ''}
            onChange={(e) =>
              setReminder({ ...reminder, title: e.target.value })
            }
          />
        </div>

        <div className="input-container">
          <label className="input-label">Date</label>
          <input 
            className="input-form" 
            type="date" 
            value={reminder.date || ''}
            onChange={(e) =>
              setReminder({ ...reminder, date: e.target.value })
            }
          />
        </div>

        <div className="input-container">
          <label className="input-label">Time</label>
          <input 
            className="input-form" 
            type="time" 
            value={reminder.time || ''}
            onChange={(e) =>
              setReminder({ ...reminder, time: e.target.value })
            }
          />
        </div>

        <div className="input-container">
          <label className="input-label">City</label>
          <input 
            className="input-form" 
            type="text" 
            value={reminder.city || ''}
            onChange={(e) =>
              setReminder({ ...reminder, city: e.target.value })
            }
          />
        </div>
      </div>
      <div className="modal-footer">
        <Button colorState="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          colorState="default"
          onClick={() => {
            dispatch(
              addReminder(reminder)
            )

            setReminder({...REMINDER_MODEL})
          }}
        >
          {currentReminder?.id ? 'Update' : 'Save'}
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
