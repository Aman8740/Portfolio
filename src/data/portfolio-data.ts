import type { PersonalInfo, Education, Certificate, Experience, Skill, Project, Resume } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Aman Shaikh",
  photo: "assets/pfp.png",
  linkedin: "https://www.linkedin.com/in/aman-shaikh-754048243",
  github: "https://github.com/Aman8740"
}

export const resumesData: Resume[] = [
  {
    id: "1",
    name: "Full Stack Resume",
    fileName: "Aman_Shaikh_resume_full_stack.pdf"
  }
]

export const educationData: Education[] = [
  {
    id: "1",
    instituteName: "L.J. Institute of Engineering and Technology",
    course: "B.E. in Information Technology",
    grades: [
      { type: "Sem 1 SPI", value: "8.88" },
      { type: "Sem 2 SPI", value: "8.86" },
      { type: "Sem 3 SPI", value: "9.11" },
      { type: "Sem 4 SPI", value: "9.32" },
      { type: "Sem 5 SPI", value: "7.90" },
      { type: "Sem 6 SPI", value: "8.00" },
    ],
    logo: "assets/lj.jpg",
    timeframe: "01-Aug-2022-Present"
  },
  {
    id: "2",
    instituteName: "Shree Muktajivan Vidhyalaya",
    course: "Standard 12th Science",
    grades: [
      { type: "Overall Percentage", value: "76.0 %" }
    ],
    logo: "assets/muk.jpeg",
    timeframe: "01-Jun-2021-31-May-2022"
  },
  {
    id: "2",
    instituteName: "Shree Muktajivan Vidhyalaya",
    course: "Standard 10",
    grades: [
      { type: "Overall Percentage", value: "83.0 %" }
    ],
    logo: "assets/muk.jpeg",
    timeframe: "01-Jun-2020-31-May-2021"
  },
]

export const certificatesData: Certificate[] = [
  {
    id: "1",
    name: "Introduction to Java",
    institute: "LearnQuest",
    imageUrl: "assets/JAVA1.jpeg"
  },
  {
    id: "2",
    name: "Inheritance and Data Structures in Java",
    institute: "University of Pennsylvania",
    imageUrl: "assets/JAVA2.jpeg"
  },
  {
    id: "3",
    name: "Database Design and Basic SQL in PostgreSQL",
    institute: "University of Michigan",
    imageUrl: "assets/DB.jpeg"
  },
  {
    id: "4",
    name: "HTML, CSS, and Javascript for Web Developers",
    institute: "Johns Hopkins University",
    imageUrl: "assets/HTML_CSS_JS.jpeg"
  },
  {
    id: "5",
    name: "Exploratory Data Analysis for Machine Learning",
    institute: "IBM",
    imageUrl: "assets/ML.jpeg"
  },
  {
    id: "6",
    name: "Building Generative AI-Powered Applications with Python",
    institute: "IBM",
    imageUrl: "assets/AI.jpeg"
  },
  {
    id: "7",
    name: "AWS Cloud Technical Essentials",
    institute: "Amazon Web Services",
    imageUrl: "assets/AWS.jpeg"
  },
]

export const experienceData: Experience[] = [
  {
    id: "1",
    companyName: "Webosphere Technolabs LLP",
    position: "Software professional Associate",
    description: "**Building innovative solutions** for the pharma and medical industry by developing a comprehensive low-code/no-code platform. This platform streamlines document workflows throughout the organization, making processes **effortless and efficient**.",
    logo: "assets/webo.jpg",
    timeframe: "01-May-2025-Present"
  },
  {
    id: "1",
    companyName: "Webosphere Technolabs LLP",
    position: "Software Professional intern",
    description: "Focused on **learning and implementing generative AI solutions** and exploring low-code platforms to enable **faster development cycles** with minimal resources and maximum efficiency.",
    logo: "assets/webo.jpg",
    timeframe: "01-Nov-2024-30-Apr-2025"
  },
]

export const skillsData: Skill[] = [
  { id: "1", name: "English", category: "Language", level: "Native" },
  { id: "2", name: "Japanese", category: "Language", level: "Pre-Intermediate" },
  { id: "3", name: "Hindi", category: "Language", level: "Native" },
  { id: "4", name: "Gujarati", category: "Language", level: "Native" },
  { id: "5", name: "Decision Trees", category: "Artificial Intelligence", level: "Intermediate" },
  { id: "6", name: "Neural Networks", category: "Artificial Intelligence", level: "Intermediate" },
  { id: "7", name: "SVM", category: "Artificial Intelligence", level: "Intermediate" },
  { id: "8", name: "Linear Regression", category: "Artificial Intelligence", level: "Advanced" },
  { id: "9", name: "Logistic Regression", category: "Artificial Intelligence", level: "Advanced" },
  { id: "10", name: "React", category: "Frontend", level: "Advanced" },
  { id: "11", name: "HTML", category: "Frontend", level: "Expert" },
  { id: "12", name: "CSS", category: "Frontend", level: "Advanced" },
  { id: "13", name: "Node", category: "Backend", level: "Advanced" },
  { id: "14", name: "Express", category: "Backend", level: "Advanced" },
  { id: "15", name: "Django", category: "Backend", level: "Intermediate" },
  { id: "16", name: "Flask", category: "Backend", level: "Intermediate" },
  { id: "17", name: "TypeScript", category: "Programming Language", level: "Advanced" },
  { id: "18", name: "Python", category: "Programming Language", level: "Expert" },
  { id: "19", name: "JavaScript", category: "Programming Language", level: "Expert" },
  { id: "20", name: "Java", category: "Programming Language", level: "Intermediate" },
  { id: "21", name: "SQL", category: "Query Language", level: "Advanced" },
  { id: "22", name: "MongoDB", category: "Database", level: "Advanced" },
  { id: "23", name: "MySql", category: "Database", level: "Pre-Intermediate" },
  { id: "24", name: "PostgreSQL", category: "Database", level: "Intermediate" },
  { id: "25", name: "MSSql", category: "Database", level: "Intermediate" },
  { id: "26", name: "Git", category: "Tools", level: "Pre-Advanced" },
  { id: "27", name: "Grafana", category: "Tools", level: "Intermediate" },
  { id: "28", name: "Redux", category: "Tools", level: "Pre-Intermediate" },
  { id: "29", name: "Shadcn", category: "Libraries", level: "Pre-Advanced" },
  { id: "30", name: "Numpy", category: "Libraries", level: "Advanced" },
  { id: "31", name: "Matplotlib", category: "Libraries", level: "Advanced" },
  { id: "32", name: "Pandas", category: "Libraries", level: "Advanced" },
  { id: "33", name: "Scikit-learn", category: "Libraries", level: "Intermediate" },
  { id: "34", name: "TensorFlow", category: "Libraries", level: "Intermediate" },
  { id: "35", name: "Seaborn", category: "Libraries", level: "Intermediate" },
  { id: "36", name: "CodeceptJS", category: "Tools", level: "Pre-Advanced" },
  { id: "37", name: "KNN", category: "Artificial Intelligence", level: "Intermediate" },
]

export const projectsData: Project[] = [
  {
    id: "1",
    name: "EXML",
    slogan: "Explore Machine Learning - Interactive Learning Platform",
    description: `
## Overview

**EXML** is an interactive web platform where you can learn machine learning by exploring real projects and trying out trained ML models. It combines educational content with hands-on demonstrations, making ML concepts easy to understand through practice.

## What You Can Do

### Learn ML Concepts
- Read comprehensive guides on ML fundamentals, algorithms, and techniques
- Understand classification, regression, supervised and unsupervised learning
- Explore algorithms like KNN, Naive Bayes, Neural Networks, and SVM
- Mathematical equations displayed with clarity and precision

### Try Live ML Models
- Upload your own data and get instant predictions
- See model confidence scores and detailed analysis
- Compare different algorithms and their performance
- Explore ML pipelines through dynamic animated visualizations

## Why EXML?

Perfect for anyone wanting to learn machine learning through real examples. The platform makes complex ML concepts accessible by letting you interact with working models, not just read about them.
    `,
    logo: "assets/EXML.svg",
    madeAt: 0,
    skills: [
      "18", "16", "11", "12", "19", "30", "31", "32", "33", "34", "35", "26", "24"
    ]
  },
  {
    id: "2",
    name: "Sonara",
    slogan: "Own every note — Real piano on your desktop",
    projectUrl: "https://aman8740.github.io/Sonara",
    media: [
      "assets/studio.png",
      "assets/library.png",
    ],
    description: `
## Overview

**Sonara** is a desktop piano app that sounds and feels like a real instrument. Every key plays a genuine Steinway Grand Piano recording. All 88 keys. Three pedals. The full dynamic range from the softest whisper to the loudest fortissimo — right on your laptop.

## Play

- Play using your mouse or desktop keyboard — no piano keyboard hardware needed
- All 88 keys available, scrollable across the full range
- Sustain, soft, and sostenuto pedals all work exactly like a real concert grand
- Adjust reverb, velocity, tuning, and transpose to match your style
- Everything feels responsive and immediate — zero perceptible latency

## Record

- Hit record, play anything, hit stop — Sonara captures your performance perfectly
- Every note, timing, velocity, and pedal movement is saved
- Play it back and it sounds exactly like you played it
- Export your recording as an MP3 or WAV file to share anywhere
- Save and share recordings as **.sonara files** — open them on any device with Sonara installed

## Learn

- Browse 30+ legendary compositions — Bach, Beethoven, Chopin, Debussy, Satie, Hans Zimmer, and more
- Click Play on any tune and it starts — no downloading, no waiting
- Switch to **Guided Mode** and falling notes show you exactly which keys to press and when
- Practice one hand at a time while Sonara plays the other for you
- Slow any piece down to 25% speed without changing how it sounds
- Loop difficult sections on repeat until they click
- Built-in metronome with a speed trainer that gradually brings you up to full tempo
- See your accuracy after every session and track your improvement over time

## Community

- Share your own recordings to the community feed — they sit alongside official tunes as equals
- Anyone can play your piece, learn it in guided mode, or use it as practice material
- Like and discover pieces from other Sonara users worldwide
- New official tunes are added regularly and appear automatically — no app update needed

## Know What You're Playing

- As you play, Sonara shows you the chord name above the keyboard in real time
- See exactly which keys belong to any scale or key — highlighted directly on the piano
- Track your progress over time — which songs you've practiced, your accuracy trends, and which specific notes you keep missing
    `,
    logo: "assets/sonara.png",
    madeAt: 0,
    skills: [
      "10", "13", "14", "17", "19", "11", "12", "22", "29", "26"
    ]
  },
  {
    id: "3",
    name: "Kikoe",
    slogan: "Japanese, when you need it.",
    description: `
## Overview

**Kikoe** (聞こえ) is a personal Android assistant built for Japanese learners living in or visiting Japan. It listens passively in the background, figures out when someone else is speaking Japanese, checks what you already know, and only translates what you actually need — quietly in your ear through Bluetooth or on an always-on screen overlay when you're without headphones.

The name means *audible* in Japanese. The goal is simple: remove the language barrier without removing the learning.

## Listen

- The app runs silently in the background at all times — no tapping, no switching screens
- When someone speaks Japanese around you, it catches it automatically
- It recognises your own voice and ignores it entirely — only the other person gets processed
- A rolling 30-second buffer captures everything, so you can replay what was said even if you reacted late
- A subtle speed indicator appears when someone is speaking unusually fast — a heads-up to focus harder

## Smart Translation

- Kikoe knows your JLPT level and syncs your personal vocabulary list from Renshuu — the Japanese learning platform
- If you already know all the words in a sentence, the app stays silent and lets you understand on your own
- If a sentence has one or two words you're shaky on, only those words appear as a small tooltip — no full translation, no noise
- If the sentence is genuinely beyond your level, a full translation plays instantly through your earphones
- A confidence slider in settings adjusts how aggressively it translates — push it toward Relaxed at a government office, Strict when you're feeling confident

## Bluetooth First

- When Bluetooth headphones are connected, all translations play privately in your ear — nobody around you hears anything
- When you disconnect, the app switches automatically to an always-on screen overlay with text
- The switch is instant — no settings, no buttons

## Build Your Vocabulary

- Every word that triggers a translation is logged silently with the full sentence and where you heard it
- At the end of the day, browse what Japan threw at you — at the station, at a restaurant, at the combini
- Tap any word to push it directly to your Renshuu study schedule
- Words you encounter in real life feed back into your daily practice automatically

## Phrasebook

- Swipe up on the overlay to access a set of pre-loaded Japanese phrases
- Tap one and the app speaks it aloud through the phone speaker in natural Japanese
- Covers the situations that actually come up: asking someone to repeat themselves, ordering food, asking for a receipt, saying your Japanese isn't great yet
- Fully editable — add your own phrases, reorder them, remove what you don't need

## Track Your Progress

- Every Sunday, Kikoe sends a weekly summary: how many words you heard, how many you pushed to Renshuu, and which unknown word came up most
- The most useful metric is translation frequency over time — if you're needing it less week by week, you're learning
    `,
    logo: "assets/kikoe.svg",
    madeAt: 0,
    skills: [
      "20",
      "26"
    ]
  },
  {
    id: "4",
    name: "Quickflow",
    slogan: "End-to-End Process Digitalization and Automation for Pharma",
    description: `
## Overview

**Quickflow** is a comprehensive Low Code/No Code platform specifically designed for the Pharma, Biotech, and Life Science industries. It digitizes and automates end-to-end business processes, ensuring USFDA compliance while streamlining workflows and enhancing operational efficiency across all departments.

## Key Features

### Quality Management
- **Quality Management System (QMS)**: Manage change controls, deviations, CAPA, market complaints, and OOS with real-time visibility
- **Document Management System (DMS)**: Control SOPs, STPs, and Protocols with audit trails and version control
- **Annual Product Quality Review (APQR)**: Automate quality review processes for informed decision-making

### Laboratory Management
- **LIMS (Laboratory Information Management System)**: Complete test request lifecycle management from initiation to COA issuance
- **Electronic Lab Notebook (ELN)**: Digital lab notebooks with enhanced collaboration and compliance
- **e-Sheet**: Automate laboratory calculations with web-based forms and access controls
- **Genius Lab**: Integrate standalone instruments with RS232/ethernet connectivity for raw data management
- **Standard Management**: Oversee laboratory standards ensuring regulatory compliance and accuracy
- **Chemical Management**: Track chemical lifecycle from procurement to disposal with safety compliance

### Production & Manufacturing
- **Batch Manufacturing Record (BMR)**: Digital oversight with customized templates, eliminating paper processes
- **Continuous Process Verification (CPV)**: Real-time data collection, analysis, and trending for quality assurance
- **Alarm Trending Management**: Monitor critical alarms and identify issues proactively

### Quality Control
- **eSPM**: Automate QC planning for faster turnaround times
- **Column Management**: Optimize chromatography columns from procurement to performance monitoring
- **QCMS-FMS**: Ensure data integrity for non-chromatographic standalone instruments

### Warehouse & Inventory
- **Warehouse Management System (WMS)**: Complete inventory lifecycle management from indenting to disposal
- **Loose Sheet Management**: Organize unbound documents digitally with enhanced security

### Digital Logbooks
- **Electronic Logbook**: Digitize traditional logbooks for equipment usage, calibrations, and activities tracking

### IT & Security
- **User Access Management (UAM)**: Automate user access rights with RPA, enhancing security and productivity

## Platform Capabilities

- **Low Code/No Code Development**: Build applications without extensive programming
- **Business Process Management**: Streamline complex workflows
- **Robotic Process Automation**: Automate repetitive tasks
- **Full USFDA Compliance**: Meet all regulatory requirements
- **Audit Trails**: Complete tracking and version control
- **Real-Time Analytics**: Monitor processes and performance instantly
- **Data Integrity**: Ensure data security and compliance
- **System Integration**: Connect with existing enterprise systems
- **Instant ROI**: Quick implementation with immediate value
    `,
    logo: "assets/Quickflow.png",
    madeAt: 1,
    skills: [
      "10", "13", "14", "11", "12", "19", "17", "22", "26", "29", "27", "25",
    ]
  },
  {
    id: "5",
    name: "QuickTest",
    slogan: "Efficient and reliable software testing integrated with AI.",
    description: `
## Overview

**QuickTest** is an automated testing platform that streamlines software quality assurance through intelligent test management and execution. It supports multi-product configurations and delivers comprehensive diagnostics with video documentation and detailed reporting.

## Key Features

- **Multi product configuration**: Supports Configuration for multiple products of the same organization and considers all possibilities and versions.
- **Automated Test Management**: An automated testing system that lets users manage and run product-specific tests with minimal human intervention.
- **Flexible Configuration**: Each test can have its own configuration with different possible flows of running tests.
- **Smart Test Selection**: The system supports ignoring test cases when needed.
- **Comprehensive Reporting**: It generates detailed reports that help in identifying issues and improving software quality.
- **Video Documentation**: Provides video recordings of test runs for better analysis and debugging.
- **Rich Diagnostics**: Provides image for each failed test for investigation.
- **Error Log**: For each test case provides information about what went wrong.
- **Information banner**: Provides information about what is going on while the test is running.
    `,
    logo: "assets/QuickTest.jpeg",
    madeAt: 1,
    skills: [
      "22", "14", "10", "13", "11", "12", "19", "17", "36", "29", "25", "26",
    ]
  },

]