import { createSlice } from "@reduxjs/toolkit";
import { calendar, weekDays } from "../../utils.js";
import moment from "moment";
import { REMINDER_MODEL } from "../../models/reminder.js";


const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    calendar,
    weekDays,
    currentReminder: REMINDER_MODEL,
    showRegisterModal: false
  },
  reducers: {
    addReminder(
      state,
      { payload: { date, time, title, city } }
    ) {
      const check = moment(date, 'YYYY-MM-DD');
      const month = check.format('M').toString();
      const day = check.format('D').toString();
      const year = check.format('YYYY').toString();

      state.calendar[year][month].days
        .find((d) => d.day == day)
        .reminders.push({ id: Date.now() ,time, title, city, date, notified: false });
    },

    updateReminder(
      state,
      { payload }
    ) {
      const check = moment(payload.date, 'YYYY-MM-DD');
      const month = check.format('M').toString();
      const day = check.format('D').toString();
      const year = check.format('YYYY').toString();

      const index = state.calendar[year][month].days
        .find((d) => d.day == day)
        .reminders.findIndex(r => r.id === payload.id)

        if (index !== -1) {
          state.calendar[year][month].days
            .find((d) => d.day === day)
            .reminders.splice(index, 1)
        }

        state.calendar[year][month].days
          .find((d) => d.day === day)
          .reminders.push(payload)
        
    },

    setCurrentReminder(
      state,
      { payload: { currentReminder } }
    ) {
      state.currentReminder = currentReminder;
    },

    toggleShowRegisterModal(
      state,
      { payload }
    ) {
      state.showRegisterModal = payload.state;
    },

    setAlreadyNotified(state, {payload: {date, id}}) {
      const check = moment(date, 'YYYY-MM-DD');
      const month = check.format('M').toString();
      const day = check.format('D').toString();
      const year = check.format('YYYY').toString();

      state.calendar[year][month].days
        .find((d) => d.day == day)
        .reminders.find(r => r.id === id).notified = true;
    },

    clearCurrentReminder(
      state,
      {payload}
    ) {
      state.currentReminder = REMINDER_MODEL;
    }
  }
});

export const { addReminder, setCurrentReminder,toggleShowRegisterModal, updateReminder, setAlreadyNotified, clearCurrentReminder } = calendarSlice.actions;

export default calendarSlice.reducer;
