import styled from "styled-components";

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

const StyledAlternativeCell = styled.td`
  padding: 35px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
`;

export {
  TableWrapper,
  StyledTable,
  StyledTableHeader,
  StyledTableHeaderRow,
  StyledAlternativeCell,
};
