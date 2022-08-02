import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

const create = (contact) => {
  return axios.post(baseUrl, contact).then((res) => res.data);
};
// eslint-disable-next-line
export default {
  getAll,
  create,
};
