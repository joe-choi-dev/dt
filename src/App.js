import { useEffect, useState } from "react";

function App() {
  const [dt, setDt] = useState({}); // {"date":"Tuesday, October 17, 2023","text":"Galatians 4-6", "questions": []}
  const [passageReqArr, setPassageReqArr] = useState([]); // {"date":"Tuesday, October 17, 2023","text":"Galatians 4-6", "questions": []}
  const [esvResp, setEsvResp] = useState({}); // esv api body
  const [esvDisplayText, setEsvDisplayText] = useState(""); // esv text to display

  function parseJSON(response) {
    return response.json();
  }

  useEffect(() => {
    fetch("/api/dt")
      .then((res) => res.json())
      .then((data) => {
        // Assumptions:
        // chapters are always between the "-" in the first segment of the ":" ie. 2 Thessalonians 1-3, 2 Thessalonians 1, 2 Thessalonians 1:1-10, 2 & 3 John
        // verses are always the range after the first ":"
        // if a single passage containers verses, it doesn't have multiple chapters ie. 2 Thessalonians 1:1-10
        //
        // examples: 
        // 2 Thessalonians 1-3 -> [2 Thessalonians 1, 2 Thessalonians 2, 2 Thessalonians 3]
        // 
        function passageBreakdown(passage) {
          let psg = !passage.includes(" ") ? `${passage} 1`: passage; // ie. Philemon (other 1 chpt books)

          const isNumberedBook = (psg.match(/^\d/)); //starts with a number
          const containsVerses = psg.includes(":");
          const book = isNumberedBook ? `${psg.split(" ")[0]} ${psg.split(" ")[1]}`: psg.split(" ")[0];
          const startChapter = isNumberedBook ? psg.split(" ")[2].split("-")[0] : psg.split(" ")[1].split("-")[0];
          const endChapter = isNumberedBook ? psg.split(" ")[2].split("-")[1] : psg.split(" ")[1].split("-")[1];

          if (containsVerses || !endChapter) {
            return [psg]
          } else {
            let i = startChapter;
            const passArr = []
            while (i <= endChapter) {
              passArr.push(`${book} ${i}`)
              i++;
            }
            return passArr;
          }
        }

        // Assumes passages as a comma separated string (ie. (Titus 1-3, Philemon))
        function passageToReqArray(passages) {
          const passageArr = passages.split(", ");
          let returnArr = []
          for (let i = 0; i < passageArr.length; i++) {
            returnArr.push(...passageBreakdown(passageArr[i]))
          }
          returnArr = returnArr.map(i => '/api/esv/' + i);
          return returnArr;
        }

        setDt(data)
        setPassageReqArr(passageToReqArray(data.text))
    });
  }, []);

  useEffect(() => {
    // call each api passage individually to avoid quota issues
    Promise.all(passageReqArr.map(url => fetch(url).then(parseJSON)))
      .then(data => {
        setEsvResp(data);

        let combinedText = "";
        for (let i = 0; i < data.length; i++) {
          if (i === 0) {
            combinedText += data[i].canonical + "<br />" + data[i].passages[0].trim().split('[').filter(s => s !== "").join("<br />")
          } else {
            combinedText += "<br /><br />" + data[i].canonical + "<br />" + data[i].passages[0].trim().split('[').filter(s => s !== "").join("<br />")
          }
        }
        setEsvDisplayText(combinedText)
      })
  }, [passageReqArr]);

  function renderItems() {
    const esvUrl = `https://esv.org/${dt.text}`;
    let lineByLine = "";
    let paragraph = "";

    if (esvResp.length > 0)  {
      for (let i = 0; i < esvResp.length; i++) {
        lineByLine += "\r\n" +  esvResp[i].canonical + "\r\n" + esvResp[i].passages[0].trim().split('[').filter(s => s !== "").join("\r\n")
        paragraph += "\r\n" +  esvResp[i].canonical + "\r\n" + esvResp[i].passages[0] 
      }
    }

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
        {dt.questions && dt.questions.length > 0 ? (
          <div>
            <h3>Questions</h3>
            <ul>
              {dt.questions && dt.questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
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
