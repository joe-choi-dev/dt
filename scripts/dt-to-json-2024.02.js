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
    p.parseFileItems("./pdf/2024.02_dt.pdf", (err, item) => {
        if (err) console.error("error:", err);
        else if (!item) {
            const jsonObject = json.dts.map(JSON.stringify);
            const uniqSet = new Set(jsonObject);
            const uniqArr = Array.from(uniqSet).map(JSON.parse);
            json.dts = uniqArr;
            console.log(json.dts);
        }
        else if (item.text) { 
            if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].some(day => item.text.startsWith(day))) {
                console.log(item.text.trim());
                currDT.date = item.text.trim();
            }
            // console.log(item.text.trim());
            if ((item.text.startsWith("2 Timothy"))) {
                // console.log(item.text.trim());
                console.log(item.text.trim());
                currDT.text = item.text.trim();
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