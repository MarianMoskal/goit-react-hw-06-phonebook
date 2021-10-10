import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const INITIAL_STATE = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const contacts = createReducer(INITIAL_STATE.contacts, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer(INITIAL_STATE.filter, {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });

// const contactsReducer = (state = INITIAL_STATE.contacts, { type, payload }) => {

//     switch (type) {
//         case ADD:
//             return [...state, payload]

//         case DELETE:
//             return state.filter(({id}) => id !== payload)

//         default:
//             return state;
//     }
// };

// const filterReducer = (state = INITIAL_STATE.filter, {type, payload}) => {
//     switch (type) {
//         case CHANGE_FILTER:
//             return  payload;

//         default:
//             return state;
//     }
// };
