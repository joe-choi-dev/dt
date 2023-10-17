import { useEffect, useState } from "react";

function App() {
  const [dt, setDt] = useState({}); // {"date":"Tuesday, October 17, 2023","text":"Galatians 4-6"}
  const [esvResp, setEsvResp] = useState({}); // esv api body
  const [esvDisplayText, setEsvDisplayText] = useState(""); // esv text to display

  useEffect(() => {
    fetch("/api/dt")
      .then((res) => res.json())
      .then((data) => setDt(data));
  }, []);

  useEffect(() => {
    fetch(`/api/esv/${dt.text}`)
      .then((res) => res.json())
      .then((data) => {
        setEsvResp(data);
        (data.hasOwnProperty("passages") && Array.isArray(data.passages) && data.passages.length > 0) 
          && setEsvDisplayText(data.passages[0].trim().split('[').filter(s => s !== "").join("<br />"));
      });
  }, [dt]);

  function renderItems() {
    const esvUrl = `https://esv.org/${dt.text}`;

    const lineByLine = (esvResp.hasOwnProperty("passages") && Array.isArray(esvResp.passages) && esvResp.passages.length > 0)  
      ? esvResp.passages[0].trim().split('[').filter(s => s !== "").join("\r\n") 
      : "";
    const paragraph = (esvResp.hasOwnProperty("passages") && Array.isArray(esvResp.passages) && esvResp.passages.length > 0)  
      ? esvResp.passages[0] 
      : "";
    return (
      <div>
        <h3>Date - {dt.date}</h3>
        <h3><a href={esvUrl}>Text - {dt.text}</a></h3>
        {esvDisplayText !== "" ? (
          <div>
            <button onClick={() => {navigator.clipboard.writeText(lineByLine)}}>Copy Text - Line by Line</button>
            <button onClick={() => {navigator.clipboard.writeText(paragraph)}}>Copy Text - Paragraph Format</button>
            <p dangerouslySetInnerHTML={{__html: esvDisplayText}} />
          </div>
        ): <div/>}
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
