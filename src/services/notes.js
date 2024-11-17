import axios from "axios";
const baseUrl = "http://localhost:3001/notes/";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (noteObject) => {
  const request = axios.post(baseUrl, noteObject);
  return request.then((response) => response.data);
};

const update = (changeNote, id) => {
  const request = axios.put(baseUrl + id, changeNote);
  return request.then((response) => response.data);
};
export default {
  getAll,
  create,
  update,
};
