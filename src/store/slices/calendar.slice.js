import { createSlice } from "@reduxjs/toolkit";
import { calendar, weekDays } from "../../utils.js";
import moment from "moment";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    calendar,
    weekDays
  },
  reducers: {
    addReminder(
      state,
      { payload: { date, time, title, city } }
    ) {
      const check = moment(date, 'YYYY-MM-DD');
      const month = check.format('M').toString();
      const day = check.format('DD').toString();
      const year = check.format('YYYY').toString();

      state.calendar[year][month].days
        .find((d) => d.day === day)
        .reminders.push({ id: Date.now() ,time, title, city, date });
    }
  }
});

export const { addReminder } = calendarSlice.actions;

export default calendarSlice.reducer;
