import { AuthHeader, HandleResponse } from "../_helpers";

export const UserService = {
  getAll,
};

function getAll() {
  const requestOptions = { method: "GET", headers: AuthHeader() };
  return fetch(`/users`, requestOptions).then(HandleResponse);
}
