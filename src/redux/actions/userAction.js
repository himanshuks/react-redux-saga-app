export const getUsersData = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};

export const setUsersData = (data) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: data,
  };
};
