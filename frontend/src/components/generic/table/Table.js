import React from "react";
import PropTypes from "prop-types";
import GenericExpandableTableRows from "./expandable-table-row/ExpandableTableRows";
import {
  StyledAlternativeCell,
  StyledTable,
  StyledTableHeader,
  StyledTableHeaderRow,
  TableWrapper,
} from "./StyledTable";

const Table = ({ tableRows, columnsConfig, alternativeMessage }) => {
  const hasSubRows = tableRows.some((row) => row.value?.length);
  return (
    <TableWrapper>
      <StyledTable>
        <StyledTableHeader>
          <StyledTableHeaderRow>
            {columnsConfig.map((header) => (
              <th key={header.label} scope="col">
                {header.label}
              </th>
            ))}
          </StyledTableHeaderRow>
        </StyledTableHeader>
        {!!hasSubRows &&
          tableRows.map((item) => {
            return (
              <GenericExpandableTableRows
                key={item.key}
                rowKey={item.key}
                subRows={item.value}
                columnsConfig={columnsConfig}
              />
            );
          })}
        {!hasSubRows && (
          <tbody>
            <tr>
              <StyledAlternativeCell colSpan="100%">
                {alternativeMessage}
              </StyledAlternativeCell>
            </tr>
          </tbody>
        )}
      </StyledTable>
    </TableWrapper>
  );
};

Table.propTypes = {
  tableRows: PropTypes.arrayOf(Object).isRequired,
  columnsConfig: PropTypes.arrayOf(Object).isRequired,
  alternativeMessage: PropTypes.string.isRequired,
};

export default React.memo(Table);
