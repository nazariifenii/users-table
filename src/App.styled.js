import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
  margin-top: 70px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeaderCell = styled.th`
  font-size: 18px;
  padding: 12px;
  border: 1px solid #eeeeee;
  text-align: left;
  background-color: rgba(217, 221, 146, 0.2);
`;

export const TableDataCell = styled.td`
  border: 1px solid #eeeeee;
  text-align: left;
`;

export const TableDataActionsCell = styled(TableDataCell)`
  border: 1px solid #eeeeee;
  text-align: center;
`;

export const TableCellInput = styled.input`
  font-size: 16px;
  background-color: transparent;
  border: none;
  width: 80%;
  padding: 12px 12px;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #fffaf3;
  }

  &:focus {
    outline: 1px solid #ccc;
    border: 1px solid #ccc;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-size: 11px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 80px;

  &:hover {
    background-color: #f7fafa;
  }

  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;

export const ButtonLeft = styled(Button)`
  margin-right: 5px;
`;

export const TableCellText = styled.p`
  max-width: 550px;
  padding: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
