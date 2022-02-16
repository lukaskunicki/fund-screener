import React, { useState } from "react";

const GenericExpandableTableRows = ({ rowKey, subRows, columnsConfig }) => {
  const [rowExpanded, setRowExpanded] = useState(false);
  if (!subRows?.length) return null;
  return (
    <tbody>
      <tr>
        <td
          colSpan={columnsConfig.length}
          onClick={() => setRowExpanded(!rowExpanded)}
        >
          {rowKey}
        </td>
      </tr>
      {!!rowExpanded &&
        subRows.map((subRow, index) => {
          return (
            <tr key={index}>
              {columnsConfig.map((col, index) => (
                <td tabIndex={0} key={index}>
                  {col.get(subRow)}
                </td>
              ))}
            </tr>
          );
        })}
    </tbody>
  );
};

export default React.memo(GenericExpandableTableRows);
