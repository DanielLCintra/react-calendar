import React from "react";
import PropTypes from "prop-types";
import './styles.scss'

function Button(props) {
  const { onClick, children, colorState } = props;

  return <button className={`calendar-button ${colorState}`} onClick={onClick}>{children}</button>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  colorState: PropTypes.string.isRequired
};

export default Button;
