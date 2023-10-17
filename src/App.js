import { useEffect, useState } from "react";

function App() {
  const [dt, setDt] = useState({});
  const [scripture, setScripture] = useState("");

  useEffect(() => {
    fetch("/api/dt")
      .then((res) => res.json())
      .then((data) => setDt(data));
  });

  useEffect(() => {
    fetch(`/api/esv/${dt.text}`)
      .then((res) => res.json())
      .then((data) => {
        const passages = data.passages[0].trim().split('[').filter(s => s !== "").join("<br />");
        setScripture(passages)
      });
  });

  function renderItems() {
    return (
      <div>
        <h3>Date: {dt.date}</h3>
        <h3>Reference: {dt.text}</h3>
        <p dangerouslySetInnerHTML={{__html: scripture}} />
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
