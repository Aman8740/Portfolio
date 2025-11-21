import type { PersonalInfo, Education, Certificate, Experience, Skill, Project } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Aman Shaikh",
  photo: "assets/pfp.jpg",
  linkedin: "https://www.linkedin.com/in/aman-shaikh-754048243",
  github: "https://github.com/Aman8740"
}

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
    ],
    logo: "assets/lj.jpg",
    timeframe: "2022-Present"
  },
  {
    id: "2",
    instituteName: "Shree Muktajivan Vidhyalaya",
    course: "Standard 12th Science",
    grades: [
      { type: "Overall Percentage", value: "76.0 %" }
    ],
    logo: "assets/muk.jpeg",
    timeframe: "2021-2022"
  },
  {
    id: "2",
    instituteName: "Shree Muktajivan Vidhyalaya",
    course: "Standard 10",
    grades: [
      { type: "Overall Percentage", value: "83.0 %" }
    ],
    logo: "assets/muk.jpeg",
    timeframe: "2020-2021"
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
    timeframe: "May 2025 - Present"
  },
  {
    id: "1",
    companyName: "Webosphere Technolabs LLP",
    position: "Software Professional intern",
    description: "Focused on **learning and implementing generative AI solutions** and exploring low-code platforms to enable **faster development cycles** with minimal resources and maximum efficiency.",
    logo: "assets/webo.jpg",
    timeframe: "Nov 2024 - Apr 2025"
  },
]

export const skillsData: Skill[] = [
  { id: "1", name: "English", category: "Language" },
  { id: "2", name: "Japanese", category: "Language" },
  { id: "3", name: "Hindi", category: "Language" },
  { id: "4", name: "Gujarati", category: "Language" },
  { id: "5", name: "Decision Trees", category: "Artificial Intelligence" },
  { id: "6", name: "Neural Networks", category: "Artificial Intelligence" },
  { id: "7", name: "SVM", category: "Artificial Intelligence" },
  { id: "8", name: "Linear Regression", category: "Artificial Intelligence" },
  { id: "9", name: "Logistic Regression", category: "Artificial Intelligence" },
  { id: "10", name: "React", category: "Frontend" },
  { id: "11", name: "HTML", category: "Frontend" },
  { id: "12", name: "CSS", category: "Frontend" },
  { id: "13", name: "Node", category: "Backend" },
  { id: "14", name: "Express", category: "Backend" },
  { id: "15", name: "Django", category: "Backend" },
  { id: "16", name: "Flask", category: "Backend" },
  { id: "17", name: "TypeScript", category: "Programming Language" },
  { id: "18", name: "Python", category: "Programming Language" },
  { id: "19", name: "JavaScript", category: "Programming Language" },
  { id: "20", name: "Java", category: "Programming Language" },
  { id: "21", name: "SQL", category: "Query Language" },
  { id: "22", name: "MongoDB", category: "Database" },
  { id: "23", name: "MySql", category: "Database" },
  { id: "24", name: "PostgreSQL", category: "Database" },
  { id: "25", name: "MSSql", category: "Database" },
  { id: "26", name: "Git", category: "Tools" },
  { id: "27", name: "Grafana", category: "Tools" },
  { id: "28", name: "Redux", category: "Tools" },
  { id: "29", name: "Shadcn", category: "Libraries" },
  { id: "30", name: "Numpy", category: "Libraries" },
  { id: "31", name: "Matplotlib", category: "Libraries" },
  { id: "32", name: "Pandas", category: "Libraries" },
  { id: "33", name: "Scikit-learn", category: "Libraries" },
  { id: "34", name: "TensorFlow", category: "Libraries" },
  { id: "35", name: "Seaborn", category: "Libraries" },
  { id: "36", name: "CodeceptJS", category: "Tools" },
  { id: "37", name: "KNN", category: "Artificial Intelligence" },
]

export const projectsData: Project[] = [
  {
    id: "1",
    name: "JADE",
    slogan: "Analysis and visualization made easy",
    description: `
## Overview

**JADE** is a powerful data visualization platform that helps you transform raw data into beautiful, interactive dashboards. Whether you're analyzing business metrics, tracking KPIs, or exploring datasets, JADE makes it simple to create stunning visualizations without writing code.

## Key Features

- **Drag-and-Drop Dashboard Builder**: Easily create and rearrange charts on your dashboard by dragging them around - changes save automatically.
- **Multiple Chart Types**: Choose from Line Charts, Bar Charts, Area Charts, Pie Charts, Radar Charts, and Scatter Plots to visualize your data.
- **Connect Any Database**: Works with all major databases including MySQL, PostgreSQL, MongoDB, and more - just enter your connection details.
- **Import CSV Files**: Simply upload your Excel or CSV files to create instant visualizations.
- **Connect to APIs**: Pull data from external services and APIs to keep your dashboards up-to-date automatically.
- **Rich Text Editor**: Write your queries with helpful features like syntax highlighting and auto-completion.
- **Fully Customizable**: Adjust colors, styles, chart types, and layouts to match your needs and branding.
- **Works Everywhere**: Use it in your web browser or download the desktop app for Windows.
- **Secure Sharing**: Share your dashboards with team members or clients with secure access links.
- **Interactive Variables**: Add filters and dropdowns to let viewers interact with your data dynamically.
- **Live Preview**: See your changes instantly as you build and customize your charts.
    `,
    logo: "assets/Jade.png",
    madeAt: 0,
    skills: [
      "22", "14", "10", "13", "11", "12", "17", "25", "24", "23", "26", "29", "27"
    ]
  },
  {
    id: "2",
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
    id: "3",
    name: "QuickTest",
    slogan: "Efficient and reliable software testing integrated with AI.",
    description: `
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
    logo: "assets/QuickTest.png",
    madeAt: 1,
    skills: [
      "22", "14", "10", "13", "11", "12", "19", "17", "36", "29", "25", "26",
    ]
  },

]