import axios from "axios";
const baseURL = "http://localhost:3001/persons/";

const getAll = async () => {
  const request = axios.get(baseURL);
  const response = await request;
  return response.data;
};

const createPhonebook = (newContact) => {
  axios.post(baseURL, newContact).then((response) => {
    return response.data;
  });
};
const update = (id, updatedContact) =>
  axios.put(`${baseURL}/?id=${id}`, updatedContact).then((res) => res.data);

const remove = (id) => axios.delete(`${baseURL}/?id=${id}`);

export default { getAll, createPhonebook, update, remove };
