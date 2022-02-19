import React, { useState } from "react";
import {
  StyledTableExpandableRow,
  StyledTableExpandableSubRow,
} from "./table/StyledTable";

const GenericExpandableTableRows = ({ rowKey, subRows, columnsConfig }) => {
  const [rowExpanded, setRowExpanded] = useState(false);
  if (!subRows?.length) return null;
  return (
    <tbody>
      <StyledTableExpandableRow expanded={rowExpanded}>
        <td colSpan={columnsConfig.length}>
          <button onClick={() => setRowExpanded(!rowExpanded)}>{rowKey}</button>
        </td>
      </StyledTableExpandableRow>
      {!!rowExpanded &&
        subRows.map((subRow, index) => {
          return (
            <StyledTableExpandableSubRow key={index}>
              {columnsConfig.map((col, index) => (
                <td tabIndex={0} key={index}>
                  {col.get(subRow)}
                </td>
              ))}
            </StyledTableExpandableSubRow>
          );
        })}
    </tbody>
  );
};

export default React.memo(GenericExpandableTableRows);
