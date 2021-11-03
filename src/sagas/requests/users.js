import axios from "axios";

export const requestGetUsers = () => {
  console.log("API request made...");
  return axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });
};
