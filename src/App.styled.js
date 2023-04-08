import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeaderCell = styled.th`
  font-size: 18px;
  padding: 12px;
  color: rgb(64, 81, 59);
  border: 1px solid #eeeeee;
  text-align: center;
  background-color: rgb(157, 192, 139);
`;

export const TableDataCell = styled.td`
  border: 1px solid #eeeeee;
  text-align: left;
`;

export const TableDataActionsCell = styled(TableDataCell)`
  text-align: center;
`;

export const TableCellInput = styled.input`
  font-size: 16px;
  background-color: transparent;
  border: none;
  width: 80%;
  padding: 12px 12px;
  font-family: "Poppins", sans-serif;

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
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
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
    background-color: ${(props) => {
      switch (props.type) {
        case "create":
          return "rgba(96, 153, 102, 0.4)";
        case "error":
          return "rgba(250, 112, 112, 0.4)";
        default:
          return "#f7fafa";
      }
    }};
  }

  &:focus {
    box-shadow: rgb(237, 241, 214) 0 2px 5px 0;
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

export const TableRow = styled.tr`
  background-color: ${(props) =>
    props.editable ? "rgba(237, 241, 214, 0.2)" : "transparent"};
`;

export const TableEditRow = styled.tr`
  background-color: rgba(237, 241, 214, 0.2);
`;
