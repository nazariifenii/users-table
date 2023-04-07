import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  fetchUsersData,
  deleteUser,
  updateUser,
  setEditRow,
  createUser,
  setCreateUserRow,
} from "./actions/index";
import { clearObjectValues } from "./utils";

const UsersPage = () => {
  const dispatch = useDispatch();
  const [userData, editRow, createUserRow] = useSelector((state) => [
    state.users.users,
    state.users.editRow,
    state.users.createUserRow,
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

  const handleSaveUserData = (id) => {
    if (id === editRow?.id) {
      dispatch(updateUser(editRow));
    }
  };

  const handleCreateUser = () => {
    dispatch(createUser(createUserRow));
  };

  const onChangeCreateInput = (e) => {
    const { name: fieldName, value } = e.target;
    dispatch(setCreateUserRow({ ...createUserRow, [fieldName]: value }));
  };

  const handleClearCreateUserRow = () => {
    dispatch(setCreateUserRow(clearObjectValues(createUserRow)));
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
                      <button onClick={() => handleSaveUserData(id)}>
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
          <tr key={"create-new-user"}>
            <td>{null}</td>
            <td>
              <input
                name="name"
                value={createUserRow?.name}
                type="text"
                onChange={onChangeCreateInput}
                placeholder="Type Name"
              />
            </td>
            <td>
              <input
                name="age"
                value={createUserRow?.age}
                type="number"
                onChange={onChangeCreateInput}
                placeholder="Type age"
              />
            </td>
            <td>
              <input
                name="about"
                value={createUserRow?.about}
                type="text"
                onChange={onChangeCreateInput}
                placeholder="Type info"
              />
            </td>
            <td>
              <button onClick={handleCreateUser}>Add New</button>
              <button onClick={handleClearCreateUserRow}>Clear</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
