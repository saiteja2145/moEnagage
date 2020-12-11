import React from "react";

const TableRows = ({ listItem, page, PER_PAGE_ROWS, index }) => {
  return (
    <tr key={listItem._id}>
      <td>{page * PER_PAGE_ROWS - PER_PAGE_ROWS + index}</td>
      <td className="name">{listItem.name}</td>
      <td>{listItem.type}</td>
      <td>{listItem.company}</td>
    </tr>
  );
};

export default TableRows;
