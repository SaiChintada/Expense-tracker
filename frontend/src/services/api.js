import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-nfcd.onrender.com",
});

export default API;