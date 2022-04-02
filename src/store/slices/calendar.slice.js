import { createSlice } from "@reduxjs/toolkit";
import { calendar, weekDays } from "../../utils.js";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    calendar,
    weekDays
  },
  reducers: {
    addReminder(
      state,
      { payload: { year, month, day, hour, description, city } }
    ) {
      state.calendar[year][month].days
        .find((d) => d.day === day)
        .reminders.push({ hour, description, city });
    }
  }
});

export const { addReminder } = calendarSlice.actions;

export default calendarSlice.reducer;
