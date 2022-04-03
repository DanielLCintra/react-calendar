import React from "react";
import PropTypes from "prop-types";
import './styles.scss'
import Button from "../Button";

function ReminderRegisterModal(props) {
  const { title = 'Título do modal', handleClose } = props;

  return (<div className="modal-container">
    <div className="modal-header">
      <h1 className="modal-title"> {title}</h1>
      <button className="modal-close-button" onClick={handleClose}> X</button>
    </div>
    <div className="modal-body">
      <div className="input-container">
        <label className="input-label">Title</label>
        <input className="input-form" type="text" />
      </div>

      <div className="input-container">
        <label className="input-label">Date</label>
        <input className="input-form" type="date" />
      </div>

      <div className="input-container">
        <label className="input-label">Time</label>
        <input className="input-form" type="time" />
      </div>

      <div className="input-container">
        <label className="input-label">City</label>
        <input className="input-form" type="text" />
      </div>
    </div>
    <div className="modal-footer">
      <Button colorState='danger' onClick={handleClose}>Cancel</Button>
      <Button colorState='default'>Save</Button>
    </div>
  </div>);
}

ReminderRegisterModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default ReminderRegisterModal;
