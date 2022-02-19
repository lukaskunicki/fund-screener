import styled from "styled-components";

const plusBase64Icon =
  "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none'" +
  " xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 12V15M9 12H12H9ZM15 12H12H15ZM12 12V9V12Z' " +
  "stroke='%23F7797D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath " +
  "d='M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z' " +
  "stroke='%23F7797D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A";

const minusBase64Icon =
  "data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' " +
  "fill='none'%3E%3Cg%3E%3Cpath id='svg_1' stroke-linejoin='round' stroke-linecap='round' " +
  "stroke-width='1.5' stroke='%23F7797D' d='m12,12l0,3m-3,-3l3,0l-3,0zm6,0l-3,0l3,0zm-3,0l0,-3l0,3z'/%3E%3Cpath id='svg_2' stroke-linejoin='round' " +
  "stroke-linecap='round' stroke-width='1.5' stroke='%23F7797D' d='m21,3.6l0,16.8c0,0.3314 -0.2686,0.6 -0.6,0.6l-16.8,0c-0.33137,0 -0.6,-0.2686 -0.6,-0.6l0,-16.8c0,-0.33137 0.26863,-0.6 0.6,-0.6l16.8,0c0.3314,0 0.6,0.26863 0.6,0.6z'/%3E%3Crect " +
  "fill='%23ffffff' stroke='%23ffffff' id='svg_15' height='2.75723' width='3.90047' y='13.51201' x='10.09247' stroke-width='1.5'/%3E%3Crect stroke='%23ffffff' fill='%23ffffff' id='svg_16' height='2.75723' width='3.90047' y='7.71787' x='10.01453' " +
  "stroke-width='1.5'/%3E%3C/g%3E%3C/svg%3E";

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
    
    &:first-child {
      width: 30%;
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
        background-image: url("${(props) =>
          props.expanded === true ? minusBase64Icon : plusBase64Icon}")
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
