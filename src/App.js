import "./App.css";
import { useState, useEffect, useRef, useCallback } from "react";
import List from "./list";
import Pagenation from "./Pagenation";
import Search from "./Search";
import TableRows from "./TableRows";

const PER_PAGE_ROWS = 10;

function App() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const timerRef = useRef(null);

  useEffect(() => {
    setList(List);
  }, []);

  const setSearchHandler = useCallback((e) => {
    const searchVal = e.target.value;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (searchVal) {
        const searchList = List.filter((listItem) =>
          listItem.name.toLowerCase().includes(searchVal.toLowerCase())
        );
        setList(searchList);
        setPage(1);
      } else {
        setList(List);
      }
    }, 500);
    setSearch(searchVal);
  }, []);

  const pagenationList = list.slice(
    page * PER_PAGE_ROWS - PER_PAGE_ROWS,
    page * PER_PAGE_ROWS
  );

  return (
    <div className="App">
      <Search search={search} setSearchHandler={setSearchHandler} />
      <table className="table">
        <thead>
          <tr>
            <th>SNo</th>
            <th>Name</th>
            <th>Type</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {pagenationList.map((listItem, index) => (
            <TableRows
              listItem={listItem}
              index={index}
              PER_PAGE_ROWS={PER_PAGE_ROWS}
              page={page}
            />
          ))}
          {pagenationList.length === 0 ? (
            <tr>
              <td colSpan={4}>No Data Found</td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <Pagenation
        page={page}
        setPage={setPage}
        listLen={list.length}
        PER_PAGE_ROWS={PER_PAGE_ROWS}
      />
    </div>
  );
}

export default App;
