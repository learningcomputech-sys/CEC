/* ============================================================
   COMPUTECH CEC — PORTAL DATA
   One file powers the whole portal (students + admin).
   The admin panel edits this and exports a new copy.
   Re-upload data.js to your repo to publish changes.
   ============================================================ */

const INSTITUTE = {
  name: "Computech CEC",
  course: "Business Analyst Certification",
  director: "Amin",
  meetLink: "https://meet.google.com/xxx-xxxx-xxx",
  verifyBase: "https://learningcomputech-sys.github.io/CEC",
  idPrefix: "BA"                 // used when auto-generating student IDs
};

/* Admin password (hashed). Default = admin123. Change it in Settings. */
const ADMIN_HASH = "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9";

const WELCOME = {
  enabled: true,
  title: "Welcome to your BA batch 👋",
  message: "Classes are live Mon / Wed / Fri at 7:00 PM. Missed a session? Check the Recordings tab. Questions anytime on the batch WhatsApp group.",
  showMeet: true
};

/* Passwords are stored as plain text so the admin can see & share them.
   (data.js is public — treat these as access codes, not secrets.) */
const STUDENTS = {
  "BA2026001": {
    name: "Priya Sharma", batch: "BA — Jan 2026", email: "priya@example.com",
    joined: "06 Jan 2026", progress: 68,
    certId: "CEC-BA-2026-0001", certDate: "15 Mar 2026", certReady: true,
    pass: "demo123"
  },
  "BA2026002": {
    name: "Rahul Kumar", batch: "BA — Jan 2026", email: "rahul@example.com",
    joined: "06 Jan 2026", progress: 42,
    certId: "CEC-BA-2026-0002", certDate: "", certReady: false,
    pass: "rk48fm2q"
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
