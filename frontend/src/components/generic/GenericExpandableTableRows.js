import React from "react";

const GenericExpandableTableRows = ({ rowKey, subRows, columnPaths }) => {
  return (
    <>
      <tr>
        <td colSpan={columnPaths.length}>{rowKey}</td>
      </tr>
      {subRows.map((subRow, index) => {
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
