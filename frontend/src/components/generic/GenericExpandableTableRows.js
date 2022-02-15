import React, { useState } from "react";

const GenericExpandableTableRows = ({ rowKey, subRows, columnPaths }) => {
  const [rowExpanded, setRowExpanded] = useState(false);
  if (!subRows?.length) return null;
  return (
    <>
      <tr>
        <td
          colSpan={columnPaths.length}
          onClick={() => setRowExpanded(!rowExpanded)}
        >
          {rowKey}
        </td>
      </tr>
      {!!rowExpanded &&
        subRows.map((subRow, index) => {
          return (
            <tr key={index}>
              {columnPaths.map((col) => (
                <td tabIndex={0} key={subRow[col]}>
                  {subRow[col]}
                </td>
              ))}
            </tr>
          );
        })}
    </>
  );
};

export default React.memo(GenericExpandableTableRows);
