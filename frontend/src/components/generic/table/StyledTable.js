import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const StyledTableHeader = styled.thead`
  background: #fafafa;
`;
const StyledTableHeaderRow = styled.tr`
  border-bottom: 2px solid #e8e8e8;
  & > th {
    padding: 30px 0;
  }
`;
const StyledTableExpandableRow = styled.tr`
  border-bottom: 2px solid #e8e8e8;
  & > td {
    &:first-child {
      width: 30%;
    }
    & > button {
      padding: 30px 40px;
      width: 100%;
      border: none;
      background: #ffffff;
      text-align: left;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      
      &:before {
        content: " ";
        position: absolute;
        left: 0;
        display: inline-block;
        width: 24px;
        height: 24px;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 12V15M9 12H12H9ZM15 12H12H15ZM12 12V9V12Z' stroke='%23F7797D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z' stroke='%23F7797D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    }
  }
`;

const StyledTableExpandableSubRow = styled.tr`
  border-bottom: 2px solid #e8e8e8;
  background: #f8f8f8;
  & > td {
    text-align: center;
    &:first-child {
      width: 30%;
      text-align: left;
      padding: 30px 0 30px 25px;
    }
  }
`;

export {
  StyledTable,
  StyledTableHeader,
  StyledTableHeaderRow,
  StyledTableExpandableRow,
  StyledTableExpandableSubRow,
};
