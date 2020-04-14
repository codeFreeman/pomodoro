import axios from "axios";

export default axios.create({
  baseURL: "https://podomoro-212c5.firebaseio.com",
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Headers": "Content-Type, X-Access-Token",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
  },
});
