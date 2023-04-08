import React, { useEffect } from "react";
import * as R from "ramda";
import { useSelector, useDispatch } from "react-redux";
import Actions from "./actions";
import {
  Container,
  Table,
  TableHeaderCell,
  TableDataCell,
  TableCellInput,
  Button,
  TableCellText,
  TableDataActionsCell,
  ButtonLeft,
  TableRow,
  TableEditRow,
} from "./App.styled";
import Toast from "./components/Toast/Toast";
import { genToastNotification } from "./components/Toast/toastProperties";
import { clearObjectValues } from "./utils";

const UsersPage = () => {
  const dispatch = useDispatch();
  const [usersByIds, usersIds, editUserRow, createUserRow, notificationList] =
    useSelector((state) => [
      state.users.usersByIds,
      state.users.usersIds,
      state.users.editUserRow,
      state.users.createUserRow,
      state.users.notificationList,
    ]);

  useEffect(() => {
    dispatch(Actions.fetchUsersData());
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    dispatch(Actions.deleteUser({ id }));
  };

  const onChangeEditInput = (e) => {
    const { name: fieldName, value } = e.target;
    dispatch(Actions.setEditUserRow(R.assoc([fieldName], value, editUserRow)));
  };

  const handleEditUser = (id) => {
    dispatch(Actions.setEditUserRow(usersByIds[id]));
  };

  const handleSaveUserData = () => {
    if (editUserRow.name && editUserRow.age && editUserRow.about) {
      dispatch(Actions.updateUser(editUserRow));
    } else {
      dispatch(
        Actions.addNotification(
          genToastNotification("error", "All the fields should be filled")
        )
      );
    }
  };

  const handleCreateUser = () => {
    if (createUserRow.name && createUserRow.age && createUserRow.about) {
      dispatch(Actions.createUser(createUserRow));
    } else {
      dispatch(
        Actions.addNotification(
          genToastNotification("error", "All the fields should be filled")
        )
      );
    }
  };

  const onChangeCreateInput = (e) => {
    const { name: fieldName, value } = e.target;
    dispatch(
      Actions.setCreateUserRow(R.assoc([fieldName], value, createUserRow))
    );
  };

  const handleClearCreateUserRow = () => {
    dispatch(Actions.setCreateUserRow(clearObjectValues(createUserRow)));
  };

  const handleCancelEdit = () => {
    dispatch(Actions.setEditUserRow({}));
  };

  const deleteToast = (id) => {
    dispatch(Actions.removeNotification(id));
  };

  return (
    <Container>
      <Toast
        toastList={notificationList}
        autoDelete={true}
        autoDeleteTime={2000}
        deleteToast={deleteToast}
      />
      <Table>
        <thead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Age</TableHeaderCell>
            <TableHeaderCell>About</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
        </thead>
        <tbody>
          {usersIds.length === 0
            ? null
            : usersIds.map((id) => {
                const { name, age, about } = usersByIds[id];
                const isRowEditable = editUserRow?.id === id;
                return (
                  <TableRow editable={isRowEditable} key={id}>
                    <TableDataCell>
                      <TableCellText>{id}</TableCellText>
                    </TableDataCell>
                    <TableDataCell>
                      {isRowEditable ? (
                        <TableCellInput
                          name="name"
                          value={editUserRow?.name}
                          type="text"
                          onChange={(e) => onChangeEditInput(e, id)}
                          placeholder="Type Name"
                        />
                      ) : (
                        <TableCellText>{name}</TableCellText>
                      )}
                    </TableDataCell>
                    <TableDataCell>
                      {isRowEditable ? (
                        <TableCellInput
                          name="age"
                          min="0"
                          max="200"
                          value={editUserRow?.age}
                          type="number"
                          onChange={(e) => onChangeEditInput(e, id)}
                          placeholder="Type age"
                        />
                      ) : (
                        <TableCellText>{age}</TableCellText>
                      )}
                    </TableDataCell>
                    <TableDataCell>
                      {isRowEditable ? (
                        <TableCellInput
                          name="about"
                          value={editUserRow?.about}
                          type="text"
                          onChange={(e) => onChangeEditInput(e, id)}
                          placeholder="Type info"
                        />
                      ) : (
                        <TableCellText>{about}</TableCellText>
                      )}
                    </TableDataCell>
                    <TableDataActionsCell>
                      {isRowEditable ? (
                        <>
                          <ButtonLeft
                            type="create"
                            onClick={handleSaveUserData}
                          >
                            Save
                          </ButtonLeft>
                          <Button onClick={handleCancelEdit}>Cancel</Button>
                        </>
                      ) : (
                        <>
                          <ButtonLeft onClick={() => handleEditUser(id)}>
                            Edit
                          </ButtonLeft>
                          <Button
                            type="error"
                            onClick={() => handleDeleteUser(id)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </TableDataActionsCell>
                  </TableRow>
                );
              })}
          <TableEditRow key={"create-new-user"}>
            <TableDataCell>{null}</TableDataCell>
            <TableDataCell>
              <TableCellInput
                name="name"
                value={createUserRow?.name}
                type="text"
                onChange={onChangeCreateInput}
                placeholder="Type Name"
              />
            </TableDataCell>
            <TableDataCell>
              <TableCellInput
                name="age"
                min="0"
                max="200"
                value={createUserRow?.age}
                type="number"
                onChange={onChangeCreateInput}
                placeholder="Type Age"
              />
            </TableDataCell>
            <TableDataCell>
              <TableCellInput
                name="about"
                value={createUserRow?.about}
                type="text"
                onChange={onChangeCreateInput}
                placeholder="Type Info"
              />
            </TableDataCell>
            <TableDataActionsCell>
              <ButtonLeft type="create" onClick={handleCreateUser}>
                Add New
              </ButtonLeft>
              <Button onClick={handleClearCreateUserRow}>Clear</Button>
            </TableDataActionsCell>
          </TableEditRow>
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersPage;
