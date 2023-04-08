import React, { useEffect } from "react";
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
import { clearObjectValues } from "./utils";

const UsersPage = () => {
  const dispatch = useDispatch();
  const [userData, editUserRow, createUserRow] = useSelector((state) => [
    state.users.users,
    state.users.editUserRow,
    state.users.createUserRow,
  ]);

  useEffect(() => {
    dispatch(Actions.fetchUsersData());
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    dispatch(Actions.deleteUser({ id }));
  };

  const onChangeInput = (e) => {
    const { name: fieldName, value } = e.target;
    dispatch(Actions.setEditUserRow({ ...editUserRow, [fieldName]: value }));
  };

  const handleEditUser = (id) => {
    dispatch(Actions.setEditUserRow(userData.find((user) => user.id === id)));
  };

  const handleSaveUserData = (id) => {
    if (id === editUserRow?.id) {
      dispatch(Actions.updateUser(editUserRow));
    }
  };

  const handleCreateUser = () => {
    dispatch(Actions.createUser(createUserRow));
  };

  const onChangeCreateInput = (e) => {
    const { name: fieldName, value } = e.target;
    dispatch(
      Actions.setCreateUserRow({ ...createUserRow, [fieldName]: value })
    );
  };

  const handleClearCreateUserRow = () => {
    dispatch(Actions.setCreateUserRow(clearObjectValues(createUserRow)));
  };

  const handleCancelEdit = () => {
    dispatch(Actions.setEditUserRow({}));
  };

  return (
    <Container>
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
          {userData.length === 0
            ? null
            : userData.map(({ id, name, age, about }) => {
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
                          onChange={(e) => onChangeInput(e, id)}
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
                          onChange={(e) => onChangeInput(e, id)}
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
                          onChange={(e) => onChangeInput(e, id)}
                          placeholder="Type info"
                        />
                      ) : (
                        <TableCellText>{about}</TableCellText>
                      )}
                    </TableDataCell>
                    <TableDataActionsCell>
                      {isRowEditable ? (
                        <>
                          <ButtonLeft type="create" onClick={() => handleSaveUserData(id)}>
                            Save
                          </ButtonLeft>
                          <Button onClick={handleCancelEdit}>Cancel</Button>
                        </>
                      ) : (
                        <>
                          <ButtonLeft onClick={() => handleEditUser(id)}>
                            Edit
                          </ButtonLeft>
                          <Button type="error" onClick={() => handleDeleteUser(id)}>
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
              <ButtonLeft type="create" onClick={handleCreateUser}>Add New</ButtonLeft>
              <Button onClick={handleClearCreateUserRow}>Clear</Button>
            </TableDataActionsCell>
          </TableEditRow>
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersPage;
