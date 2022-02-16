import React from "react";
import GenericExpandableTableRows from "./GenericExpandableTableRows";

const GenericTable = ({ tableRows, columnsConfig }) => {
  return (
    <div className="table-container">
      <table className="app-table">
        <thead>
          <tr>
            {columnsConfig.map((header) => (
              <th key={header.label} scope="col">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
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
      </table>
    </div>
  );
};

export default React.memo(GenericTable);
