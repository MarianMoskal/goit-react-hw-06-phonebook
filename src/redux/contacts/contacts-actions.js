import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/change_filter");

// const addContact = (name, number) => ({
//     type: ADD,
//     payload: { id: uuidv4(), name, number }
// });

// const deleteContact = (id) => ({
//     type: DELETE,
//     payload: id
//     }
// );

// const changeFilter = (value) => ({
//     type: CHANGE_FILTER,
//     payload: value
// });
