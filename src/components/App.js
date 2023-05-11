import { useState } from "react";
 function App() {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(5);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const update = () => {
    const display = [];
    for (let i = start; i <= end; i++) {
      display.push(<div key={i}>{i}</div>);
    }
    return display;
  };
  const prevpage = () => {
    setPage(page - 1);
    setStart((page - 2) * 5 + 1);
    setEnd((page - 1) * 5);
    if (page === 2) {
      setPrevBtnDisabled(true);
    }
  };
  const nextpage = () => {
    setPage(page + 1);
    setStart((page - 1) * 5 + 1);
    setEnd(page * 5);
    setPrevBtnDisabled(false);
  };
  return (
    <div className="App">
      <div id="number-display">{update()}</div>
      <button id="back-button" disabled={prevBtnDisabled} onClick={prevpage}>
        Prev Page
      </button>
      <button id="next-button" onClick={nextpage}>
        Next Page
      </button>
    </div>
  );
}
export default App;
