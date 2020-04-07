import axios from "axios";

export default axios.create({
  baseURL: "https://podomoro-212c5.firebaseio.com",
  // timeout: 10000,
  // withCredentials: true,
  // // transformRequest: [(data) => JSON.stringify(data.data)],
  headers: {
    // "Access-Control-Allow-Origin": "http://localhost:3000",
    // "Access-Control-Allow-Headers": "Content-Type, X-Access-Token",
    // "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
    // "Access-Control-Allow-Credentials": "true"
  }
  // status: 200
});
