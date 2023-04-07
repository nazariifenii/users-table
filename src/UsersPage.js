import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  fetchUsersData,
  deleteUser,
  updateUser,
  setEditRow,
} from "./actions/index";

const UsersPage = () => {
  const dispatch = useDispatch();
  const [userData, editRow] = useSelector((state) => [
    state.users.users,
    state.users.editRow,
  ]);

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const onChangeInput = (e) => {
    const { name: fieldName, value } = e.target;
    dispatch(setEditRow({ ...editRow, [fieldName]: value }));
  };

  const handleEditUser = (id) => {
    dispatch(setEditRow(userData.find((user) => user.id === id)));
  };

  const handleSaveUserData = (e, id) => {
    if (id === editRow?.id) {
      dispatch(updateUser(editRow));
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>About</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length &&
            userData.map(({ id, name, age, about }) => {
              const isRowEditable = editRow?.id === id;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    {isRowEditable ? (
                      <input
                        name="name"
                        value={editRow?.name}
                        type="text"
                        onChange={(e) => onChangeInput(e, id)}
                        placeholder="Type Name"
                      />
                    ) : (
                      name
                    )}
                  </td>
                  <td>
                    {isRowEditable ? (
                      <input
                        name="age"
                        value={editRow?.age}
                        type="number"
                        onChange={(e) => onChangeInput(e, id)}
                        placeholder="Type age"
                      />
                    ) : (
                      age
                    )}
                  </td>
                  <td>
                    {isRowEditable ? (
                      <input
                        name="about"
                        value={editRow?.about}
                        type="text"
                        onChange={(e) => onChangeInput(e, id)}
                        placeholder="Type info"
                      />
                    ) : (
                      about
                    )}
                  </td>
                  <td>
                    {isRowEditable ? (
                      <button onClick={(e) => handleSaveUserData(e, id)}>
                        Save
                      </button>
                    ) : (
                      <>
                        <button onClick={() => handleDeleteUser(id)}>
                          Delete
                        </button>
                        <button onClick={() => handleEditUser(id)}>Edit</button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
