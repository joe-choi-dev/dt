import { PdfReader } from "pdfreader";

async function getDTs() {
    const json = {
        dts: []
    }
    let currDT = {
        date: "",
        text: "",
        questions: []
    };

    const p = new PdfReader();
    p.parseFileItems("./pdf/2024.02_dt.pdf", (err, item) => {
        if (err) console.error("error:", err);
        else if (!item) {
            const jsonObject = json.dts.map(JSON.stringify);
            const uniqSet = new Set(jsonObject);
            const uniqArr = Array.from(uniqSet).map(JSON.parse);
            json.dts = uniqArr;
            // console.log(json.dts);
        }
        else if (item.text) { 
            if ((item.text.startsWith("2 Timothy"))) {
                currDT.text = item.text.trim();
            }

            if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].some(day => item.text.startsWith(day))) {
                currDT.date = item.text.trim();
            }

            if (currDT.date !== "" && currDT.text !== "") {
                json.dts.push(currDT);
                currDT = {
                    date: "",
                    text: "",
                    questions: []
                };

            }
        }
    });

    let currDay = "Thursday";

    let isQ = false

    p.parseFileItems("./pdf/2024.02_dt.pdf", (err, item) => {
        if (err) console.error("error:", err);
        else if (!item) {
            const jsonObject = json.dts.map(JSON.stringify);
            const uniqSet = new Set(jsonObject);
            const uniqArr = Array.from(uniqSet).map(JSON.parse);
            json.dts = uniqArr;
            // console.log(json.dts);
        }
        else if (item.text) { 

            if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].some(day => item.text.startsWith(day)) && !item.text.startsWith(currDay)) {
                console.log(item.text.trim());
                currDay = item.text.trim().split(" ")[0];
            }

            // if (json.dts[count] && item.text.startsWith(json.dts[count].text)) {
            //     console.log(currPassage)
            //     currPassage = json.dts[count].text;
            //     count++;
            // }

            // if (currPassage !== "" && currPassage !== nextPassage) {
            //     // console.log(item.text.trim());
            //     if (isQ) {
            //         console.log(item.text.trim());
            //         isQ = false;
            //     }
            //     if (item.text.startsWith("•")) {
            //         isQ = true;
            //     }
            // }
 
        }
    });
}

getDTs()