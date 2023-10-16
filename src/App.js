import { useEffect, useState } from "react";

function App() {
  const [dt, setDt] = useState({});

  useEffect(() => {
    fetch("/api/dt")
      .then((res) => res.json())
      .then((data) => setDt(data));
  });

  function renderItems() {
    return (
      <div>
        <h3>Date: {dt.date}</h3>
        <h3>Text: {dt.text}</h3>
      </div>
    );
  }

  return (
    <main>
      <h1>DT Today</h1>
      {renderItems()}
    </main>
  );
}

export default App;
