import styled from "styled-components";
import PlusIcon from "../../../assets/icons/PlusIcon.svg";
import MinusIcon from "../../../assets/icons/MinusIcon.svg";

const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
`;
const StyledTable = styled.table`
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
`;
const StyledTableHeader = styled.thead`
  background: #fafafa;
`;
const StyledTableHeaderRow = styled.tr`
  border-bottom: 2px solid #e8e8e8;
  & > th {
    font-family: Heebo;
    font-size: 14px;
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
      padding: 30px 61px;
      width: 100%;
      border: none;
      background: #ffffff;
      text-align: left;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      font-size: 14px;
      
      &:before {
        content: " ";
        position: absolute;
        left: 17px;
        display: inline-block;
        width: 24px;
        height: 24px;
        background-image: url("${(props) =>
          props.expanded === true ? MinusIcon : PlusIcon}")
    }
  }
`;

const StyledTableExpandableSubRow = styled.tr`
  border-bottom: 2px solid #e8e8e8;
  background: #f8f8f8;
  & > td {
    font-size: 14px;
    text-align: center;
    &:first-child {
      width: 30%;
      text-align: left;
      padding: 20px 0 20px 25px;
    }
  }
`;

export {
  TableWrapper,
  StyledTable,
  StyledTableHeader,
  StyledTableHeaderRow,
  StyledTableExpandableRow,
  StyledTableExpandableSubRow,
};
