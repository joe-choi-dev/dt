import fetch from 'node-fetch';
import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started"));

app.use(express.static("build"));

app.get("/api/dt", (req, res) => {
  const currDate = new Date().toLocaleDateString("en-US", {weekday:"long", year:"numeric", month:"long", day:"numeric", timeZone: 'America/Los_Angeles'});
  const dt = dts.find(dt => dt.date === currDate);
  res.send(dt);
});

app.get("/api/dts", (req, res) => {
  res.send(dts);
});

app.get("/api/esv/:passage", async (req, res) => {
  try {    
    const resp = await fetch(`https://api.esv.org/v3/passage/text/?q=${req.params['passage']}&indent-poetry=false&include-headings=false&include-footnotes=false&include-verse-numbers=true&include-short-copyright=false&include-passage-references=false`, {
      method: 'GET',
      headers: {
        Authorization: "b31df51b9a0e5b1ca3d10799eaa1b5800bd368e7",
      },
    })
    const json = await resp.json();
    res.send(json);
  } catch (error) {
    console.log(error);
  }
});

// generated from scripts
const dts = [
  { date: 'Tuesday, September 12, 2023', text: 'Romans 1-3' },
  { date: 'Wednesday, September 13, 2023', text: 'Romans 4-7' },
  { date: 'Thursday, September 14, 2023', text: 'Romans 8-10' },
  { date: 'Friday, September 15, 2023', text: 'Psalms 94-95' },
  { date: 'Saturday, September 16, 2023', text: 'Proverbs 22:1-16' },
  { date: 'Monday, September 18, 2023', text: 'Psalms 96-97' },
  { date: 'Tuesday, September 19, 2023', text: 'Romans 11-14' },
  { date: 'Wednesday, September 20, 2023', text: 'Romans 15-16' },
  { date: 'Thursday, September 21, 2023', text: '1 Corinthians 1-3' },
  { date: 'Friday, September 22, 2023', text: 'Psalms 98-99' },
  { date: 'Saturday, September 23, 2023', text: 'Proverbs 22:17-29' },
  { date: 'Monday, September 25, 2023', text: 'Psalms 100-101' },
  { date: 'Tuesday, September 26, 2023', text: '1 Corinthians 4-6' },
  { date: 'Wednesday, September 27, 2023', text: '1 Corinthians 7-8' },
  { date: 'Thursday, September 28, 2023', text: '1 Corinthians 9-11' },
  { date: 'Friday, September 29, 2023', text: 'Psalm 102' },
  { date: 'Saturday, September 30, 2023', text: 'Proverbs 23:1-18' },
  { date: 'Monday, October 2, 2023', text: 'Psalm 103' },
  { date: 'Tuesday, October 3, 2023', text: '1 Corinthians 12-14' },
  { date: 'Wednesday, October 4, 2023', text: '1 Corinthians 15-16' },
  { date: 'Thursday, October 5, 2023', text: '2 Corinthians 1-4' },
  { date: 'Friday, October 6, 2023', text: 'Psalm 104' },
  { date: 'Saturday, October 7, 2023', text: 'Proverbs 23:19-35' },
  { date: 'Monday, October 9, 2023', text: 'Psalm 105' },
  { date: 'Tuesday, October 10, 2023', text: '2 Corinthians 5-8' },
  { date: 'Wednesday, October 11, 2023', text: '2 Corinthians 9-13' },
  { date: 'Thursday, October 12, 2023', text: 'Galatians 1-3' },
  { date: 'Friday, October 13, 2023', text: 'Psalm 119:1-32' },
  { date: 'Saturday, October 14, 2023', text: 'Proverbs 24:1-22' },
  { date: 'Monday, October 16, 2023', text: 'Psalm 119:33-64' },
  { date: 'Tuesday, October 17, 2023', text: 'Galatians 4-6' },
  { date: 'Wednesday, October 18, 2023', text: 'Ephesians 1-3' },
  { date: 'Thursday, October 19, 2023', text: 'Ephesians 4-6' },
  { date: 'Friday, October 20, 2023', text: 'Psalm 119:65-96' },
  { date: 'Saturday, October 21, 2023', text: 'Proverbs 24:23-34' },
  { date: 'Monday, October 23, 2023', text: 'Psalm 119:97-128' },
  { date: 'Tuesday, October 24, 2023', text: 'Philippians 1-2' },
  { date: 'Wednesday, October 25, 2023', text: 'Philippians 3-4' },
  { date: 'Thursday, October 26, 2023', text: 'Colossians 1-4' },
  { date: 'Friday, October 27, 2023', text: 'Psalm 119:129-152' },
  { date: 'Saturday, October 28, 2023', text: 'Proverbs 25:1-14' },
  { date: 'Monday, October 30, 2023', text: 'Psalm 119:153-176' },
  { date: 'Tuesday, October 31, 2023', text: '1 Thessalonians 1-5' },
  { date: 'Wednesday, November 1, 2023', text: '2 Thessalonians 1-3' },
  { date: 'Thursday, November 2, 2023', text: '1 Timothy 1-3' },
  { date: 'Friday, November 3, 2023', text: 'Psalms 120-122' },
  { date: 'Saturday, November 4, 2023', text: 'Proverbs 25:15-28' },
  { date: 'Monday, November 6, 2023', text: 'Psalms 123-125' },
  { date: 'Tuesday, November 7, 2023', text: '1 Timothy 4-6' },
  { date: 'Wednesday, November 8, 2023', text: '2 Timothy 1-2' },
  { date: 'Thursday, November 9, 2023', text: '2 Timothy 3-4' },
  { date: 'Friday, November 10, 2023', text: 'Psalms 126-128' },
  { date: 'Saturday, November 11, 2023', text: 'Proverbs 26' },
  { date: 'Monday, November 13, 2023', text: 'Psalms 129-131' },
  { date: 'Tuesday, November 14, 2023', text: 'Titus 1-3, Philemon' },
  { date: 'Wednesday, November 15, 2023', text: 'Hebrews 1-2' },
  { date: 'Thursday, November 16, 2023', text: 'Hebrews 3-5' },
  { date: 'Friday, November 17, 2023', text: 'Psalms 132-133' },
  { date: 'Saturday, November 18, 2023', text: 'Proverbs 27' },
  { date: 'Monday, November 20, 2023', text: 'Psalms 134-135' },
  { date: 'Tuesday, November 21, 2023', text: 'Hebrews 6-7' },
  { date: 'Wednesday, November 22, 2023', text: 'Hebrews 8-9' },
  { date: 'Thursday, November 23, 2023', text: 'Hebrews 10' },
  { date: 'Friday, November 24, 2023', text: 'Psalm 136' },
  { date: 'Saturday, November 25, 2023', text: 'Proverbs 28:1-14' },
  { date: 'Monday, November 27, 2023', text: 'Psalms 137-138' },
  { date: 'Tuesday, November 28, 2023', text: 'Hebrews 11' },
  { date: 'Wednesday, November 29, 2023', text: 'Hebrews 12-13' },
  { date: 'Thursday, November 30, 2023', text: 'James 1-2' },
  { date: 'Friday, December 1, 2023', text: 'Psalm 139' },
  { date: 'Saturday, December 2, 2023', text: 'Proverbs 28:15-28' },
  { date: 'Monday, December 4, 2023', text: 'Psalm 140' },
  { date: 'Tuesday, December 5, 2023', text: 'James 3-5' },
  { date: 'Wednesday, December 6, 2023', text: '1 Peter 1-2' },
  { date: 'Thursday, December 7, 2023', text: '1 Peter 3-5' },
  { date: 'Friday, December 8, 2023', text: 'Psalm 141' },
  { date: 'Saturday, December 9, 2023', text: 'Proverbs 29' },
  { date: 'Monday, December 11, 2023', text: 'Psalms 142-143' },
  { date: 'Tuesday, December 12, 2023', text: '2 Peter 1-3' },
  { date: 'Wednesday, December 13, 2023', text: '1 John 1-3' },
  { date: 'Thursday, December 14, 2023', text: '1 John 4-5' },
  { date: 'Friday, December 15, 2023', text: 'Psalm 144' },
  { date: 'Saturday, December 16, 2023', text: 'Proverbs 30:1-14' },
  { date: 'Monday, December 18, 2023', text: 'Psalm 145' },
  { date: 'Tuesday, December 19, 2023', text: '2 John, 3 John, Jude' },
  { date: 'Wednesday, December 20, 2023', text: 'Revelation 1-3' },
  { date: 'Thursday, December 21, 2023', text: 'Revelation 4-9' },
  { date: 'Friday, December 22, 2023', text: 'Psalms 146-147' },
  { date: 'Saturday, December 23, 2023', text: 'Proverbs 30:15-33' },
  { date: 'Monday, December 25, 2023', text: 'Psalm 148' },
  { date: 'Tuesday, December 26, 2023', text: 'Revelation 10-14' },
  { date: 'Wednesday, December 27, 2023', text: 'Revelation 15-18' },
  { date: 'Thursday, December 28, 2023', text: 'Revelation 19-22' },
  { date: 'Friday, December 29, 2023', text: 'Psalms 149-150' },
  { date: 'Saturday, December 30, 2023', text: 'Proverbs 31' }
]
