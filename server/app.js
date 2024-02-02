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


const dts = [
  {
    date: 'Thursday, February 1, 2024',
    text: '2 Timothy 1:1-4',
    questions: [
      'What is Apostle Paul’s identity?',
      'What characterizes Apostle Paul’s relationship with Timothy?',
      'Who are the people that I have this kind of relationship with in the body of Christ?',
      'What’s the relationship between prayer, closeness and joy?',
      'In what ways do I need to obey God based on today’s passage?'
    ]
  },
  {
    date: 'Friday, February 2, 2024',
    text: '2 Timothy 1:5-7',
    questions: [
      'From the exhortation to “fan into flame the gift of God” what can we learn about the relationship between God’s gift',
      'What are some gifts given to every Christian, and are there ways in which I have allowed the flames of these gifts to',
      'How can I concretely “fan into flame the gift of God”?',
      'In what ways are the three things—“power, love, and self-control”—demonstrated in Jesus?',
      'In what ways is there evidence of this spirit of God working in my life?'
    ]
  },
  {
    date: 'Monday, February 5, 2024',
    text: '2 Timothy 1:8-9',
    questions: [
      'How can Apostle Paul so confidently ask Timothy to “share in suffering for the gospel”?',
      'In what ways am I “ashamed of the testimony about our LORD” or ashamed to “share in suffering for the gospel”?',
      'To what has God called those whom he has saved, and in what ways have I responded to this call?',
      'How does the fact that I have been saved “not because of our works but because of his own purpose and grace” affect'
    ]
  },
  {
    date: 'Tuesday, February 6, 2024',
    text: '2 Timothy 1:10-12',
    questions: [
      'Reflect on the grand scale captured by v.10. What did Jesus accomplish?',
      'Reflect on how Apostle Paul describes his personal calling.',
      'Reflect on the reason Apostle Paul was “not ashamed” of his suffering.',
      'What does this passage teach me regarding how to understand suffering as a Christian?'
    ]
  },
  {
    date: 'Wednesday, February 7, 2024',
    text: '2 Timothy 1:13-14',
    questions: [
      'What are the “sound words” (or “teachings”) I am following?',
      'What is the “good deposit entrusted to [me]” and what does it mean to guard it?',
      'How does “the Holy Spirit who dwells within us” help us to guard this good deposit?'
    ]
  },
  {
    date: 'Thursday, February 8, 2024',
    text: '2 Timothy 1:15-18',
    questions: [
      'Reflect on the words “all who are in Asia turned away from me.” Why might Apostle Paul have specifically named',
      'How was Onesiphorus able to refresh Apostle Paul?',
      'In what ways can I refresh others who are in chains or suffering for the sake of the gospel?',
      'Who are the people that are in need of such refreshing?'
    ]
  },
  {
    date: 'Friday, February 9, 2024',
    text: '2 Timothy 2:1-2',
    questions: [
      'How does grace provide strength?',
      'What false sources of strength have kept me from experiencing grace?',
      'Think about the unbroken chain of faithfulness that brought me the gospel.',
      'In what ways can I become more of a “faithful” person “who will be able to teach others also”?'
    ]
  },
  {
    date: 'Monday, February 12, 2024',
    text: '2 Timothy 2:3-7',
    questions: [
      'What is the picture of Christian life depicted in these verses? How does this match my view of Christian life?',
      'What are the qualities of a soldier, an athlete, and a hardworking farmer that I need to emulate?',
      'What are the “civilian pursuits” that hinder me from being a “good soldier of Christ Jesus”?',
      'Why does Apostle Paul encourage Timothy to “think over what I say,” and are there ways I can cultivate the practice'
    ]
  },
  {
    date: 'Tuesday, February 13, 2024',
    text: '2 Timothy 2:8-13',
    questions: [
      'What does Paul exhort Timothy to “remember” and why? How would my life be different if I remembered this',
      'What is the relationship between Apostle Paul “suffering” and being “bound with chains as a criminal” and the word'
    ]
  },
  {
    date: 'Wednesday, February 14, 2024',
    text: '2 Timothy 2:14-19',
    questions: [
      'Given the context of the rest of the passage, why is it important for me to “do [my] best to present [myself] to God as',
      'How do people swerve from the truth?',
      'What are some concrete ways I can live out v. 15?'
    ]
  },
  {
    date: 'Thursday, February 15, 2024',
    text: '2 Timothy 2:20-21',
    questions: [
      'What are the dishonorable things I need to cleanse myself from?',
      'What is my response to becoming “a vessel for honorable use, set apart as holy, useful to the master”?',
      'What are the good works that God has prepared for me to do?'
    ]
  },
  {
    date: 'Friday, February 16, 2024',
    text: '2 Timothy 2:22-26',
    questions: [
      'What is the relationship between “flee[ing] youthful passions” and “pursu[ing] righteousness”?',
      'Why is it important to do so “along with those who call on the Lord”?',
      'How can I do this concretely?',
      'How does repentance lead to a knowledge of the truth?',
      'What are the lies of this world that I need to “come to [my] senses” about and repent from?'
    ]
  },
  {
    date: 'Monday, February 19, 2024',
    text: '2 Timothy 3:1-5',
    questions: [
      'What are the characteristics of people in the last days and how is this an apt picture of people today?',
      'What can I learn from the fact that someone who has the “appearance of godliness” can be characterized as “lovers',
      'If Apostle Paul were to describe me, as he described the people in the last days, how would he describe me?  What',
      'Apostle Paul warns Timothy to “avoid such people” who have an “appearance of godliness but [deny] its power.”'
    ]
  },
  {
    date: 'Tuesday, February 20, 2024',
    text: '2 Timothy 3:6-9',
    questions: [
      'How is being “burdened with sins and led astray by various passions” related to “always learning and never able to',
      'How can this lead to being “weak”?',
      'What steps can I take to ensure I do not fall into the pattern described in v.7?'
    ]
  },
  {
    date: 'Wednesday, February 21, 2024',
    text: '2 Timothy 3:10-13',
    questions: [
      'What can I learn about the relationship between Paul and Timothy from vv.10-11?',
      'How would such knowledge of Paul’s life and character have impacted Timothy’s own life?',
      'Who are the people I can reflect on in order to remain strong in the midst of persecution, difficulties, and “evil people',
      'Why is it that “all who desire to live a godly life in Christ Jesus will be persecuted”?',
      'How does this verse challenge me and my understanding of Christian life?',
      'What pattern characterizes “evil people and imposters”?'
    ]
  },
  {
    date: 'Thursday, February 22, 2024',
    text: '2 Timothy 3:14-17',
    questions: [
      'According to v. 14, what is the basis of why Timothy could be confident to continue in what he learned?',
      'What insight about that nature of Gospel transmission can I learn from this?',
      'What are the Scriptures able to do, and what is the Scripture useful for?',
      'Are there ways I have allowed the Scripture to teach me, reprove me, correct me and train me in righteousness?',
      'Reflect on the picture of becoming man or woman of God who is “complete, equipped for every good work”?'
    ]
  },
  {
    date: 'Friday, February 23, 2024',
    text: '2 Timothy 4:1-2',
    questions: [
      'Imagine how Timothy might have felt receiving this charge from Apostle Paul. What are the five things Apostle Paul',
      'Which of the five charges is the most challenging for me?',
      'With what attitude should these charges be carried out and why?',
      'What is the role of a spiritual mentor according to this passage?'
    ]
  },
  {
    date: 'Monday, February 26, 2024',
    text: '2 Timothy 4:3-5',
    questions: [
      'What sorts of things would “itching ears” want to hear?',
      'What or who are some of the sources in my life that tell me things to “suit [my] own passions”?',
      'Are there truths in my life I have turned away from? What myths have I turned to instead?',
      'How does v. 5 challenge, correct, or inspire me today?'
    ]
  },
  {
    date: 'Tuesday, February 27, 2024',
    text: '2 Timothy 4:6-8',
    questions: [
      'How must I live in order to be able to say, along with Apostle Paul, that “I have fought the good fight, I have finished',
      'Inverting the verse, is there a good fight I have retreated from, a race I have stopped running, or ways I have',
      'How can reflecting on the “crown of righteousness” for those who “love his appearing” inspire me today to fight the'
    ]
  },
  {
    date: 'Wednesday, February 28, 2024',
    text: '2 Timothy 4:9-15',
    questions: [
      'What is surprising and tragic about the reason Demas deserted Apostle Paul?',
      'What is the relationship between “lov[ing] this world” and deserting the work of God? (cf. James 4:4)',
      'What are the things I still love that can potentially become the reason to desert my faith or dilute my commitment to',
      'What can I learn about repentance, recommitment, and God’s grace through Mark, whom Paul had earlier rejected',
      'Reflect on how I have experienced God’s grace, forgiveness and restoration despite my past failures.',
      'What are the three kinds of people described in these verses?',
      'How do these verses challenge me as I think about which category of people I belong to?'
    ]
  },
  {
    date: 'Thursday, February 29, 2024',
    text: '2 Timothy 4:16-22',
    questions: [
      'What enabled Apostle Paul to not hold a grudge against “all [who] deserted [him]”?',
      'How is it that Apostle Paul can break out into praise despite his difficult circumstances, such as imprisonment and',
      'What are the difficulties I am facing, and what are the truths I can remember, that will lead me to give thanks and'
    ]
  },
  {
    date: 'Friday, March 1, 2024',
    text: '2 Timothy 1:6-7',
    questions: []
  },
  {
    date: 'Monday, March 4, 2024',
    text: '2 Timothy 1:8-9',
    questions: []
  },
  {
    date: 'Tuesday, March 5, 2024',
    text: '2 Timothy 1:10',
    questions: []
  },
  {
    date: 'Wednesday, March 6, 2024',
    text: '2 Timothy 1:11-12',
    questions: []
  },
  {
    date: 'Thursday, March 7, 2024',
    text: '2 Timothy 1:13-14',
    questions: []
  },
  {
    date: 'Monday, March 11, 2024',
    text: '2 Timothy 2:1-2',
    questions: []
  },
  {
    date: 'Tuesday, March 12, 2024',
    text: '2 Timothy 2:3-4',
    questions: []
  },
  {
    date: 'Wednesday, March 13, 2024',
    text: '2 Timothy 2:8-9',
    questions: []
  },
  {
    date: 'Thursday, March 14, 2024',
    text: '2 Timothy 2:15',
    questions: []
  },
  {
    date: 'Monday, March 18, 2024',
    text: '2 Timothy 2:22',
    questions: []
  },
  {
    date: 'Tuesday, March 19, 2024',
    text: '2 Timothy 3:12-13',
    questions: []
  },
  {
    date: 'Wednesday, March 20, 2024',
    text: '2 Timothy 3:14-15',
    questions: []
  },
  {
    date: 'Thursday, March 21, 2024',
    text: '2 Timothy 3:16-17',
    questions: []
  },
  {
    date: 'Monday, March 25, 2024',
    text: '2 Timothy 4:2',
    questions: []
  },
  {
    date: 'Tuesday, March 26, 2024',
    text: '2 Timothy 4:5',
    questions: []
  },
  {
    date: 'Wednesday, March 27, 2024',
    text: '2 Timothy 4:6-7',
    questions: []
  },
  {
    date: 'Thursday, March 28, 2024',
    text: '2 Timothy 4:8',
    questions: []
  }
]
// generated from scripts
// const dts = [
//   { date: 'Tuesday, September 12, 2023', text: 'Romans 1-3' },
//   { date: 'Wednesday, September 13, 2023', text: 'Romans 4-7' },
//   { date: 'Thursday, September 14, 2023', text: 'Romans 8-10' },
//   { date: 'Friday, September 15, 2023', text: 'Psalms 94-95' },
//   { date: 'Saturday, September 16, 2023', text: 'Proverbs 22:1-16' },
//   { date: 'Monday, September 18, 2023', text: 'Psalms 96-97' },
//   { date: 'Tuesday, September 19, 2023', text: 'Romans 11-14' },
//   { date: 'Wednesday, September 20, 2023', text: 'Romans 15-16' },
//   { date: 'Thursday, September 21, 2023', text: '1 Corinthians 1-3' },
//   { date: 'Friday, September 22, 2023', text: 'Psalms 98-99' },
//   { date: 'Saturday, September 23, 2023', text: 'Proverbs 22:17-29' },
//   { date: 'Monday, September 25, 2023', text: 'Psalms 100-101' },
//   { date: 'Tuesday, September 26, 2023', text: '1 Corinthians 4-6' },
//   { date: 'Wednesday, September 27, 2023', text: '1 Corinthians 7-8' },
//   { date: 'Thursday, September 28, 2023', text: '1 Corinthians 9-11' },
//   { date: 'Friday, September 29, 2023', text: 'Psalm 102' },
//   { date: 'Saturday, September 30, 2023', text: 'Proverbs 23:1-18' },
//   { date: 'Monday, October 2, 2023', text: 'Psalm 103' },
//   { date: 'Tuesday, October 3, 2023', text: '1 Corinthians 12-14' },
//   { date: 'Wednesday, October 4, 2023', text: '1 Corinthians 15-16' },
//   { date: 'Thursday, October 5, 2023', text: '2 Corinthians 1-4' },
//   { date: 'Friday, October 6, 2023', text: 'Psalm 104' },
//   { date: 'Saturday, October 7, 2023', text: 'Proverbs 23:19-35' },
//   { date: 'Monday, October 9, 2023', text: 'Psalm 105' },
//   { date: 'Tuesday, October 10, 2023', text: '2 Corinthians 5-8' },
//   { date: 'Wednesday, October 11, 2023', text: '2 Corinthians 9-13' },
//   { date: 'Thursday, October 12, 2023', text: 'Galatians 1-3' },
//   { date: 'Friday, October 13, 2023', text: 'Psalm 119:1-32' },
//   { date: 'Saturday, October 14, 2023', text: 'Proverbs 24:1-22' },
//   { date: 'Monday, October 16, 2023', text: 'Psalm 119:33-64' },
//   { date: 'Tuesday, October 17, 2023', text: 'Galatians 4-6' },
//   { date: 'Wednesday, October 18, 2023', text: 'Ephesians 1-3' },
//   { date: 'Thursday, October 19, 2023', text: 'Ephesians 4-6' },
//   { date: 'Friday, October 20, 2023', text: 'Psalm 119:65-96' },
//   { date: 'Saturday, October 21, 2023', text: 'Proverbs 24:23-34' },
//   { date: 'Monday, October 23, 2023', text: 'Psalm 119:97-128' },
//   { date: 'Tuesday, October 24, 2023', text: 'Philippians 1-2' },
//   { date: 'Wednesday, October 25, 2023', text: 'Philippians 3-4' },
//   { date: 'Thursday, October 26, 2023', text: 'Colossians 1-4' },
//   { date: 'Friday, October 27, 2023', text: 'Psalm 119:129-152' },
//   { date: 'Saturday, October 28, 2023', text: 'Proverbs 25:1-14' },
//   { date: 'Monday, October 30, 2023', text: 'Psalm 119:153-176' },
//   { date: 'Tuesday, October 31, 2023', text: '1 Thessalonians 1-5' },
//   { date: 'Wednesday, November 1, 2023', text: '2 Thessalonians 1-3' },
//   { date: 'Thursday, November 2, 2023', text: '1 Timothy 1-3' },
//   { date: 'Friday, November 3, 2023', text: 'Psalms 120-122' },
//   { date: 'Saturday, November 4, 2023', text: 'Proverbs 25:15-28' },
//   { date: 'Monday, November 6, 2023', text: 'Psalms 123-125' },
//   { date: 'Tuesday, November 7, 2023', text: '1 Timothy 4-6' },
//   { date: 'Wednesday, November 8, 2023', text: '2 Timothy 1-2' },
//   { date: 'Thursday, November 9, 2023', text: '2 Timothy 3-4' },
//   { date: 'Friday, November 10, 2023', text: 'Psalms 126-128' },
//   { date: 'Saturday, November 11, 2023', text: 'Proverbs 26' },
//   { date: 'Monday, November 13, 2023', text: 'Psalms 129-131' },
//   { date: 'Tuesday, November 14, 2023', text: 'Titus 1-3, Philemon' },
//   { date: 'Wednesday, November 15, 2023', text: 'Hebrews 1-2' },
//   { date: 'Thursday, November 16, 2023', text: 'Hebrews 3-5' },
//   { date: 'Friday, November 17, 2023', text: 'Psalms 132-133' },
//   { date: 'Saturday, November 18, 2023', text: 'Proverbs 27' },
//   { date: 'Monday, November 20, 2023', text: 'Psalms 134-135' },
//   { date: 'Tuesday, November 21, 2023', text: 'Hebrews 6-7' },
//   { date: 'Wednesday, November 22, 2023', text: 'Hebrews 8-9' },
//   { date: 'Thursday, November 23, 2023', text: 'Hebrews 10' },
//   { date: 'Friday, November 24, 2023', text: 'Psalm 136' },
//   { date: 'Saturday, November 25, 2023', text: 'Proverbs 28:1-14' },
//   { date: 'Monday, November 27, 2023', text: 'Psalms 137-138' },
//   { date: 'Tuesday, November 28, 2023', text: 'Hebrews 11' },
//   { date: 'Wednesday, November 29, 2023', text: 'Hebrews 12-13' },
//   { date: 'Thursday, November 30, 2023', text: 'James 1-2' },
//   { date: 'Friday, December 1, 2023', text: 'Psalm 139' },
//   { date: 'Saturday, December 2, 2023', text: 'Proverbs 28:15-28' },
//   { date: 'Monday, December 4, 2023', text: 'Psalm 140' },
//   { date: 'Tuesday, December 5, 2023', text: 'James 3-5' },
//   { date: 'Wednesday, December 6, 2023', text: '1 Peter 1-2' },
//   { date: 'Thursday, December 7, 2023', text: '1 Peter 3-5' },
//   { date: 'Friday, December 8, 2023', text: 'Psalm 141' },
//   { date: 'Saturday, December 9, 2023', text: 'Proverbs 29' },
//   { date: 'Monday, December 11, 2023', text: 'Psalms 142-143' },
//   { date: 'Tuesday, December 12, 2023', text: '2 Peter 1-3' },
//   { date: 'Wednesday, December 13, 2023', text: '1 John 1-3' },
//   { date: 'Thursday, December 14, 2023', text: '1 John 4-5' },
//   { date: 'Friday, December 15, 2023', text: 'Psalm 144' },
//   { date: 'Saturday, December 16, 2023', text: 'Proverbs 30:1-14' },
//   { date: 'Monday, December 18, 2023', text: 'Psalm 145' },
//   { date: 'Tuesday, December 19, 2023', text: '2 John, 3 John, Jude' },
//   { date: 'Wednesday, December 20, 2023', text: 'Revelation 1-3' },
//   { date: 'Thursday, December 21, 2023', text: 'Revelation 4-9' },
//   { date: 'Friday, December 22, 2023', text: 'Psalms 146-147' },
//   { date: 'Saturday, December 23, 2023', text: 'Proverbs 30:15-33' },
//   { date: 'Monday, December 25, 2023', text: 'Psalm 148' },
//   { date: 'Tuesday, December 26, 2023', text: 'Revelation 10-14' },
//   { date: 'Wednesday, December 27, 2023', text: 'Revelation 15-18' },
//   { date: 'Thursday, December 28, 2023', text: 'Revelation 19-22' },
//   { date: 'Friday, December 29, 2023', text: 'Psalms 149-150' },
//   { date: 'Saturday, December 30, 2023', text: 'Proverbs 31' },
//   { date: 'Monday, January 1, 2024', text: 'Hebrews 11:1-2' },
//   { date: 'Tuesday, January 2, 2024', text: 'Hebrews 11:3-4' },
//   { date: 'Wednesday, January 3, 2024', text: 'Hebrews 11:5-6' },
//   { date: 'Thursday, January 4, 2024', text: 'Hebrews 11:7' },
//   { date: 'Friday, January 5, 2024', text: 'Hebrews 11:8-9' },
//   { date: 'Monday, January 8, 2024', text: 'Hebrews 11:10-12' },
//   { date: 'Tuesday, January 9, 2024', text: 'Hebrews 11:13-14' },
//   { date: 'Wednesday, January 10, 2024', text: 'Hebrews 11:15-16' },
//   { date: 'Thursday, January 11, 2024', text: 'Hebrews 11:17-19' },
//   { date: 'Friday, January 12, 2024', text: 'Hebrews 11:20-21' },
//   { date: 'Monday, January 15, 2024', text: 'Hebrews 11:22-23' },
//   { date: 'Tuesday, January 16, 2024', text: 'Hebrews 11:24-25' },
//   { date: 'Wednesday, January 17, 2024', text: 'Hebrews 11:26-27' },
//   { date: 'Thursday, January 18, 2024', text: 'Hebrews 11:28-29' },
//   { date: 'Friday, January 19, 2024', text: 'Hebrews 11:30-31' },
//   { date: 'Monday, January 22, 2024', text: 'Hebrews 11:32-33' },
//   { date: 'Tuesday, January 23, 2024', text: 'Hebrews 11:34-35' },
//   { date: 'Wednesday, January 24, 2024', text: 'Hebrews 11:36-37' },
//   { date: 'Thursday, January 25, 2024', text: 'Hebrews 11:38' },
//   { date: 'Friday, January 26, 2024', text: 'Hebrews 11:39-40' },
//   { date: 'Monday, January 29, 2024', text: 'Hebrews 12:1' },
//   { date: 'Tuesday, January 30, 2024', text: 'Hebrews 12:2-3' },
//   { date: 'Wednesday, January 31, 2024', text: 'Hebrews 11, Hebrews 12:1-3' },
//   { date: 'Thursday, February 1, 2024', text: '2 Timothy 1:1-4' },
//   { date: 'Friday, February 2, 2024', text: '2 Timothy 1:5-7' },
//   { date: 'Monday, February 5, 2024', text: '2 Timothy 1:8-9' },
//   { date: 'Tuesday, February 6, 2024', text: '2 Timothy 1:10-12' },
//   { date: 'Wednesday, February 7, 2024', text: '2 Timothy 1:13-14' },
//   { date: 'Thursday, February 8, 2024', text: '2 Timothy 1:15-18' },
//   { date: 'Friday, February 9, 2024', text: '2 Timothy 2:1-2' },
//   { date: 'Monday, February 12, 2024', text: '2 Timothy 2:3-7' },
//   { date: 'Tuesday, February 13, 2024', text: '2 Timothy 2:8-13' },
//   { date: 'Wednesday, February 14, 2024', text: '2 Timothy 2:14-19' },
//   { date: 'Thursday, February 15, 2024', text: '2 Timothy 2:20-21' },
//   { date: 'Friday, February 16, 2024', text: '2 Timothy 2:22-26' },
//   { date: 'Monday, February 19, 2024', text: '2 Timothy 3:1-5' },
//   { date: 'Tuesday, February 20, 2024', text: '2 Timothy 3:6-9' },
//   { date: 'Wednesday, February 21, 2024', text: '2 Timothy 3:10-13' },
//   { date: 'Thursday, February 22, 2024', text: '2 Timothy 3:14-17' },
//   { date: 'Friday, February 23, 2024', text: '2 Timothy 4:1-2' },
//   { date: 'Monday, February 26, 2024', text: '2 Timothy 4:3-5' },
//   { date: 'Tuesday, February 27, 2024', text: '2 Timothy 4:6-8' },
//   { date: 'Wednesday, February 28, 2024', text: '2 Timothy 4:9-15' },
//   { date: 'Thursday, February 29, 2024', text: '2 Timothy 4:16-22' },
//   { date: 'Friday, March 1, 2024', text: '2 Timothy 1:6-7' },
//   { date: 'Monday, March 4, 2024', text: '2 Timothy 1:8-9' },
//   { date: 'Tuesday, March 5, 2024', text: '2 Timothy 1:10' },
//   { date: 'Wednesday, March 6, 2024', text: '2 Timothy 1:11-12' },
//   { date: 'Thursday, March 7, 2024', text: '2 Timothy 1:13-14' },
//   { date: 'Monday, March 11, 2024', text: '2 Timothy 2:1-2' },
//   { date: 'Tuesday, March 12, 2024', text: '2 Timothy 2:3-4' },
//   { date: 'Wednesday, March 13, 2024', text: '2 Timothy 2:8-9' },
//   { date: 'Thursday, March 14, 2024', text: '2 Timothy 2:15' },
//   { date: 'Monday, March 18, 2024', text: '2 Timothy 2:22' },
//   { date: 'Tuesday, March 19, 2024', text: '2 Timothy 3:12-13' },
//   { date: 'Wednesday, March 20, 2024', text: '2 Timothy 3:14-15' },
//   { date: 'Thursday, March 21, 2024', text: '2 Timothy 3:16-17' },
//   { date: 'Monday, March 25, 2024', text: '2 Timothy 4:2' },
//   { date: 'Tuesday, March 26, 2024', text: '2 Timothy 4:5' },
//   { date: 'Wednesday, March 27, 2024', text: '2 Timothy 4:6-7' },
//   { date: 'Thursday, March 28, 2024', text: '2 Timothy 4:8' }
// ]
