import { axios } from "./base/base";

export default {
  getBooks(param) {
    return axios.get("/books", { params: param });
  }
};
