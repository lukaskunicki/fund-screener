import React from "react";
import GenericExpandableTableRows from "../GenericExpandableTableRows";
import {
  StyledTable,
  StyledTableHeader,
  StyledTableHeaderRow,
} from "./StyledTable";

const Table = ({ tableRows, columnsConfig }) => {
  return (
    <StyledTable className="app-table">
      <StyledTableHeader>
        <StyledTableHeaderRow>
          {columnsConfig.map((header) => (
            <th key={header.label} scope="col">
              {header.label}
            </th>
          ))}
        </StyledTableHeaderRow>
      </StyledTableHeader>
      {tableRows.map((item) => {
        return (
          <GenericExpandableTableRows
            key={item.key}
            rowKey={item.key}
            subRows={item.value}
            columnsConfig={columnsConfig}
          />
        );
      })}
    </StyledTable>
  );
};

export default React.memo(Table);
