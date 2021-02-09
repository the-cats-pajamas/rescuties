import { database } from "./firebase";

// User API

export const doCreateUser = (id, username, email) =>
  database.ref(`users/${id}`).set({
    user: username,
    email: email,
  });

export const onceGetUsers = () => database.ref("users").once("value");
