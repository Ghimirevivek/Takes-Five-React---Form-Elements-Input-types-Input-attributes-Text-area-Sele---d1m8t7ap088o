import React,{ useState } from "react";
 function App() {
    const [page, setPage] = useState(1);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const nextpage = () => {
    setPage(page + 1);
    const newNumbers = [];
    for (let i = (page + 1) * 5 - 4; i <= (page + 1) * 5; i++) {
      newNumbers.push(i);
    }
    setNumbers(newNumbers);
  };

  const prevpage = () => {
    setPage(page - 1);
    const newNumbers = [];
    for (let i = (page - 2) * 5 + 1; i <= (page - 1) * 5; i++) {
      newNumbers.push(i);
    }
    setNumbers(newNumbers);
  };

  return (
    <div>
      <button id="back-button" onClick={prevpage} disabled={page === 1}>
        Previous
      </button>
      <button id="next-button" onClick={nextpage}>
        Next
      </button>
      <div>
        {numbers.map((number) => (
          <div key={number}>{number}</div>
        ))}
      </div>
    </div>
  );
}
export default App;
