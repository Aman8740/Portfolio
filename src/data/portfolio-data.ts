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
    name: "Automated Testing System",
    slogan: "Efficient and reliable software testing integrated with AI.",
    description: `
## Key Features

- **Multi product configuration**: Supports Configuration for multiple products of the same organization and considers all possibilities and versions.
- **Automated Test Management**: An automated testing system that lets users manage and run product-specific tests with minimal human intervention
- **Flexible Configuration**: Each test can have its own configuration with different possible flows of running tests
- **Smart Test Selection**: The system supports ignoring test cases when needed
- **Comprehensive Reporting**: It generates detailed reports that help in identifying issues and improving software quality
- **Video Documentation**: Provides video recordings of test runs for better analysis and debugging
- **Rich Diagnostics**: Provides image for each failed test for investigation
- **Error Log**: For each test case provides information about what went wrong.
- **Information banner**: Provides information about what is going on while the test is running.
    `,
    logo: "https://via.placeholder.com/50",
    madeAt: 1,
    skills: [
      "22", "14", "10", "13", "11", "12", "19", "17", "36", "29", "25", "26",
    ]
  },
  {
    id: "2",
    name: "JADE",
    slogan: "Analysis and visualization made easy",
    description: `
## Overview

**JADE** is a comprehensive data analysis and visualization platform available as desktop applications.

## Core Capabilities

- **Desktop Application**: Windows-based desktop application for local data processing
- **Database Connectivity**: Lets users create connections to their own databases seamlessly
- **CSV Data Upload**: Web application that allows users to upload datasets in CSV format
- **Exploratory Data Analysis**: Perform comprehensive EDA using various visualization techniques
- **Dashboard Creation**: Provides setup to create interactive dashboards and variables using SQL and NoSQL databases
- **Customizable Views**: Lets users customize the view of charts and dashboards according to their needs
    `,
    logo: "https://via.placeholder.com/50",
    madeAt: 0,
    skills: [
      "22", "14", "10", "13", "11", "12", "17", "25", "24", "23", "26"
    ]
  },
]