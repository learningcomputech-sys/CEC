/* ============================================================
   COMPUTECH CEC — PORTAL DATA
   This file holds ALL portal content. It is edited by admin.html
   (Export → download this file → re-upload to your repo).
   Both index.html and admin.html read from here.
   Do not rename the variables.
   ============================================================ */

const INSTITUTE = {
  name: "Computech CEC",
  course: "Business Analyst Certification",
  director: "Amin",
  meetLink: "https://meet.google.com/xxx-xxxx-xxx",
  verifyBase: "https://YOUR-USERNAME.github.io/portal"   // for certificate QR
};

/* Welcome message — shown to every student on their Home tab.
   Admin can edit the text, toggle it on/off, and set the Meet button. */
const WELCOME = {
  enabled: true,
  title: "Welcome to your BA batch 👋",
  message: "Classes are live Mon / Wed / Fri at 7:00 PM. Missed a session? Check the Recordings tab. Questions anytime on the batch WhatsApp group.",
  showMeet: true
};

const STUDENTS = {
  "BA2025001": {
    name: "Priya Sharma",
    batch: "BA — Jan 2026",
    email: "priya@example.com",
    joined: "06 Jan 2026",
    progress: 68,
    certId: "CEC-BA-2026-0001",
    certDate: "15 Mar 2026",
    certReady: true,
    passHash: "d3ad9315b7be5dd53b31a273b3b3aba5defe700808305aa16a3062b76658a791"
  },
  "BA2025002": {
    name: "Rahul Kumar",
    batch: "BA — Jan 2026",
    email: "rahul@example.com",
    joined: "06 Jan 2026",
    progress: 42,
    certId: "CEC-BA-2026-0002",
    certDate: "",
    certReady: false,
    passHash: "264c8c381bf16c982a4e59b0dd4c6f7808c51a05f64c35db42cc78a2a72875bb"
  }
};

const SYLLABUS = [
  { code:"01", color:"#217a56", name:"Excel for Analysts",
    topics:["Lookup functions — VLOOKUP, XLOOKUP, INDEX+MATCH","SUMIFS, COUNTIFS, IFS & nested logic","Pivot tables & Power Query","Conditional formatting (formula-based)","Data validation & dashboards","VBA basics"] },
  { code:"02", color:"#2a5db0", name:"SQL & Databases",
    topics:["SELECT, WHERE, ORDER BY","GROUP BY, HAVING, aggregates","JOINs & relationships","CASE statements & subqueries","Temp tables","MySQL Workbench workflow"] },
  { code:"03", color:"#c58a26", name:"Power BI",
    topics:["Data modelling & relationships","DAX measures & calculated columns","Visuals & interactive dashboards","Power Query transformations","Publishing & sharing reports"] },
  { code:"04", color:"#8a3bb0", name:"Tableau",
    topics:["Connecting & preparing data","Building worksheets & views","Dashboards & stories","Calculated fields & parameters","Publishing to Tableau Public"] },
  { code:"05", color:"#1fa596", name:"AI Tools for Analysts",
    topics:["Prompting for data analysis","AI-assisted Excel & SQL","Automating reports","Data storytelling with AI"] }
];

const RECORDINGS = [
  { module:"Excel for Analysts", items:[
    { title:"Day 1 — Lookup functions", date:"08 Jan 2026", dur:"1:12:40", fileId:"" },
    { title:"Day 2 — SUMIFS & logic", date:"10 Jan 2026", dur:"58:20", fileId:"" },
    { title:"Day 3 — Pivot tables & Power Query", date:"13 Jan 2026", dur:"1:05:10", fileId:"" }
  ]},
  { module:"SQL & Databases", items:[
    { title:"Day 4 — SELECT & filtering", date:"15 Jan 2026", dur:"1:08:00", fileId:"" },
    { title:"Day 5 — JOINs & GROUP BY", date:"17 Jan 2026", dur:"1:15:30", fileId:"" }
  ]},
  { module:"Power BI", items:[
    { title:"Day 6 — Data modelling & DAX", date:"20 Jan 2026", dur:"1:20:00", fileId:"" }
  ]}
];

const RESOURCES = [
  { type:"pdf",  name:"Excel Notes — Day-wise (PDF)", meta:"CEC branded · 24 pages", url:"#" },
  { type:"xlsx", name:"HR Analytics Practice Dataset", meta:"150 employees · multi-table", url:"#" },
  { type:"xlsx", name:"Power BI — School Management Dataset", meta:"For DAX practice", url:"#" },
  { type:"pdf",  name:"SQL Cheat Sheet", meta:"Quick reference", url:"#" },
  { type:"doc",  name:"Course Brochure — BA Certification", meta:"Includes Tableau module", url:"#" }
];

const SCHEDULE = [
  { day:"Mon", dd:"Live", title:"SQL — JOINs deep dive", time:"7:00 PM", meet:true },
  { day:"Wed", dd:"Live", title:"Power BI — DAX measures", time:"7:00 PM", meet:true },
  { day:"Fri", dd:"Live", title:"Doubt-clearing & practice", time:"7:00 PM", meet:true },
  { day:"Sat", dd:"Live", title:"Project workshop", time:"11:00 AM", meet:true }
];

const ANNOUNCEMENTS = [
  { title:"Tableau module starts next week", body:"We're adding Tableau to the BA track. Recordings will be posted here.", time:"2 days ago" },
  { title:"Assignment 3 due Friday", body:"Submit the Power BI dashboard task before the Friday live class.", time:"4 days ago" },
  { title:"Certificates for Dec batch are live", body:"Check the Certificate tab and download yours.", time:"1 week ago" }
];
