import axios from "axios";

const getAllUsers = () => {
  return axios
    .get("https://642fd97cb289b1dec4bb7234.mockapi.io/users")
    .then((response) => response.data);
};

const deleteUser = (id) => {
  return axios
    .delete("https://642fd97cb289b1dec4bb7234.mockapi.io/users/" + id)
    .then((response) => response.data);
};

const updateUser = (userData) => {
  const { id, ...withoutId } = userData;
  return axios
    .put("https://642fd97cb289b1dec4bb7234.mockapi.io/users/" + id, withoutId)
    .then((response) => response.data);
};

export default {
  getAllUsers,
  deleteUser,
  updateUser,
};
