import React, { useState } from "react";
import {
  StyledTableExpandableRow,
  StyledTableExpandableSubRow,
} from "./StyledExpandableTableRows";

const ExpandableTableRows = ({ rowKey, subRows, columnsConfig }) => {
  const [rowExpanded, setRowExpanded] = useState(false);
  if (!subRows?.length) return null;

  return (
    <tbody>
      <StyledTableExpandableRow expanded={rowExpanded}>
        <td colSpan="100%">
          <button onClick={() => setRowExpanded(!rowExpanded)}>{rowKey}</button>
        </td>
      </StyledTableExpandableRow>
      {!!rowExpanded &&
        subRows.map((subRow) => {
          return (
            <StyledTableExpandableSubRow key={subRow.isin}>
              {columnsConfig.map((col) => (
                <td tabIndex={0} key={col.label}>
                  {col.get(subRow)}
                </td>
              ))}
            </StyledTableExpandableSubRow>
          );
        })}
    </tbody>
  );
};

export default React.memo(ExpandableTableRows);
