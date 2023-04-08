import axios from "axios";

const getAllUsers = () => {
  return axios
    .get("https://642fd97cb289b1dec4bb7234.mockapi.io/users")
    .then((response) => response.data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

const deleteUser = (id) => {
  return axios
    .delete("https://642fd97cb289b1dec4bb7234.mockapi.io/users/" + id)
    .then((response) => response.data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

const updateUser = (userData) => {
  const { id, ...withoutId } = userData;
  return axios
    .put("https://642fd97cb289b1dec4bb7234.mockapi.io/users/" + id, withoutId)
    .then((response) => response.data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

const createUser = (userData) => {
  return axios
    .post("https://642fd97cb289b1dec4bb7234.mockapi.io/users", userData)
    .then((response) => response.data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

const API = {
  getAllUsers,
  deleteUser,
  updateUser,
  createUser,
};

export default API;
