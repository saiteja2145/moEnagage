import React from "react";

const Pagenation = ({ page, setPage, listLen, PER_PAGE_ROWS }) => {
  return (
    <div className="pagenation__container">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous Page
      </button>
      {new Array(Math.ceil(listLen / PER_PAGE_ROWS))
        .fill(true)
        .map((pageVal, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={page === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === Math.ceil(listLen / PER_PAGE_ROWS)}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagenation;
