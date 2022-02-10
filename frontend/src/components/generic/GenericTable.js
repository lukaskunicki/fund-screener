import React from "react";
import GenericExpandableTableRows from "./GenericExpandableTableRows";

const GenericTable = ({ tableHeaders, tableRows }) => {
  const columnPaths = ["fundName", "isin", "region", "type", "launchDate"];
  return (
    <div className="table-container">
      <table className="app-table">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((item) => {
            return (
              <GenericExpandableTableRows
                key={item.key}
                rowKey={item.key}
                subRows={item.value}
                columnPaths={columnPaths}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(GenericTable);
