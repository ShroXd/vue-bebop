import Axios from "axios";

const config = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://49.232.5.176:1451/"
      : "/dev",
  timeout: 60000,
  responseType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
};

const axios = Axios.create(config);

export { axios };
