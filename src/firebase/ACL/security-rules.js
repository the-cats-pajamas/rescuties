import { database } from "../firebase";

// User API

export const setUpRole = (id, role) =>
  database.ref(`roles/${id}`).set({
    [id]: role, 
  });

export const grabRoles = () => database.ref("roles").once("value");