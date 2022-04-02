import React from 'react';
import WeekDay from '../../components/WeekDay';
import {weekdays} from './utils'
import './styles.scss';

function Calendar(props) {
  // your calendar implementation Goes here!
  // Be creative 
  return (
    <div className="container">
        <h1>Calendar</h1>

        <div className='header'>
          { weekdays.map(weekday => ( <WeekDay title={weekday}/>))}
        </div>
    </div>
  )
}

export default Calendar;