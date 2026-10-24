import type { PersonalInfo, Education, Certificate, Experience, Skill, Project, ResumeConfig, RirekishoConfig, PrivateDetails } from '@/types'
import selection from './document-selection.json'
import AutopilotMark from '@/components/portfolio/AutopilotMark'

export const personalInfo: PersonalInfo = {
  name: "Aman Shaikh",
  nameJa: "アマン・シェイク",
  title: "Full Stack Developer",
  photo: "assets/pfp.png",
  portfolioUrl: "https://aman8740.github.io/Portfolio/",
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
      { type: "Sem 6 SPI", value: "8.00" },
      { type: "Sem 7 SPI", value: "7.90" },
      { type: "Sem 8 SPI", value: "10.00" },
      { type: "CGPA", value: "8.80" },
    ],
    logo: "assets/lj.jpg",
    timeframe: "01-Aug-2022-31-May-2026",
    instituteNameJa: "L.J.工科技術大学（L.J. Institute of Engineering and Technology）",
    courseJa: "情報技術工学部 学士課程 (B.E. in IT)"
  },
  {
    id: "2",
    instituteName: "Shree Muktajivan Vidhyalaya",
    course: "Standard 12th Science",
    grades: [
      { type: "Overall Percentage", value: "76.0 %" }
    ],
    logo: "assets/muk.jpeg",
    timeframe: "01-Jun-2021-31-May-2022",
    instituteNameJa: "シュリー・ムクタジーヴァン・ヴィディヤーラヤ（Shree Muktajivan Vidhyalaya）",
    courseJa: "高等学校 12年生（理系専攻）"
  },
  {
    id: "2",
    instituteName: "Shree Muktajivan Vidhyalaya",
    course: "Standard 10",
    grades: [
      { type: "Overall Percentage", value: "83.0 %" }
    ],
    logo: "assets/muk.jpeg",
    timeframe: "01-Jun-2019-31-May-2020",
    instituteNameJa: "シュリー・ムクタジーヴァン・ヴィディヤーラヤ（Shree Muktajivan Vidhyalaya）",
    courseJa: "中等教育 10年生"
  },
]

export const certificatesData: Certificate[] = [
  {
    id: "1",
    name: "Introduction to Java",
    institute: "LearnQuest",
    imageUrl: "assets/JAVA1.jpeg",
    completedOn: "24-Feb-2023",
    url: "https://www.coursera.org/learn/introduction-to-java",
    nameJa: "Java入門",
    instituteJa: "ラーンクエスト"
  },
  {
    id: "2",
    name: "Inheritance and Data Structures in Java",
    institute: "University of Pennsylvania",
    imageUrl: "assets/JAVA2.jpeg",
    shortName: "Inheritance & Data Structures in Java",
    completedOn: "29-Aug-2023",
    url: "https://www.coursera.org/learn/java-inheritance-data-structures",
    nameJa: "Javaにおける継承とデータ構造",
    instituteJa: "ペンシルベニア大学"
  },
  {
    id: "3",
    name: "Database Design and Basic SQL in PostgreSQL",
    institute: "University of Michigan",
    imageUrl: "assets/DB.jpeg",
    shortName: "Database Design & Basic SQL in PostgreSQL",
    completedOn: "29-Aug-2023",
    url: "https://www.coursera.org/learn/database-design-postgresql",
    nameJa: "データベース設計とPostgreSQLによる基本SQL",
    instituteJa: "ミシガン大学"
  },
  {
    id: "4",
    name: "HTML, CSS, and Javascript for Web Developers",
    institute: "Johns Hopkins University",
    imageUrl: "assets/HTML_CSS_JS.jpeg",
    completedOn: "13-Feb-2024",
    url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
    nameJa: "Web開発者のためのHTML・CSS・JavaScript",
    instituteJa: "ジョンズ・ホプキンス大学"
  },
  {
    id: "5",
    name: "Exploratory Data Analysis for Machine Learning",
    institute: "IBM",
    imageUrl: "assets/ML.jpeg",
    completedOn: "19-Jul-2024",
    url: "https://www.coursera.org/learn/ibm-exploratory-data-analysis-for-machine-learning",
    nameJa: "機械学習のための探索的データ分析",
    instituteJa: "IBM"
  },
  {
    id: "6",
    name: "Building Generative AI-Powered Applications with Python",
    institute: "IBM",
    imageUrl: "assets/AI.jpeg",
    shortName: "Building Generative AI-Powered Apps with Python",
    completedOn: "28-Jun-2025",
    url: "https://www.coursera.org/learn/building-gen-ai-powered-applications",
    nameJa: "Pythonによる生成AIアプリケーション開発",
    instituteJa: "IBM"
  },
  {
    id: "7",
    name: "AWS Cloud Technical Essentials",
    institute: "Amazon Web Services",
    imageUrl: "assets/AWS.jpeg",
    completedOn: "09-Feb-2025",
    url: "https://www.coursera.org/learn/aws-cloud-technical-essentials",
    nameJa: "AWSクラウド技術基礎",
    instituteJa: "アマゾン ウェブ サービス"
  },
  {
    id: "8",
    name: "Ethical Hacking Essentials (EHE)",
    institute: "EC-Council",
    imageUrl: "assets/CS.jpeg",
    completedOn: "31-Jan-2026",
    url: "https://coursera.org/share/06a154b13a8387f8bf8d3c23333002d1",
    nameJa: "エシカルハッキング基礎（EHE）",
    instituteJa: "EC-Council"
  },
  {
    id: "9",
    name: "Back-End Development with .NET",
    institute: "Microsoft",
    imageUrl: "assets/Net.jpeg",
    completedOn: "24-Apr-2026",
    url: "https://coursera.org/share/94b6d94bff63e725944fc79d49b580ea",
    nameJa: ".NETによるバックエンド開発",
    instituteJa: "マイクロソフト"
  },
]

export const experienceData: Experience[] = [
  {
    id: "1",
    companyName: "Webosphere Technolabs LLP",
    position: "Software Professional Associate",
    description: "**Building innovative solutions** for the pharma and medical industry by developing a comprehensive low-code/no-code platform. This platform streamlines document workflows throughout the organization, making processes **effortless and efficient**.",
    logo: "assets/webo.jpg",
    timeframe: "01-May-2025-Present",
    companyNameJa: "Webosphere Technolabs",
    positionJa: "ソフトウェアエンジニア（アソシエイト）",
    descriptionJa: "**製薬・医療業界向けの革新的DXソリューション**として、包括的なローコード／ノーコードプラットフォームの開発を主導。組織全体の文書作成・承認・管理ワークフローを統合し、業務プロセスの**大幅な効率化と自動化**を実現しています。",
    resumeBullets: [
      "Building innovative solutions for the pharma and medical industry through a comprehensive low-code/no-code platform that streamlines document workflows.",
      "Designed and developed end-to-end full-stack applications handling frontend interfaces, backend services, and data flow with a focus on scalability and performance.",
      "Built reusable components, RESTful APIs, and modular systems following clean architecture and best coding practices."
    ]
  },
  {
    id: "1",
    companyName: "Webosphere Technolabs LLP",
    position: "Software Professional Intern",
    description: "Focused on **learning and implementing generative AI solutions** and exploring low-code platforms to enable **faster development cycles** with minimal resources and maximum efficiency.",
    logo: "assets/webo.jpg",
    timeframe: "01-Nov-2024-30-Apr-2025",
    companyNameJa: "Webosphere Technolabs",
    positionJa: "ソフトウェアエンジニア（インターン）",
    descriptionJa: "**生成AIソリューションの実装と学習**に注力し、ローコード開発環境を活用して最小限のリソースで**開発サイクルを迅速化・最大効率化**する取り組みを担当しました。",
    resumeBullets: [
      "Focused on learning and implementing generative AI solutions to create intelligent, data-driven workflows and features.",
      "Explored low-code platforms to enable faster development cycles with minimal resources."
    ]
  },
]

export const skillsData: Skill[] = [
  { id: "1", name: "English", category: "Language", level: "Native" },
  { id: "2", name: "Japanese", category: "Language", level: "Pre-Advanced" },
  { id: "3", name: "Hindi", category: "Language", level: "Native" },
  { id: "4", name: "Gujarati", category: "Language", level: "Native" },
  { id: "38", name: "Claude", category: "AI Tools", level: "Expert" },
  { id: "39", name: "Cursor", category: "AI Tools", level: "Expert" },
  { id: "40", name: "GitHub Copilot", category: "AI Tools", level: "Advanced" },
  { id: "5", name: "Decision Trees", category: "Artificial Intelligence", level: "Intermediate" },
  { id: "6", name: "Neural Networks", category: "Artificial Intelligence", level: "Intermediate" },
  { id: "7", name: "SVM", category: "Artificial Intelligence", level: "Intermediate" },
  { id: "8", name: "Linear Regression", category: "Artificial Intelligence", level: "Advanced" },
  { id: "9", name: "Logistic Regression", category: "Artificial Intelligence", level: "Advanced" },
  { id: "10", name: "React", category: "Frontend", level: "Advanced" },
  { id: "11", name: "HTML", category: "Frontend", level: "Expert" },
  { id: "12", name: "CSS", category: "Frontend", level: "Advanced" },
  { id: "13", name: "Node.js", category: "Backend", level: "Advanced" },
  { id: "14", name: "Express", category: "Backend", level: "Advanced" },
  { id: "15", name: "Django", category: "Backend", level: "Intermediate" },
  { id: "16", name: "Flask", category: "Backend", level: "Intermediate" },
  { id: "17", name: "TypeScript", category: "Programming Language", level: "Advanced" },
  { id: "18", name: "Python", category: "Programming Language", level: "Expert" },
  { id: "19", name: "JavaScript", category: "Programming Language", level: "Expert" },
  { id: "20", name: "Java", category: "Programming Language", level: "Intermediate" },
  { id: "21", name: "SQL", category: "Query Language", level: "Advanced" },
  { id: "22", name: "MongoDB", category: "Database", level: "Advanced" },
  { id: "23", name: "MySQL", category: "Database", level: "Pre-Intermediate" },
  { id: "24", name: "PostgreSQL", category: "Database", level: "Intermediate" },
  { id: "25", name: "MSSQL", category: "Database", level: "Intermediate" },
  { id: "26", name: "Git", category: "Tools", level: "Pre-Advanced" },
  { id: "27", name: "Grafana", category: "Tools", level: "Intermediate" },
  { id: "28", name: "Redux", category: "Tools", level: "Pre-Intermediate" },
  { id: "29", name: "Shadcn", category: "Libraries", level: "Pre-Advanced" },
  { id: "30", name: "NumPy", category: "Libraries", level: "Advanced" },
  { id: "31", name: "Matplotlib", category: "Libraries", level: "Advanced" },
  { id: "32", name: "Pandas", category: "Libraries", level: "Advanced" },
  { id: "33", name: "Scikit-learn", category: "Libraries", level: "Intermediate" },
  { id: "34", name: "TensorFlow", category: "Libraries", level: "Intermediate" },
  { id: "35", name: "Seaborn", category: "Libraries", level: "Intermediate" },
  { id: "36", name: "CodeceptJS", category: "Tools", level: "Pre-Advanced" },
  { id: "41", name: "Docker", category: "Tools", level: "Intermediate" },
  { id: "37", name: "KNN", category: "Artificial Intelligence", level: "Intermediate" },
]

export const projectsData: Project[] = [
  {
    id: "1",
    name: "Autopilot",
    slogan: "Describe the change. Autopilot ships it.",
    sloganJa: "変更内容を伝えるだけ。Autopilotが仕様策定から実装・検証まで自動で完了します。",
    logoComponent: AutopilotMark,
    description: `
## Overview

**Autopilot** is an AI-driven delivery pipeline built for Quickflow. You submit a task describing what needs to change. A person reviews and approves it. From that point, Autopilot takes over completely — producing requirements, implementing the change, running verification, opening it for human review, updating documentation, and publishing a knowledge-base article. Nobody writes code by hand.

## What each stage does

- **Requirements** — before any implementation begins, Autopilot produces a clear set of requirements and acceptance criteria directly tied to your task. These are the terms the work will be evaluated against.
- **Implementation** — it carries out the change, running its own checks as it builds. If something breaks, it identifies the cause and fixes it, repeating the cycle until the requirements are met.
- **Evidence** — it runs the full suite of automated checks and captures screenshots, all attached to the original task ticket as a verifiable record.
- **Review** — the completed change is opened for a person to inspect and approve. Autopilot never approves its own work and never merges without a sign-off.
- **Documentation** — after approval, it updates the project's internal documentation and drafts a knowledge-base article summarising the change.
- **Publishing** — a second person reviews the draft article before it goes live to the broader team.

## Human control, by design

Up to ten changes can run simultaneously, each in a fully isolated environment with its own hard spending cap. A typical change costs between $45 and $63; the ceiling is $75. Autopilot cannot approve reviews, cannot delete history, and cannot access anything outside the workspace it was assigned. These are structural limits enforced by the system — not instructions it is trusted to follow.

## What sets it apart

Most delivery automation follows a fixed script. Autopilot reasons: it reads the actual codebase, decides what needs to change, writes tests before the implementation, and works through failures the way a developer would. Every action is logged with its rationale, every cost is tracked, and the audit trail is permanent.
    `,
    descriptionJa: `
## 概要

**Autopilot**は、Quickflow向けに構築されたAI駆動型のソフトウェアデリバリーシステムです。人が変更内容や要望を指示・承認すると、Autopilotがタスクを引き継ぎ、仕様策定、コード実装、自動テスト検証、人間による最終レビュー依頼、ドキュメント更新、ナレッジベース記事の作成までを全自動で行います。手作業でコードを書く必要はありません。

## 変更処理の流れ

すべての変更は決められたプロセスに沿って進みます。2つの工程でのみ人間の確認・承認が必要で、それ以外の工程は自動で実行されます。

- **要件定義**: 作業開始前に、タスクに沿った明確な要件と受け入れ基準を作成
- **実装・修正**: 要件を満たすまでテストを繰り返しながら安全に変更を適用
- **エビデンス記録**: 全自動テストを実行し、画面キャプチャを証跡としてタスクチケットに自動添付
- **人間によるレビュー**: 完成した変更を人間の担当者が確認・承認（AIが勝手にマージすることはありません）
- **ドキュメント更新**: プロジェクト内部の仕様書とナレッジベース記事の下書きを自動作成
- **公開承認**: 2人目の担当者が記事を確認・承認した後に一般公開

## 安全性とコスト管理

最大10件の変更タスクを同時に、完全に独立した安全な環境で並行実行できます。タスクごとに厳格な予算上限（通常45〜63ドル、上限75ドル）が設定されており、AIが自律的にレビューを承認したり、履歴を削除したり、指定範囲外の領域にアクセスすることはシステム構造上禁止されています。

## 特徴

あらかじめ決められたスクリプトを実行するのではなく、AIが実際のコードベースを読み解き、原因を分析して修正を行います。すべての判断理由と発生コストが記録され、完全な監査ログが永続的に保持されます。
    `,
    madeAt: 1,
    media: [
      "assets/autopilotChat.png",
      "assets/autopilot-runs.png",
      "assets/autopilot-run.png",
      "assets/autopilot-Kb-draft.png",
    ],
    resume: {
      order: 4,
      headline: "AI-Driven Delivery Pipeline for Quickflow",
      bullets: [
        "Takes an approved task through requirements, implementation, automated verification, human review, documentation and a knowledge-base article, with no hand-written code.",
        "Runs up to ten changes in parallel in isolated environments, each with a hard spending cap; it cannot approve reviews, delete history or access anything outside its workspace.",
        "Writes tests before implementation, attaches screenshots and test evidence to the task ticket, and keeps a permanent audit trail of every action, rationale and cost."
      ],
      tech: ["13", "17", "21", "26", "41", "38", "39"]
    },
    skills: [
      "13", "17", "21", "26", "41", "38", "39"
    ]
  },
  {
    id: "2",
    name: "Renshuu MCP",
    slogan: "Ask your AI about your Japanese study progress.",
    sloganJa: "AIアシスタントと連携して、日本語学習の進捗をスムーズに確認・管理。",
    logo: "assets/renshuu-mcp-icon.svg",
    projectUrl: "https://github.com/Aman8740/renshuu-mcp-server",
    description: `
## Overview

**Renshuu MCP** is a connection layer between AI assistants and [renshuu.org](https://renshuu.org) — the Japanese vocabulary, kanji, and grammar study platform. Without it, an AI assistant knows nothing about your study history. With it, your AI can see exactly where you stand across every level and list, understand which items you have mastered and which you haven't, and act on your data directly — all within the conversation.

## What you can do

- Pull exact progress figures for any JLPT level — vocabulary percentage, kanji coverage, grammar completion
- Search for any specific word, character, or grammar point and get your personal mastery score and study history for it
- Add new items to your active study lists or remove ones you no longer need to study, without opening the website
- Get a combined readiness summary across all your active schedules and levels in a single request
- Look up example sentences, reading aids, and context for any individual item

## Built for multiple users

One deployment handles any number of renshuu accounts at the same time. Each request is scoped entirely to the credentials that came with it — no account can see or influence any other. You can run it locally for just yourself, or deploy it centrally for a study group, a class, or anyone else. Each person uses their own renshuu account; the connector never mixes them.

## Kept accurate over time

Every action is tested independently against simulated responses, covering both normal operation and error conditions. Multi-user isolation is verified with real concurrent requests to confirm data never crosses between accounts. A scheduled monthly check fetches renshuu's current service definition and raises a flag if anything has changed, so the connector never silently drifts out of step with the live service.
    `,
    descriptionJa: `
## 概要

**Renshuu MCP**は、AIアシスタントと日本語学習プラットフォーム [renshuu.org](https://renshuu.org) を直接つなぐ連携サーバーです。このツールにより、AIがあなたの学習データ（単語・漢字・文法の習得度やスケジュール）を正確に把握し、チャット上での学習相談やスケジュール管理が可能になります。

## できること

- **JLPT進捗の確認**: N3・N2などの単語・漢字・文法の進捗率をアカウントから即座に取得
- **個別項目の確認**: 特定の単語や漢字の習得レベルや学習履歴を検索
- **リストの整理**: Webサイトを開くことなく、学習リストへの追加・削除を実行
- **総合判定**: 設定中のスケジュールに基づき、試験対策の進捗サマリーを提示
- **用例と解説**: 苦手な項目に合わせた例文や文脈解説をAIが提案

## 複数ユーザー対応とセキュリティ

1つのサーバーで複数のrenshuuアカウントを安全に管理できます。各リクエストはユーザー固有のアカウント情報に厳密に分離されており、他人のデータが見えたり干渉することはありません。個人利用はもちろん、学習グループや教室での共有利用も可能です。

## 品質維持

すべての機能は模擬レスポンスを用いた単体テストで検証されています。また、定期的な自動チェックにより、renshuu側のAPI仕様変更を検知して常に最新の動作を維持します。
    `,
    madeAt: 0,
    resume: {
      order: 6,
      headline: "MCP Server Connecting AI Assistants to renshuu.org",
      bullets: [
        "Lets AI assistants read exact JLPT progress for vocabulary, kanji and grammar, and look up mastery and study history for any item.",
        "Adds or removes items on study lists and returns a combined readiness summary across active schedules, all from within the chat.",
        "Serves many renshuu accounts from one deployment with strict per-request credential isolation; mock-based tests plus a scheduled monthly check of renshuu's service definition."
      ],
      tech: ["2", "13", "17", "19", "26", "38"]
    },
    skills: [
      "2", "13", "17", "19", "26", "38"
    ]
  },
  {
    id: "3",
    name: "Quickflow",
    slogan: "End-to-end process digitalization and automation for pharma.",
    sloganJa: "製薬・ライフサイエンス業界向け 業務プロセスの完全デジタル化＆自動化プラットフォーム。",
    description: `
## Overview

**Quickflow** is a no-code platform built for the Pharma, Biotech, and Life Science industries. Regulated facilities run on documentation — every test, deviation, batch release, and change control carries compliance weight. Quickflow replaces paper records and disconnected tools with a connected, auditable digital system built to meet USFDA requirements.

## Quality management

- **Quality Management System (QMS)** — manage change controls, deviations, CAPA actions, market complaints, and out-of-specification events with real-time status across each record
- **Document Management System (DMS)** — SOPs, STPs, and protocols with full version control, e-signature workflows, and audit trails on every change
- **Annual Product Quality Review (APQR)** — structured review process that compiles quality data across a product's full year for regulatory submission

## Laboratory management

- **LIMS** — complete test request lifecycle from initiation through analysis to certificate of analysis, with full traceability
- **Electronic Lab Notebook (ELN)** — structured digital notebooks with data integrity controls and collaborative access
- **e-Sheet** — web-based calculation sheets for laboratory formulas, replacing error-prone manual calculations
- **Genius Lab** — direct integration with standalone instruments via RS232 and ethernet for automatic raw data capture
- **Chemical Management** — lifecycle tracking of laboratory chemicals from procurement to disposal, including safety and hazard records

## Production, warehouse, and logbooks

- **Batch Manufacturing Record (BMR)** — digital batch records with configurable templates, eliminating paper-based processes in production
- **Continuous Process Verification (CPV)** — real-time data collection and trend analysis for ongoing quality assurance across production runs
- **Warehouse Management System (WMS)** — full inventory lifecycle from purchase order through storage to disposal
- **Electronic Logbook** — digital records for equipment usage, calibrations, cleaning, and recurring facility activities

## How it's used

New forms, workflows, and approval processes are configured visually — no programming required. Multi-step approval chains, conditional logic, and e-signatures are built through a visual designer. The platform integrates with existing enterprise systems and produces the audit-ready records regulators expect, without the implementation overhead that compliance software usually brings.

## Quickflow MCP

**Quickflow MCP** gives AI assistants structured, controlled access to the Quickflow platform. Instead of navigating the interface manually, an AI can look up records, fill in forms, trigger approval workflows, and manage data directly — the same operations any Quickflow user performs, now available to any AI assistant that connects to it.

### Two permission modes

The connector runs as two distinct deployments from a single codebase:

- **Full access** — every operation the platform supports, including creating, updating, and deleting records. This is the mode Autopilot uses when it needs to interact with a live Quickflow environment to verify that an implemented change behaves correctly end-to-end.
- **Read-only** — only retrieval and display operations exist in this mode. Write and delete operations are not registered at all — they are absent, not blocked. An AI running in read-only mode cannot affect any data, regardless of what it is instructed to do.

### What it covers

109 distinct operations spanning the entire Quickflow platform:

- Forms, templates, and form submission workflows
- Document management, version control, and approval chains
- Quality records: CAPA actions, deviations, change controls, and complaints
- Laboratory requests, test results, and certificate of analysis records
- Dashboards, analytical reports, and trend data
- Master data and system configuration

### Infrastructure

Two instances run continuously in the background — one per permission mode — and restart automatically if they go down. When Autopilot tests a change in an isolated environment, it starts a third instance scoped entirely to that run. Nothing it does during testing touches the shared reference data.
    `,
    descriptionJa: `
## 概要

**Quickflow**は、製薬・バイオ・ライフサイエンス業界向けに特化して開発されたノーコード／ローコードプラットフォームです。紙の記録や手作業の承認、個別管理のExcelを統合し、FDA（米国食品医薬品局）規制に適合した安全で効率的なデジタルワークフローを提供します。

## 主な管理領域

- **品質管理 (QMS / DMS / APQR)**: 変更管理、逸脱管理、CAPA（是正措置・予防措置）、苦情処理、SOP（標準作業手順書）のバージョン管理と電子署名
- **試験・研究所管理 (LIMS / ELN / e-Sheet)**: 検体受付から試験、試験成績書発行までのトレーサビリティ管理、電子実験ノート、機器データ連携、試薬管理
- **製造・設備 (BMR / CPV / 電子ログブック)**: 製造指図記録書のデジタル化、製造プロセスのリアルタイムモニタリング、設備の使用・校正記録
- **倉庫・在庫 (WMS)**: 原料の受入・保管から廃棄までのトレーサビリティ管理

## 特長

プログラミング不要で、直感的な画面操作のみで新しいフォームや承認ワークフローを構築できます。多段階承認や条件分岐、電子署名に標準対応し、既存の基幹システムとも柔軟に連携します。

## Quickflow MCP

**Quickflow MCP**は、AIアシスタントがQuickflowプラットフォームと直接対話するための連携システムです。人間が画面を一つひとつクリックする代わりに、AIがデータの検索、フォーム入力、ワークフローの承認、レコード管理を迅速かつ正確に実行できます。

### 2つの安全アクセスモード

単一の基盤から用途に応じた2つの権限モードを提供します。

- **フルアクセスモード**: データの取得・作成・更新・削除の全機能を利用可能。AutopilotなどのAIエージェントが、実装した機能が実際の環境で正しく動くか自動テストする際に活用されます。
- **読み取り専用モード**: データの参照・表示機能のみを提供。作成・削除の命令はシステム構造上排除されているため、誤った操作でデータを改ざんする心配がありません。

### 対応領域

Quickflowの全機能（各種フォーム、文書管理、品質記録、検査依頼、ダッシュボード、マスタ設定など）にわたる109種類のアクションを網羅しています。

### 安定した常時稼働

2つのインスタンスがバックグラウンドで常時稼働し、万が一の停止時も自動復旧します。Autopilotが検証を行う際は、他と隔離されたテスト専用のインスタンスが自動生成されるため、本番データに影響を与えません。
    `,
    logo: "assets/Quickflow.png",
    madeAt: 1,
    resume: {
      order: 2,
      headline: "End-to-End Process Digitalization & Automation for Pharma",
      bullets: [
        "Low Code/No Code platform for Pharma and Life Science ensuring full USFDA compliance.",
        "Digitizes business processes across QMS, DMS, LIMS, ELN, BMR with audit trails and RPA automation.",
        "Supports real-time analytics, version control, and enterprise system integration.",
        "Includes Quickflow MCP: 109 operations for AI assistants, in full-access and read-only modes."
      ],
      tech: ["10", "13", "14", "17", "22", "25", "29", "27", "26", "41", "38", "40"]
    },
    skills: [
      "10", "13", "14", "11", "12", "19", "17", "22", "26", "41", "29", "27", "25", "38", "40",
    ]
  },
  {
    id: "5",
    name: "QuickTest",
    slogan: "Efficient and reliable software testing integrated with AI.",
    sloganJa: "AIと連携した、製薬業界基準の高信頼ソフトウェア自動テストプラットフォーム。",
    description: `
## Overview

**QuickTest** is an automated testing platform built for the Quickflow ecosystem. In a regulated environment, software verification is not just about whether tests pass — it requires documented, reviewable evidence. QuickTest runs test suites without manual involvement and produces a structured record of every run: a screen recording, per-failure screenshots, per-test error logs, and a full summary report.

## How test suites are organised

Each product in the organisation has its own test suite with its own configuration. Within a suite, individual tests can define multiple valid execution paths to account for version differences or optional features. Tests can be skipped selectively without disrupting the rest of the run. While a run is in progress, a live status display shows which test is currently executing and what the system is doing at every step.

## What a run produces

- A full screen recording of the entire session, available for post-run review
- A screenshot captured at the exact moment of each failure, showing the application state when the test broke
- A per-test error log describing what was expected, what actually happened, and where in the test the failure occurred
- A session summary covering pass and fail counts, timing breakdowns, and a cross-product overview

## Multi-product and multi-version

QuickTest manages separate, independent test suites for multiple products within the same organisation. Each product maintains its own version history, so regression runs can target any previous configuration. Test setups for one product or version have no effect on another — runs are fully isolated from each other.

## QuickTest MCP

QuickTest is also exposed to AI assistants through a dedicated MCP connector, so an assistant can work with QuickTest directly instead of going through the user interface.
    `,
    descriptionJa: `
## 概要

**QuickTest**は、Quickflowエコシステム向けに開発された自動テストプラットフォームです。規制が厳しい環境では、テストが成功したかどうかだけでなく「確かな証拠（エビデンス）」を残すことが求められます。QuickTestはテストを自動実行し、画面録画、失敗箇所のキャプチャ、詳細ログを含む監査対応レポートを自動生成します。

## テストの仕組み

製品やバージョンごとに個別のテスト構成を設定できます。状況に応じて特定のテストケースを一時的にスキップすることも可能で、テスト実行中はリアルタイムで進行状況が表示されます。

## 出力される検証エビデンス

- **全画面録画**: テスト実行中の全操作が動画として記録され、後からいつでも確認可能
- **エラー時キャプチャ**: テストが失敗した瞬間の画面状態を自動保存
- **詳細エラーログ**: 期待された動作と実際の結果、発生箇所を明確に記録
- **総合サマリーレポート**: 合否件数や所要時間をまとめたレポートを生成

## 複数製品・複数バージョンの並行管理

同一組織内の複数製品のテストを独立して管理できます。過去のバージョンに対する回帰テストも容易に実行でき、環境間の干渉を防ぎます。

## QuickTest MCP

QuickTestは専用のMCPコネクタを通じてAIアシスタントからも利用でき、画面操作を介さずにQuickTestを直接扱えます。
    `,
    logo: "assets/QuickTest.jpeg",
    madeAt: 1,
    resume: {
      order: 3,
      headline: "AI-Integrated Automated Software Testing Platform",
      bullets: [
        "Automated QA platform with video recording, failure screenshots, and detailed error logs per test run.",
        "Supports multi-product configuration, flexible per-test flow management, and comprehensive reports.",
        "Features a live information banner during execution for real-time test monitoring.",
        "Includes QuickTest MCP, a dedicated connector so AI assistants can work with QuickTest directly."
      ],
      tech: ["10", "13", "14", "22", "17", "36", "29", "25", "26", "41"]
    },
    skills: [
      "22", "14", "10", "13", "11", "12", "19", "17", "36", "29", "25", "26", "41",
    ]
  },
  {
    id: "6",
    name: "EXML",
    slogan: "Explore machine learning - interactive learning platform.",
    sloganJa: "見て、触って、実践的に学ぶ機械学習インタラクティブプラットフォーム。",
    description: `
## Overview

**EXML** is an interactive platform for learning machine learning by doing. Most introductions stay theoretical — they explain how algorithms work but give you nothing to try them on. EXML puts real trained models in front of you and lets you bring your own data. You upload something, you get a result, you see what the model was confident about and what it wasn't. The concepts land differently when you are the one producing the inputs.

## What the platform teaches

- The fundamentals: how a model learns from examples, what it is actually optimising for, and how it applies what it learned to new data it has never seen
- The distinction between classification (assigning a category) and regression (predicting a value), and the kinds of problems each is suited for
- Supervised learning — where the model trains on labelled examples — versus unsupervised learning, where it finds structure in data on its own
- Four algorithms in depth: K-Nearest Neighbours, Naive Bayes, Support Vector Machines, and Neural Networks — what each one does, where it performs well, and where it doesn't

## How you interact with it

- Every algorithm has a live model you can run directly in the browser — no account, no setup
- Upload your own dataset and receive a prediction alongside a confidence breakdown showing how certain the model was and which factors drove the result
- Compare two algorithms on the same input side by side to see concretely how their different approaches produce different outputs
- Animated visualisations walk through each stage of a model's processing, showing what is happening to your data at each step rather than describing it abstractly

## Who it is for

EXML is for anyone who learns better by experimenting than by reading. Students encountering machine learning for the first time get something tangible to interact with alongside the theory. Practitioners who want a quick hands-on reference for how a specific algorithm behaves on a particular data shape can get that in minutes. No prior knowledge of machine learning is assumed or required.
    `,
    descriptionJa: `
## 概要

**EXML**は、理論を読むだけでなく、実際にモデルを動かしながら機械学習の仕組みを直感的に学べるWebプラットフォームです。自分のデータをアップロードして推論結果や信頼度スコアを確認できるため、アルゴリズムの働きを体感的に理解できます。

## 学べる内容

- 機械学習の基本概念（データから学習する仕組み、予測の最適化手法）
- 分類（カテゴリ分け）と回帰（数値予測）の違いと使い分け
- 教師あり学習と教師なし学習の特徴
- 主要アルゴリズムの解説（K近傍法、ナイーブベイズ、サポートベクターマシン、ニューラルネットワーク）

## インタラクティブな体験機能

- ブラウザ上で各アルゴリズムのモデルをすぐに実行可能
- 独自データをアップロードし、予測結果とモデルの判断根拠（信頼度）を表示
- 2つのアルゴリズムを同じ入力で並べて比較し、動作の違いを観察
- 内部のデータ処理ステップをアニメーションで視覚化

## 対象ユーザー

機械学習を初めて学ぶ学生から、各アルゴリズムの特性を手軽に確認したいエンジニアまで、事前知識なしですぐに活用できます。
    `,
    logo: "assets/EXML.svg",
    madeAt: 0,
    resume: {
      order: 1,
      headline: "Explore Machine Learning Interactive Learning Platform",
      bullets: [
        "Interactive web platform with ML guides, live predictions, and dynamic pipeline visualizations.",
        "Users upload data to get confidence scores, detailed analysis, and hands-on model demos.",
        "Covers classification, regression, supervised and unsupervised learning workflows."
      ],
      tech: ["18", "16", "30", "32", "33", "34", "35", "24", "26"]
    },
    skills: [
      "18", "16", "11", "12", "19", "30", "31", "32", "33", "34", "35", "26", "24"
    ]
  },
]

// Japanese labels for skill categories (used by the Experience tab and the rirekisho).
export const skillCategoryLabelsJa: Record<string, string> = {
  "AI Tools": "AI支援ツール",
  "Language": "語学力",
  "Frontend": "フロントエンド",
  "Backend": "バックエンド",
  "Programming Language": "プログラミング言語",
  "Database": "データベース",
  "Query Language": "クエリ言語",
  "Tools": "開発ツール",
  "Libraries": "ライブラリ",
  "Artificial Intelligence": "人工知能・機械学習",
}

// ---- Resume / rirekisho (generated PDFs). Everything above is reused automatically; only what is not stored above lives here. ----

// Saved with "Save choices for PDF" on the resume / rirekisho pages (dev server), or edit document-selection.json.
// Projects listed here appear on the resume and rirekisho; the portfolio itself always shows all of them.
export const documentProjectIds: string[] = selection.projects
export const documentEra: 'western' | 'wareki' = selection.era === 'wareki' ? 'wareki' : 'western'
export const documentShowPhoto: boolean = selection.photo

// The finished PDFs visitors can download on the live site. `npm run pdf` writes them to public/assets.
// Remove an entry to stop offering it (the rirekisho contains your date of birth and address).
export const publishedDocuments = [
  { id: 'resume', label: 'Download resume', labelJa: 'レジュメをダウンロード', file: 'Aman_Shaikh_resume_full_stack.pdf' },
  { id: 'rirekisho', label: 'Download rirekisho 履歴書', labelJa: '履歴書をダウンロード', file: 'Aman_Shaikh_rirekisho.pdf' },
]

// Resume-only content. Skill ids refer to skillsData; any entry that is not a skill id is printed as-is.
export const resumeConfig: ResumeConfig = {
  profile:
    "Full-stack software developer with strong experience designing and building scalable, high-performance web applications. Skilled in modern frontend and backend technologies with hands-on exposure to system design, automation, and clean architecture. Actively applies artificial intelligence and machine learning concepts to create intelligent, data-driven features and workflows. Passionate about writing efficient, maintainable code and delivering reliable, production-ready solutions.",
  languageSkillIds: ["1", "3", "4", "2"],
  skillGroups: [
    ["19", "17"],
    ["18", "20"],
    ["11", "12"],
    ["10", "29"],
    ["13", "14"],
    ["15", "16"],
    ["22", "25"],
    ["24", "23"],
    ["26", "41", "27", "28"],
    ["30", "32", "31"],
    ["33", "34"],
    ["36", "35"],
    ["Problem Solving", "Debugging"],
  ],
}

// Rirekisho-only content. Leave a field out (or empty) to print the cell blank for hand-writing.
// Dates use DD-Mon-YYYY, for example "15-Mar-2004".
export const rirekishoConfig: RirekishoConfig = {
  motivation:
    "フルスタックのソフトウェア開発者として、スケーラブルで高性能なWebアプリケーションの設計・開発に取り組んできました。モダンなフロントエンド／バックエンド技術に加え、システム設計、自動化、クリーンアーキテクチャの実務経験があります。人工知能・機械学習の知見を活かし、データ駆動型のインテリジェントな機能やワークフローの実現にも積極的に取り組んでいます。効率的で保守しやすいコードを書くこと、そして信頼性の高い本番品質のソリューションを届けることを大切にしています。",
  requests: "貴社の規定に従います。",
}

// Email, phone and the personal rirekisho fields (birth date, gender, postal code, addresses) are NOT stored here:
// this file is in a public repository. Put them in src/data/private.local.ts (git-ignored; see README).
// They are read only by the dev server and `npm run pdf`; the production site never includes them.
const localDetails = import.meta.env.DEV
  ? Object.values(import.meta.glob<{ privateDetails: PrivateDetails }>('./private.local.ts', { eager: true }))[0]?.privateDetails
  : undefined
export const privateDetails: PrivateDetails = localDetails ?? { email: '', phone: '' }
