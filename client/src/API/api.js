import axios from "axios";

let url = "http://localhost:5050";

if ((process.env.NODE_ENV = "production")) {
  url = "";
}
export const api = axios.create({ baseURL: url });
