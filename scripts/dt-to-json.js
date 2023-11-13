import { PdfReader } from "pdfreader";

async function getDTs() {
    const json = {
        dts: []
    }
    let currDT = {
        date: "",
        text: ""
    };
    const p = new PdfReader();
    p.parseFileItems("./pdf/2023.11_dt.pdf", (err, item) => {
        if (err) console.error("error:", err);
        else if (!item) {
            const jsonObject = json.dts.map(JSON.stringify);
            const uniqSet = new Set(jsonObject);
            const uniqArr = Array.from(uniqSet).map(JSON.parse);
            json.dts = uniqArr;
            console.log(json.dts);
        }
        else if (item.text) { 
            if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].some(day => item.text.startsWith(day))) {
                currDT.date = item.text.trim();
            }
            if (item.text.startsWith("Bible Text:")) {
                const text = item.text.replace("Bible Text: ", "");
                currDT.text = text.trim();
            }
            if (currDT.date !== "" && currDT.text !== "") {
                json.dts.push(currDT);
                currDT = {
                    date: "",
                    text: ""
                };
            }
        }
    });
}

getDTs()