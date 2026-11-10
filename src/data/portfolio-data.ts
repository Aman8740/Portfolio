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
  { id: "50", name: "MCP", category: "AI Tools", level: "Advanced" },
  { id: "5", name: "Decision Trees", category: "Artificial Intelligence", level: "Intermediate" },
  { id: "6", name: "Neural Networks", category: "Artificial Intelligence", level: "Intermediate" },
  { id: "7", name: "SVM", category: "Artificial Intelligence", level: "Intermediate" },
  { id: "8", name: "Linear Regression", category: "Artificial Intelligence", level: "Advanced" },
  { id: "9", name: "Logistic Regression", category: "Artificial Intelligence", level: "Advanced" },
  { id: "10", name: "React", category: "Frontend", level: "Advanced" },
  { id: "11", name: "HTML", category: "Frontend", level: "Expert" },
  { id: "12", name: "CSS", category: "Frontend", level: "Advanced" },
  { id: "53", name: "Tailwind CSS", category: "Frontend", level: "Intermediate" },
  { id: "13", name: "Node.js", category: "Backend", level: "Advanced" },
  { id: "14", name: "Express", category: "Backend", level: "Advanced" },
  { id: "15", name: "Django", category: "Backend", level: "Intermediate" },
  { id: "16", name: "Flask", category: "Backend", level: "Intermediate" },
  { id: "43", name: ".NET", category: "Backend", level: "Intermediate" },
  { id: "44", name: "FastAPI", category: "Backend", level: "Intermediate" },
  { id: "52", name: "WebSockets", category: "Backend", level: "Intermediate" },
  { id: "17", name: "TypeScript", category: "Programming Language", level: "Advanced" },
  { id: "18", name: "Python", category: "Programming Language", level: "Expert" },
  { id: "19", name: "JavaScript", category: "Programming Language", level: "Expert" },
  { id: "20", name: "Java", category: "Programming Language", level: "Intermediate" },
  { id: "42", name: "C#", category: "Programming Language", level: "Intermediate" },
  { id: "21", name: "SQL", category: "Query Language", level: "Advanced" },
  { id: "22", name: "MongoDB", category: "Database", level: "Advanced" },
  { id: "23", name: "MySQL", category: "Database", level: "Pre-Intermediate" },
  { id: "24", name: "PostgreSQL", category: "Database", level: "Intermediate" },
  { id: "25", name: "MSSQL", category: "Database", level: "Intermediate" },
  { id: "55", name: "SQLite", category: "Database", level: "Intermediate" },
  { id: "45", name: "Redis", category: "Database", level: "Pre-Intermediate" },
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
  { id: "51", name: "Puppeteer", category: "Libraries", level: "Intermediate" },
  { id: "57", name: "Recharts", category: "Libraries", level: "Intermediate" },
  { id: "36", name: "CodeceptJS", category: "Tools", level: "Pre-Advanced" },
  { id: "41", name: "Docker", category: "Tools", level: "Intermediate" },
  { id: "46", name: "Playwright", category: "Tools", level: "Intermediate" },
  { id: "49", name: "Vite", category: "Tools", level: "Intermediate" },
  { id: "56", name: "Vitest", category: "Tools", level: "Intermediate" },
  { id: "58", name: "xUnit", category: "Tools", level: "Intermediate" },
  { id: "48", name: "Jenkins", category: "Tools", level: "Pre-Intermediate" },
  { id: "54", name: "Nginx", category: "Tools", level: "Pre-Intermediate" },
  { id: "47", name: "AWS", category: "Tools", level: "Pre-Intermediate" },
  { id: "37", name: "KNN", category: "Artificial Intelligence", level: "Intermediate" },
]

export const projectsData: Project[] = [
  {
    id: "1",
    name: "Autopilot",
    slogan: "From Jira ticket to tested pull request, with people in control.",
    sloganJa: "Jiraチケットから、テスト済みのプルリクエストまで。最終判断は人間が行います。",
    logoComponent: AutopilotMark,
    description: `
## Overview

**Autopilot** is an AI software-delivery pipeline for the Quickflow product family. Someone describes a change or writes a Jira ticket, and Autopilot turns it into a tested, documented pull request. Claude Code agents do the engineering work, deterministic checks (not AI) verify every step, and people sign off at four points: the ticket, the requirements, the technical plan and the final pull request. Autopilot never merges its own work.

It runs as a TypeScript service in Docker across 13 repositories, and also powers the AI features of the company's internal knowledge base.

## How a ticket moves through it

- **Requirements and test design**: requirements with acceptance criteria and a test case for each. Test data is created in the run's own Quickflow environment through Quickflow MCP, and every test case is run once before any code exists, as a baseline.
- **Technical plan**: a detailed plan for the coding agent, plus a readable version with diagrams and wireframes for the reviewer. A reviewer can send work back up to three times, and the agent continues the same conversation.
- **Implementation**: one agent per affected repository, working tests-first. It is not done until tests pass, changed files build with zero warnings, lint is clean and the branch is pushed.
- **Verification**: build, full test suite, at least 80% branch coverage on every changed API handler, lint, and a migration check on both a new and an upgraded database. A QA agent then uses the real app in a browser through Playwright, recording screenshots and video, and agents can also run QuickTest, the regression tool in this portfolio. Results, with each case before and after the change, go into an Excel evidence report on the ticket.
- **Pull request**: one per repository, opened by deterministic code with no AI. Reviewers are picked from the people who last changed the touched lines. Review comments are fixed, re-verified and answered in each thread, for up to three rounds.
- **Closeout**: an Incident Report or Change Request in the company's Word template, depending on the ticket type, plus updated requirements and design documents. A knowledge-base article is published only when the change teaches something.

## Safety built into the code

Autopilot's own guardrail checks every tool call against nine role-specific profiles, instead of trusting the AI to follow its prompt. Agents can never merge, force-push, delete or rewrite branches, or change a ticket's status, and credentials are kept out of their environment. A session is stopped after five refused actions. The service runs as a non-root user on a read-only file system, outbound web traffic passes an allowlist proxy, and each run gets its own copy of the code, databases and Quickflow MCP instance.

## Keeping it running

- **Usage control**: usage comes from Pulse, the Claude usage monitor in this portfolio, with caps per day, run and stage. Work pauses before usage limits are reached and resumes below 90%. Opus writes technical plans, Sonnet handles most stages, Haiku does small follow-ups.
- **Outage-safe**: a Jira or Bitbucket outage neither stops nor fails a run. Work continues locally and the writes are sent, in order, when the service is back. A stopped run resumes in the same agent conversation.
- **Capacity**: 1 to 10 tickets in parallel, adjustable without a restart, in a queue that follows priority and Jira blocker links.
- **Multiple machines**: a small worker program lets spare Mac, Windows or Linux computers run whole stages, kept running by Pulse. Jobs are cryptographically signed, every remote action is still checked by the central guardrail, and a stage on a failed machine moves elsewhere with its conversation and unsaved work. It already runs on Mac workers; stages that need a full app copy on the worker are still being rolled out.

## Planning, chat and live control

- **Planner**: a shared, plain-language planning chat for non-technical teammates. It breaks a request into sprints, epics, stories and tasks, checks them against live Jira data, and creates them only after an authorised approver signs off.
- **Chat**: a read-only assistant answers questions from knowledge-base posts, documents and product code, with citations.
- **Live console**: each run can be followed live in the knowledge base, including stage activity, spend, the QA browser video and the test report. People can stop or resume runs, reorder the queue and change capacity there, and Microsoft Teams cards keep the team updated.

## Scale and how it was built

From August to November 2026: over 520 commits in more than 130 merged pull requests, about 125,000 lines of source code and about 7,100 automated tests. I directed the project, setting its scope, priorities and acceptance rules and approving its real-world actions. Claude Code agents designed and wrote the code.
    `,
    descriptionJa: `
## 概要

**Autopilot**は、Quickflow製品群のためのAIソフトウェアデリバリーパイプラインです。変更内容を伝えるか、Jiraチケットを書くだけで、テストとドキュメントを備えたプルリクエストに仕上げます。開発作業はClaude Codeのエージェントが担い、各工程の結果はAIではなく決定的なプログラムで検証します。人間が承認するのは「チケット」「要件」「技術計画」「最終プルリクエスト」の4か所で、Autopilotが自らの変更をマージすることはありません。

Docker上で動作するTypeScriptサービスで、13のリポジトリを対象とし、社内ナレッジベースのAI機能も担っています。

## チケットの流れ

- **要件・テスト設計**: 受け入れ基準付きの要件と、要件ごとのテストケースを作成します。テストデータはQuickflow MCPを通じて実行ごとに用意される専用環境に投入し、コードを書く前に全テストケースを一度実行してベースラインを取ります。
- **技術計画**: 実装エージェント向けの詳細な計画と、図やワイヤーフレームを含むレビュー担当者向けの計画を作成します。差し戻しは最大3回まで可能で、エージェントは同じ会話のまま修正します。
- **実装**: リポジトリごとに1つのエージェントがテストファーストで実装します。テスト合格、変更ファイルのビルド警告ゼロ、Lint合格、プッシュ完了がそろうまで完了になりません。
- **検証**: ビルド、全テスト、変更したAPIハンドラーごとの分岐カバレッジ80%以上、Lint、そして新規作成とアップグレードの両方でのデータベースマイグレーション確認を行います。続いてQA役のエージェントがPlaywrightで実際のアプリを操作し、スクリーンショットと動画を記録します。本ポートフォリオで紹介している回帰テストツールQuickTestも利用できます。結果は変更前後の比較を含むExcelの証跡レポートとしてチケットに添付します。
- **プルリクエスト**: リポジトリごとに1件ずつ、AIを使わずプログラムで作成します。レビュアーは変更行の履歴から選びます。レビューコメントは修正・再検証のうえ各スレッドに返信します（最大3ラウンド）。
- **クローズ**: チケットの種別に応じて、インシデント報告書または変更要求書を社内のWordテンプレートで作成し、要件書と設計書を更新します。ナレッジ記事は学びがある場合に限って公開します。

## プログラムで担保する安全性

AIのツール呼び出しはすべて、役割別の9種類のプロファイルを持つ独自のガードレールが判定します。プロンプトの指示に頼る方式ではありません。マージ、強制プッシュ、ブランチの削除や書き換え、チケットのステータス変更はいずれも実行できず、認証情報はセッションの環境に渡しません。5回拒否されたセッションは停止します。サービスは非rootユーザーとして読み取り専用のファイルシステム上で動作し、外部への通信は許可リスト方式のプロキシを経由します。実行ごとに専用のコード、データベース、Quickflow MCPを割り当てます。

## 止まらない運用

- **利用量の管理**: 本ポートフォリオで紹介しているClaude使用量モニター「Pulse」から利用量を取得し、1日・1実行・1工程ごとに上限を設けています。利用上限に達する前に自動で一時停止し、利用率が90%を下回ると再開します。技術計画はOpus、ほとんどの工程はSonnet、小さな補助作業はHaikuが担当します。
- **障害への強さ**: JiraやBitbucketに障害が発生しても、実行は止まらず失敗にもなりません。作業はローカルで続け、書き込みはサービス復旧後に順番どおり送信します。停止した実行は同じ会話から再開します。
- **並列数**: 1〜10件のチケットを並列で処理でき、再起動せずに変更できます。キューは優先度とJiraのブロッカー関係に従います。
- **複数マシンでの実行**: 小さなワーカープログラムを入れると、Mac・Windows・Linuxの空いているマシンで工程を丸ごと実行でき、その稼働はPulseが管理します。ジョブは暗号署名され、リモートでの操作もすべて中央のガードレールが判定します。マシンに障害が起きた場合は、会話と未保存の作業ごと別のマシンへ移ります。すでにMacのワーカーで稼働しており、アプリ一式をワーカー上で動かす工程は順次展開中です。

## 計画・チャット・ライブ管理

- **プランナー**: 技術者でなくても使える、共同編集型の計画チャットです。要望をスプリント・エピック・ストーリー・タスクに分解してJiraの最新データと照合し、権限を持つ承認者が承認した後にのみ作成します。
- **チャット**: 読み取り専用のアシスタントが、ナレッジ記事・文書・製品コードをもとに出典付きで回答します。
- **ライブコンソール**: 各実行の進行状況、利用量、QAの操作動画、テストレポートをナレッジベース上でリアルタイムに確認できます。実行の停止・再開、キューの並べ替え、並列数の変更もここで行え、Microsoft Teamsへの通知でチームに最新状況を共有します。

## 規模と開発体制

2026年8月〜11月で、130件以上のマージ済みプルリクエストと520件以上のコミット、約12.5万行のソースコード、約7,100件の自動テスト。私はプロジェクトを指揮し、開発範囲・優先順位・受け入れ基準を決め、実環境での操作を承認しました。設計とコードはClaude Codeのエージェントが担当しました。
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
      headline: "AI Delivery Pipeline from Jira Ticket to Tested Pull Request",
      bullets: [
        "Directed a TypeScript service on the Claude Agent SDK that turns Jira tickets into tested, documented pull requests across 13 repositories, with four human sign-offs and no self-merging.",
        "Wrapped AI agents in deterministic gates: zero build warnings, full test suite, 80% branch coverage on changed handlers, fresh-and-upgrade migration checks, and AI-driven Playwright QA with video evidence.",
        "Enforced safety in code with nine guardrail profiles on every tool call, allowlist-only outbound traffic, per-day, per-run and per-stage usage caps, and automatic pauses before usage limits.",
        "Built for up to 10 parallel tickets with live capacity control, outage-safe write queues and signed jobs on worker machines, backed by about 7,100 automated tests and 520+ commits."
      ],
      tech: ["17", "13", "14", "55", "41", "38", "50", "46", "56", "26"]
    },
    skills: ["17", "13", "14", "21", "55", "25", "24", "26", "41", "38", "50", "46", "56"]
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
      "2", "13", "17", "19", "26", "38", "50"
    ]
  },
  {
    id: "3",
    name: "Quickflow",
    slogan: "No-code regulated workflows for pharma, with AI built in.",
    sloganJa: "製薬業界のGxP業務を、ノーコードとAIでデジタル化するプラットフォーム。",
    description: `
## Overview

**Quickflow** is a no-code platform for regulated pharmaceutical operations: quality-control labs, manufacturing sites and quality teams. Teams design their own forms, approval workflows and master data, then run them as electronic records such as logbooks, method-validation worksheets, controlled documents and printed labels. Every change is audit-trailed with who made it and when, controlled changes require a reason, and key steps are e-signed. The platform is designed around 21 CFR Part 11 and GxP expectations.

It is built by a team of about ten developers and has a .NET 9 backend with 64 API controllers and 377 stored procedures, a React web client of about 310,000 lines, Python AI services, and offline, mobile and Windows-installed clients. I am one of the core developers and work across the whole stack. The parts I built or lead are noted below.

## Building regulated apps without code

- **Form designer** — 48 drag-and-drop control types, from tables and calculations to e-signature blocks, QR codes, instrument readings and embedded Word/Excel documents. Templates have draft and published versions, and every design change is audit-trailed with a diff.
- **Form runtime** — forms are issued on demand or as recurring logs, then filled, reviewed, e-signed, and unlocked, withdrawn or archived when needed. I am the main contributor to the runtime engine, including repeating tables that gain rows and columns while a form is open, with calculations that survive save and reload.
- **Workflows and app packages** — multi-level approvals with conditional routing and send-back. Templates, masters and other modules are bundled into packages that are reviewed before deployment to the next environment; I wrote the first version of this feature.
- **Compliance controls** — e-signatures re-authenticate by password or face, key audit trails are append-only in the database, and PDFs carry certificate-based digital signatures. I set up the validation document set (requirements, design specification, test cases), now 286 user and 325 functional requirements, with AI skills that keep it current.
- **Team-built modules** — browser-based Word editing with version history, about 90 built-in reports, and RPA bots that carry out approved requests on lab instrument PCs and record screenshots as evidence.

## AI inside the product

- **AI Rule Editor (I lead this)** — users describe form logic in a chat. A planning agent splits the request into rule units, and a developer agent writes each rule with test cases. Every rule must pass a deterministic static check, and each case can then run in a headless browser against the real form engine, returning before/after evidence images. A person keeps or discards every change. It runs on OpenAI or on Claude through Amazon Bedrock, and QuickTest can rerun its stored test cases.
- **Rule languages** — I built a chainable formula language, a Highcharts-based charting language and a query builder. The query builder compiles a structured query tree into parameterised SQL on the server, so new rules no longer need raw SQL.
- **AI file and photo reading** — I built the feature that lets rules send uploaded PDFs, photos, Word or Excel files to Claude. Results pass 27 kinds of deterministic checks, users confirm low-confidence values before they are saved, and every AI run is logged with its cost.
- **Team-built assistants** — voice data entry, face login with liveness checks, natural-language-to-SQL dashboards, document Q&A, and paper-form-to-template conversion.

## Method validation

Method Validation Studio, a team module, generates analytical method-validation protocols and reports. In the protocol flow the AI reads source documents and drafts wording but never produces a number: weights and dilutions come from an exact-fraction engine, glassware is chosen only from what the lab owns, and every result is re-checked independently. On the Related Substances template, the team measured generation as about four times faster once the arithmetic moved out of the model. I built the Related Substances report generator, which fills every report section from approved worksheet data, and sped up the deterministic path.

## Platform engineering

- **Backend and security** — .NET 9 with Clean Architecture and CQRS, a YARP-based gateway in front of 11 services, Redis sessions and a database schema per app and site. Security includes two-factor sign-in, Okta SSO, Active Directory, an OAuth2 server and a credential vault for bots.
- **Connectors** — 16 protocol handlers, from REST and FTP to plant-floor protocols such as OPC UA, Modbus, BACnet, MQTT and serial lab balances, plus SIEM export.
- **Database releases** — I rebuilt the startup release engine so every environment upgrades itself safely: one EF Core baseline, changed procedures and views detected by hash, releases applied under a lock, and each tenant's schema kept in sync.
- **Secure printing** — I built a Windows print agent and its server-side integration. Label jobs are Ed25519-signed, AES-256-GCM-encrypted and single-use; PDFs arrive through a signed one-time link; and a print is recorded only after the printer accepts it. It ships with 402 tests and an MSI installer.
- **Delivery** — Jenkins pipelines with Semgrep, Trivy and Gitleaks scans, deployment to AWS ECS with automatic rollback, and about 5,600 backend unit tests plus 149 database tests.

## Quickflow MCP

**Quickflow MCP**, which I built, gives AI assistants access to the platform through the same API gateway as every user. Its 113 tools cover forms, templates, workflows, masters, documents, printing, dashboards, connectors and administration, reaching about 280 API endpoints.

- **Full access** — all 113 tools, including writes.
- **Read-only** — only the 67 read tools are registered, so write tools are absent rather than blocked, and the HTTP client refuses write requests as a second safeguard.

Autopilot starts a separate instance for every run, pointed at that run's isolated environment, to create test data and verify changes end to end. I also built the team's Claude Code setup (safety hooks and many of the shared skills) and MCP servers for Jira, Bitbucket and document templates that Autopilot relies on.
    `,
    descriptionJa: `
## 概要

**Quickflow**は、製薬企業の品質管理ラボ、製造現場、品質保証部門向けのノーコード業務プラットフォームです。利用者はプログラミングなしでフォーム、承認ワークフロー、マスタデータを設計し、電子ログブック、分析法バリデーションのワークシート、管理文書、ラベル印刷などの電子記録として運用できます。すべての変更は実施者と日時とともに監査証跡に残り、管理対象の変更には理由の入力、重要な工程では電子署名が必要です。21 CFR Part 11とGxPの要件に沿って設計しています。

約10名のチームで開発しており、主な構成は次のとおりです。

- .NET 9バックエンド（APIコントローラー64、ストアドプロシージャ377）
- 約31万行のReact Webクライアント
- PythonのAIサービス群
- オフライン対応PWA、モバイルアプリ、Windows向けインストーラー

私は中心メンバーの一人として、フロントエンドからバックエンドまで幅広く開発しています。以下では、私が開発・主導した部分を明記しています。

## ノーコードで規制対応アプリを構築

- **フォームデザイナー**: 表、計算、電子署名欄、QRコード、機器データ、Word/Excel文書など、48種類のコントロールをドラッグ＆ドロップで配置できます。テンプレートは下書きと公開の版で管理し、設計変更はすべて差分付きで監査証跡に残ります。
- **フォームの実行**: フォームは随時または定期ログとして発行し、入力、レビュー、電子署名を経て、必要に応じてロック解除、取り下げ、アーカイブを行います。実行エンジンは私が主に開発しており、入力中に行や列を追加できる繰り返しテーブルや、保存・再読み込み後も保たれるテーブル単位の計算を実装しました。
- **ワークフローとアプリパッケージ**: 条件分岐と差し戻しに対応した多段階承認を設定できます。テンプレートやマスタなどをパッケージにまとめ、レビューを経て次の環境へ展開する機能は、最初の版を私が開発しました。
- **コンプライアンス**: 電子署名ではパスワードまたは顔認証で本人を再確認します。主要な監査証跡はデータベース側で追記専用とし、PDFには証明書ベースのデジタル署名を付与します。ユーザー要求仕様（URS）、機能仕様（FRS）、設計仕様、テストケースからなるバリデーション文書は私が整備したもので、現在はURS 286項目、FRS 325項目です。変更のたびに文書を最新に保つAIスキルも用意しました。
- **チームで開発したモジュール**: 版管理付きのブラウザ上のWord編集、約90種類の標準レポート、承認済みの依頼をラボ機器のPC上で実行し、スクリーンショットを証跡として残すRPAボット。

## 製品に組み込まれたAI

- **AIルールエディター（主導）**: 利用者がフォームの動きをチャットで説明すると、計画エージェントが依頼をルール単位に分け、開発エージェントがルールとテストケースを作成します。各ルールは決定論的な静的チェックを通過する必要があり、その後、ヘッドレスブラウザのテスターで各ケースを実際のフォームエンジン上で実行し、変更前後の証跡画像を確認できます。変更を採用するか破棄するかは、必ず人が判断します。OpenAIまたはAmazon Bedrock上のClaudeで動作し、保存したテストケースはQuickTestから再実行できます。
- **ルール記述言語（担当）**: チェーン形式の数式言語、Highchartsを使ったグラフ言語、クエリビルダーを開発しました。クエリビルダーでは、クエリを構造化ツリーとして記述し、サーバー側でパラメータ化SQLに変換するため、新しいルールに生のSQLを書く必要はありません。
- **AIによるファイル・写真の読み取り（担当）**: アップロードされたPDF、写真、Word、ExcelをClaudeで解析し、27種類の決定論的なチェックで検証します。信頼度の低い値は利用者が確認してから記録に反映され、AIの実行ごとにコストも記録されます。
- **チームで開発したAI機能**: 音声によるデータ入力、なりすまし検知付きの顔認証ログイン、自然言語からSQLを生成するダッシュボード、文書Q&A、紙のフォームからのテンプレート生成。

## 分析法バリデーション

Method Validation Studioは、分析法バリデーションのプロトコルと報告書を作成するチーム開発のモジュールです。プロトコル作成では、AIは原文を読んで文章を作成しますが、数値は一切出しません。秤量値や希釈は正確な分数演算を行う計算エンジンが求め、器具はラボが実際に持つものだけから選び、すべての結果を別の仕組みで検算します。類縁物質（Related Substances）テンプレートでのチームの計測では、計算をAIから切り離したことで作成時間が約4分の1になりました。私は、承認済みのワークシートデータから報告書の全セクションを作成する類縁物質報告書の生成機能を開発し、計算処理の高速化にも取り組みました。

## プラットフォーム基盤

- **バックエンドとセキュリティ**: .NET 9のクリーンアーキテクチャとCQRS、11のサービスの前に置いたYARPベースのAPIゲートウェイ、Redisによるセッション管理、アプリと拠点ごとのデータベーススキーマで構成しています。二要素認証、Okta SSO、Active Directory、OAuth2サーバー、ボット用の認証情報保管庫も備えています。
- **外部連携**: REST、FTPから、OPC UA、Modbus、BACnet、MQTT、シリアル接続の天秤といった製造現場のプロトコルまで16種類に対応し、SIEMへの転送もできます。
- **DBリリース（担当）**: 起動時に動くリリース処理を作り直し、どの環境も安全に自動更新できるようにしました。EF Coreのベースライン1つを起点に、変更されたプロシージャやビューをハッシュで検出し、ロックをかけて適用し、テナントごとのスキーマを同期します。
- **セキュア印刷（担当）**: Windows用の印刷エージェントとサーバー側の連携を開発しました。ラベル印刷のジョブはEd25519で署名し、AES-256-GCMで暗号化した1回限りのものです。PDFは署名付きの1回限りのリンクで受け取り、印刷記録はプリンターがジョブを受け付けた後にだけ残ります。テスト402件とMSIインストーラーも用意しています。
- **デリバリー**: Semgrep、Trivy、Gitleaksのスキャンを含むJenkinsパイプライン、自動ロールバック付きのAWS ECSへのデプロイを整備しています。バックエンドには約5,600件のユニットテストと149件のDBテストがあります。

## Quickflow MCP

**Quickflow MCP**は、AIアシスタントがQuickflowを操作するための連携サーバーで、私が開発しました。一般の利用者と同じAPIゲートウェイを通り、フォーム、テンプレート、ワークフロー、マスタ、文書、印刷、ダッシュボード、外部連携、管理機能をカバーする113のツールで、約280のAPIエンドポイントを扱います。

- **フルアクセス**: 書き込みを含む113ツールすべてを使えます。
- **読み取り専用**: 読み取り系の67ツールだけを登録するため、書き込み系のツールはブロックされるのではなく、そもそも存在しません。さらにHTTPクライアント側でも書き込み要求を拒否します。

Autopilotは実行のたびに、その実行専用の環境に向けた別のインスタンスを起動し、テストデータの作成やエンドツーエンドの検証に使います。あわせて、チームのClaude Code環境（安全用のフックと共有スキルの多く）と、Autopilotが利用するJira、Bitbucket、文書テンプレート用のMCPサーバーも開発しました。
    `,
    logo: "assets/Quickflow.png",
    madeAt: 1,
    resume: {
      order: 2,
      headline: "No-Code GxP Platform for Pharma with AI Rule Authoring",
      bullets: [
        "Core developer on a .NET 9, React and Python no-code platform for 21 CFR Part 11 pharma records; main contributor to its form runtime engine and author of its validation set (286 URS, 325 FRS).",
        "Lead the AI Rule Editor, where planner and developer agents turn plain-language requests into form rules, gated by a deterministic static check and headless-browser tests that capture before/after evidence images.",
        "Built a Windows print agent and its server integration with Ed25519-signed, AES-256-GCM-encrypted single-use jobs, recording each print only after printer acceptance, shipped with 402 tests and an MSI installer.",
        "Built Quickflow MCP, 113 tools that give AI agents platform access through the API gateway, with a read-only mode that never registers the 46 write tools; Autopilot uses it per run."
      ],
      tech: ["42", "43", "10", "19", "18", "25", "45", "46", "38", "50", "47", "41"]
    },
    skills: ["10", "11", "12", "19", "17", "18", "13", "16", "21", "25", "24", "26", "27", "41", "38", "42", "43", "44", "45", "46", "47", "48", "49", "50"]
  },
  {
    id: "5",
    name: "QuickTest",
    slogan: "End-to-end regression testing for Quickflow, with evidence for every step.",
    sloganJa: "Quickflowの業務フローを実ブラウザで自動検証し、全ステップの証跡を残す回帰テスト基盤。",
    description: `
## Overview

**QuickTest** is a self-hosted platform that runs automated end-to-end regression tests against **Quickflow**, the pharma workflow platform. A tester picks a test environment, a site, an app and a form, assigns a test user account to each approval level, and builds the sequence of actions step by step. Before anything runs, a flowchart view shows which level the form will be at after each action, conditional jumps included. QuickTest then opens a real Chromium browser, signs in as each test user in turn and takes the form through its full approval chain the way people would. In a regulated industry a pass on its own is not enough, so every run also leaves a reviewable record of what was checked and what happened.

Version 4.0 is a full rebuild that added user accounts and roles, a database of its own and API-only access to Quickflow data.

## Four kinds of test

- **Workflow**: starts (issues) a form, then saves, submits, sends it back to a chosen level, unlocks or withdraws it as the assigned users, conditional branches and tabbed forms included. Each user fills in the fields open at their level, and the test checks the audit trail and the electronic-signature records.
- **Master data** (reference lists such as products or equipment): creates a record, updates it a set number of times, runs an optional review cycle, and deactivates and reactivates it.
- **Create master**: designs a new master-data table that uses all eight supported field types, then loads it, updates it and switches each field off and on again.
- **Rules**: runs a form's stored rule test cases through Quickflow's rule-testing service, with no browser, and reports every check. A rule with no test cases is reported as skipped, never as passed.

Actions such as save, submit, unlock or deactivate pass only if the application shows the exact expected confirmation message, and a form test that fills none of its fillable fields fails. Every failed check is reported as one of 66 named error types. A test can mark specific known issues as accepted, so one known defect does not fail every run and hide new problems.

## Evidence from every run

Each run becomes a report of numbered test cases. For browser tests, every case and step records:

- the **expected result** and the **actual result**, in plain language
- a **screenshot** of the step, plus another at the moment of any failure
- a **screen recording** of every attempt, which can be watched live while the test is still running
- an on-page banner with the current approval level and status, so the recording explains itself

Rule tests attach the rule tester's own evidence image to each case instead. Reports export to PDF with separate Expected and Actual columns, and large reports are built in parts and cached. Each run also gets a plain-language log that matches the outcome against 13 known causes in six groups and says what happened, what it means and what to try next. Passwords and tokens are removed from the log.

## Built for daily team use

- **Parallel runs without collisions**: each test runs in its own process. Quickflow keeps only one active session per user, so QuickTest blocks two runs that would use the same test user on the same environment, and every connected tester sees the block at once.
- **Crash recovery**: a running test sends regular heartbeats. If a run goes silent or the server restarts, the run is marked as interrupted and can resume as a new attempt from the first approval level or master record that did not finish. Stop ends a run cleanly and frees its users.
- **Credentials checked first**: every test account's sign-in is verified before a run starts, so a wrong password fails within seconds, not halfway through a run.
- **Live team view**: progress, results, a team activity feed and chat reach every connected user in real time over WebSockets, with browser notifications.
- **Accounts and environments**: admins manage accounts (admin, developer and tester roles) and the Quickflow environments, and can check each environment with a test sign-in. New accounts must change their password at first sign-in.

## Architecture

The interface is React 19 with TypeScript, Tailwind CSS and shadcn/ui. It was redesigned in 2026 on its own design system, with light and dark themes, and works down to phone width. The backend runs Node.js and Express on MongoDB. It starts each test as a separate CodeceptJS process that drives Playwright, and Puppeteer produces the PDFs. QuickTest reads Quickflow data only through the product's API, with encrypted sign-in, and never touches its database. The system runs as a Docker Compose stack with an HTTPS reverse proxy and memory and CPU limits for each service. More than 200 automated backend tests cover it, including crash-and-resume runs of the real test scripts.

## AI integration

- **Realistic test data**: a language model is asked for values that fit each field's options, limits and existing values. If the model is unavailable, returns nothing or picks an option that does not exist, a built-in fallback supplies a value, so no run depends on the model.
- **Readable by agents**: a filterable logs API lets AI tools read run results and failure explanations.
- **QuickTest MCP**: an MCP server with 8 tools lets the AI agents in **Autopilot** discover what can be tested, create test setups, start and stop runs, and collect evidence and logs. Agents can also ask whether a script's coverage is current. Each script is hash-checked, so a script that changed after its coverage was recorded counts only as partial coverage. Autopilot points QuickTest at each ticket's freshly built Quickflow instance, so every change gets a scripted regression run next to the AI-driven UI tests. It uses a QuickTest instance separate from the one human testers use. The integration only adds a few opt-in endpoints and leaves QuickTest unchanged for its human users. If QuickTest is down, Autopilot notes this on the ticket and carries on.
    `,
    descriptionJa: `
## 概要

**QuickTest**は、製薬向け業務プラットフォーム**Quickflow**を対象にした、自社運用型のE2E回帰テスト基盤です。テスト担当者は画面上でテスト環境・サイト・アプリ・フォームを選び、承認レベルごとにテスト用のQuickflowユーザーを割り当てて、実行する操作を一つずつ組み立てます。実行前にはフローチャート表示で、各操作の後にフォームがどの承認レベルにあるか(条件分岐によるジャンプを含む)を確認できます。QuickTestは実際のChromiumブラウザを起動し、各テストユーザーで順番にログインしながら、承認フローの最後までフォームを処理します。規制業界では「合格した」という結果だけでは不十分なため、何を確認し何が起きたかを、すべての実行で検証可能な記録として残します。

現行の4.0は全面的に作り直した版で、ユーザーアカウントと権限管理、専用のデータベース、API経由のみでのQuickflowデータ取得を新たに備えています。

## 4種類のテスト

- **ワークフロー**: フォームを発行し、割り当てたユーザーとして保存・提出・指定レベルへの差し戻し・ロック解除・取り下げを実行します。条件分岐やタブ形式のフォームにも対応しています。各ユーザーが自分のレベルで入力可能な項目を入力し、監査証跡と電子署名の記録を照合します。
- **マスタデータ**(製品や設備などの基準データ): レコードを作成し、指定回数の更新、任意のレビューサイクル、無効化と再有効化を検証します。
- **マスタ作成**: 対応する8種類すべてのフィールド型を使ったマスタを新規に設計し、読み込み・更新、各項目の無効化と再有効化まで確認します。
- **ルール**: フォームに登録されたルールのテストケースを、Quickflowのルール検証サービス経由でブラウザなしに実行します。テストケースのないルールは「合格」ではなく「スキップ」として報告します。

保存・提出・ロック解除・無効化などの操作は、アプリが表示する確認メッセージが想定どおりの文言と完全に一致した場合にのみ合格とし、入力可能な項目を1つも入力しなかったフォームテストは失敗扱いにします。失敗した確認はすべて66種類の名前付きエラーのいずれかとして報告されます。既知の不具合はテストごとに「許容済み」として指定できるため、1つの既知の問題で毎回失敗して新しい問題が埋もれることを防げます。

## 実行ごとの検証エビデンス

各実行は番号付きテストケースのレポートとして保存されます。ブラウザを使うテストでは、すべてのケースとステップに次の内容が記録されます。

- 平易な言葉で書かれた**期待結果**と**実際の結果**
- ステップごとの**スクリーンショット**と、失敗した瞬間の画面
- 試行ごとの**画面録画**(実行中にライブで視聴できます)
- 現在の承認レベルと状態を示す画面上のバナー(録画にもそのまま映ります)

ルールテストでは、代わりにルール検証サービスが返すエビデンス画像を各ケースに添付します。レポートは期待結果と実際の結果を別々の列にしてPDFで出力でき、大規模なレポートは分割して生成したうえでキャッシュします。実行ログは結果を13種類の既知の原因(6分類)と照合し、何が起きたか、それが何を意味するか、次に何を試すべきかを平易に説明します。パスワードやトークンはログから除去されます。

## チームでの日常利用を支える仕組み

- **衝突しない並列実行**: 各テストはそれぞれ独立したプロセスで動作します。Quickflowは1ユーザーにつき有効なセッションを1つしか保持しないため、同じ環境で同じテストユーザーを使う実行は自動でブロックし、接続中の全員にすぐ通知します。
- **クラッシュからの復旧**: 実行中のテストは定期的にハートビートを送ります。応答が途絶えたりサーバーが再起動したりすると「中断」として扱い、未完了の最初の承認レベル(またはマスタ)から新しい試行として再開できます。停止操作で実行を安全に終了し、使用中のユーザーも解放します。
- **事前の認証確認**: 実行前に全テストアカウントのログインを検証するため、パスワードの誤りは途中ではなく数秒で判明します。
- **リアルタイム共有**: 進捗・結果・チームのアクティビティとチャットはWebSocketでリアルタイムに全員へ配信され、ブラウザ通知も表示されます。
- **アカウントと環境の管理**: 管理者はアカウント(管理者・開発者・テスターの3ロール)とQuickflow環境を管理し、各環境はテストログインで接続を確認できます。新規アカウントは初回ログイン時にパスワード変更が必須です。

## アーキテクチャ

画面はReact 19・TypeScript・Tailwind CSS・shadcn/uiで構築しています。2026年に独自のデザインシステムで全画面を刷新し、ライト/ダークテーマとスマートフォン幅に対応しました。バックエンドはNode.js・ExpressとMongoDBで構成し、テストごとにPlaywrightを操作するCodeceptJSプロセスを起動します。PDFはPuppeteerで生成します。Quickflowのデータはログインを暗号化した製品APIからのみ取得し、データベースには一切接続しません。システム全体はHTTPSリバースプロキシを含むDocker Composeで稼働し、サービスごとにメモリとCPUの上限を設定しています。実際のテストスクリプトを使った中断・再開の検証を含め、200件以上のバックエンド自動テストがあります。

## AI連携

- **現実的なテストデータ**: 各項目の選択肢・上下限・既存値に合った入力値を言語モデルに生成させます。モデルが使えない、値を返さない、存在しない選択肢を返すといった場合は組み込みの代替値を使うため、AIに依存せず実行を続けられます。
- **エージェントが読めるログ**: 絞り込み可能なログAPIで、AIツールが実行結果や失敗の説明を取得できます。
- **QuickTest MCP**: 8つのツールを持つMCPサーバーにより、**Autopilot**のAIエージェントがテスト可能な対象の探索、テスト設定の作成、実行の開始・停止、エビデンスとログの取得を行えます。スクリプトのカバレッジが最新かどうかも確認できます。各スクリプトはハッシュで照合され、カバレッジの記録後に変更されたスクリプトは「部分的」としか報告されません。Autopilotはチケットごとに新しくビルドしたQuickflow環境にQuickTestを向けるため、すべての変更に対して、AIによるUIテストに加えてスクリプト化された回帰テストが実行されます。QuickTest環境は人間のテスター用とは分けています。連携はオプトイン式のエンドポイントを追加するだけで、テスターが使うQuickTestには一切手を加えません。QuickTestが停止している場合も、Autopilotはその旨をチケットに記録して処理を続行します。
    `,
    logo: "assets/QuickTest.jpeg",
    madeAt: 1,
    resume: {
      order: 3,
      headline: "End-to-End Regression Testing Platform for Quickflow",
      bullets: [
        "Built an end-to-end regression platform for Quickflow that drives real Chromium through CodeceptJS and Playwright, signing in as test users at each approval level and checking audit trails.",
        "Records expected and actual results, screenshots and live-viewable video for every step, reports failures as 66 typed errors, and exports cached PDF reports rendered with Puppeteer.",
        "Runs tests in parallel as isolated processes with heartbeat-based crash recovery and resume, and blocks runs that would share a Quickflow user on the same environment.",
        "Built an 8-tool MCP server so Autopilot's AI agents run hash-checked regressions against each change's fresh build, and generates realistic test data with an LLM plus fallback."
      ],
      tech: ["10", "17", "13", "14", "22", "36", "46", "51", "52", "41", "50"]
    },
    skills: ["10", "17", "19", "11", "12", "13", "14", "22", "36", "29", "41", "26", "38", "46", "51", "52", "53", "50", "54", "49"]
  },
  {
    id: "4",
    name: "Pulse",
    slogan: "See where your team's Claude Code usage stands, and when it will hit the limit.",
    sloganJa: "チームのClaude Code利用状況を可視化し、上限に達する時期を予測。",
    description: `
## Overview

**Pulse** is a usage-monitoring, forecasting and cost-tracking system for a team that builds software with Claude Code. A small program on each developer's computer measures Claude Code usage locally and reports it to a central server. The dashboard shows where each account stands against its 5-hour and weekly limits, predicts when usage will reach them, and turns usage into a cost per person and per task. Pulse also enrols and supervises the machines that run Autopilot jobs. It was built in about one month, in October and November 2026.

## What the team sees

- **Usage by computer and person** — tokens and cost for the last 5 hours, today and the last 7 days, broken down by account, model, app, day and task.
- **Plan limits** — each account's 5-hour and weekly limit usage is refreshed automatically, more often as it gets close to the limit.
- **Cost per person and per task** — the plan cost behind each rise in weekly usage is split across the work done in that period, weighted by standard API prices. A finished week's prices are locked, and a cost self-check runs after every deploy.
- **Tasks board** — each Claude response is linked to the Jira ticket named in the session title, git branch or folder. A Kanban board grouped by ticket status shows what each ticket cost, who worked on it and which models were used, and suggests a model strategy for each task, module and area.
- **Monthly budgets** — a warning at 80%; when a budget runs out, Claude Code pauses on that computer until the budget resets or an admin approves a raise.

## Forecasting and planning

- **Run-out forecast** — a statistical simulation built on each account's typical usage for every hour of the week gives a likely run-out window and a simple verdict on whether the account will run out before it resets. Every forecast is logged and later graded for timing error, misses and false alarms, and a backtest replays past weeks to check accuracy.
- **What-if board and balancing** — try rebalancing work across the team's accounts, see when each account would run out, and save the scenario as a shareable link. An optimizer can suggest up to three moves so no account runs out early, with a 24-hour undo.
- **Model recommender** — a small text classifier reviews past requests and shows, on the Tasks page, the cheapest model (Haiku, Sonnet or Opus) that would have been enough. A weekly routine samples new requests for labelling; the model retrains on new labels and is accepted only if its accuracy on a fixed reference set holds up.

## On every computer

One self-contained .NET 10 executable runs on Windows, macOS and Linux as the person's background client, as a system service and as its own installer.

- **Personal usage page** — the client serves each person a private page on their own computer with their usage and budget, budget-raise requests (with a desktop notification when answered), conversation sharing and update checks.
- **Conversation transfer** — send a Claude Code conversation to a teammate's computer, or ask for one of theirs, together with the work files changed in git, ready to continue. Files that may contain secrets are held back for review, and each person controls sharing with their own switches.
- **Sessions that talk across computers** — Pulse extends Claude Code's own agent-listing and messaging tools through hooks, so sessions on different computers can find and message each other through the server. Off by default, rate-limited, and audited without storing message text.
- **Signed automatic updates** — every build is digitally signed. Computers check every 30 minutes, and a build that fails to start is rolled back automatically.

## Autopilot worker machines

Pulse also manages the machines that run Autopilot, the team's AI delivery pipeline. An admin enrols a machine from the dashboard. Pulse then delivers a signed per-machine configuration (the machine's access token is stored encrypted on the server, and the files on the machine are readable only by their owner) and supervises the worker, restarting it if it stops. On macOS and Linux, a new worker build takes over only after the running job finishes. When Autopilot needs capacity, Pulse offers only machines with spare processor, memory and disk headroom, a usable Claude account and the required tools in place.

## Engineering

- **Stack** — ASP.NET Core on .NET 10 with no third-party runtime packages, a custom WebSocket protocol between client and server, and React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui and Recharts for the dashboard and the personal page, each embedded in its single-file program.
- **Techniques** — a 500-path Monte Carlo simulation with a P10/P50/P90 range; a TF-IDF and logistic-regression classifier trained in plain Python, with scoring mirrored in C#; ECDSA-signed updates.
- **Security** — PINs and the admin password hashed with PBKDF2, with lockouts; CSRF protection; AES-GCM encryption for worker secrets; an audit log that never records tokens.
- **Performance** — in a synthetic benchmark with 30 computers and 60 days of history, the first forecast request dropped from 1.1–2.3 s to about 105 ms, and peak server memory from about 400–450 MB to about 260 MB (partly from correcting a garbage-collector setting).
- **Testing** — 199 xUnit test methods, over 170 Vitest tests and a 4,000-line Python end-to-end suite that drives a test server through the real protocol.
    `,
    descriptionJa: `
## 概要

**Pulse**は、Claude Codeで開発を行うチーム向けの利用状況モニタリング・予測・コスト管理システムです。各開発者のPCで動く小さなプログラムがClaude Codeの利用量をローカルで計測して中央サーバーへ送信し、ダッシュボードでは各アカウントの5時間・週次上限に対する使用状況、上限に達する時期の予測、メンバー・タスクごとのコストを確認できます。Autopilotのジョブを実行するマシンの登録・監視も担います。2026年10月から11月の約1か月で構築しました。

## ダッシュボードで分かること

- **PC・メンバー別の利用量**: 直近5時間・今日・7日間のトークン数とコストを、アカウント・モデル・アプリ・日付・タスク別に表示
- **プラン上限の使用率**: 各アカウントの5時間・週次上限の使用率を自動で取得し、上限に近づくほど更新間隔を短縮
- **メンバー・タスク別コスト**: 週次使用率の増加分に相当するプランコストを、同期間の作業量に応じて標準API料金ベースで配分。終了した週の単価は確定し、デプロイのたびにコストの自己チェックを実行
- **タスクボード**: セッション名・gitブランチ・フォルダ名からJiraチケットを特定して応答を紐づけ、ステータス別のカンバンでチケットごとのコスト・担当者・使用モデルを表示。タスク・モジュール・領域ごとの推奨モデル戦略も提示
- **月次予算**: 80%で警告し、上限に達すると、予算がリセットされるか管理者が増額を承認するまで、そのPCのClaude Codeを一時停止

## 予測と計画

- **上限到達予測**: 曜日・時間帯ごとの典型的な利用傾向に基づく統計シミュレーションで、到達時期の見込み幅と、リセット前に上限へ達するかどうかの判定を提示。すべての予測を記録して時刻の誤差・見逃し・誤警報で事後評価し、過去の週を再現するバックテストでも精度を検証
- **What-ifボードとバランス調整**: アカウント間で作業を振り分け直した場合の到達時期を試算し、共有リンクとして保存。最適化機能が早期到達を防ぐ最大3件の移動を提案（24時間以内は取り消し可能）
- **モデル推奨**: 小規模なテキスト分類器が過去の依頼を分析し、十分だったはずの最も安価なモデル（Haiku・Sonnet・Opus）をタスク画面に表示。毎週新しい依頼を抽出してラベル付けし、再学習したモデルは基準データでの精度が維持された場合のみ採用

## 各PCで動くクライアント

1つの自己完結型.NET 10実行ファイルが、Windows・macOS・Linux上でユーザー用クライアント、システムサービス、インストーラーの3役を担います。

- **個人用ページ**: 各自のPC上でのみ開ける専用ページで、自分の利用量と予算の確認、予算の増額申請（回答時はデスクトップ通知）、会話の共有、アップデートの確認が可能
- **会話の引き継ぎ**: Claude Codeの会話を、gitで変更された作業ファイルとともに同僚のPCへ送信、または同僚に依頼して受け取り可能。機密情報を含む可能性のあるファイルは確認のため保留し、共有の可否は各自が設定
- **PC間のセッション連携**: フックでClaude Code標準のエージェント一覧・メッセージ機能を拡張し、別PCのセッション同士がサーバー経由でやり取り可能（既定はオフ、レート制限付き、本文を保存しない監査ログ）
- **署名付き自動アップデート**: すべてのビルドに電子署名を付与し、30分ごとに確認。起動に失敗したビルドは自動でロールバック

## Autopilotワーカーの管理

管理者がダッシュボードでマシンを登録すると、Pulseがマシンごとの署名付き設定を配布し（アクセストークンはサーバー側で暗号化して保存、マシン上のファイルは所有者のみ参照可能）、ワーカーを監視して停止時には自動で再起動します。macOSとLinuxでは、新しいワーカービルドへの切り替えを実行中のジョブの完了後に行います。Autopilotには、CPU・メモリ・ディスクに余裕があり、利用可能なClaudeアカウントと必要なツールがそろったマシンだけを提供します。

## 技術と品質

- **技術スタック**: ASP.NET Core（.NET 10、実行時の外部パッケージなし）、独自のWebSocketプロトコル、React 19・TypeScript・Vite・Tailwind CSS・shadcn/ui・Recharts。各画面はそれぞれ単一ファイルの実行ファイルに組み込み
- **手法**: 500パスのモンテカルロ・シミュレーション（P10/P50/P90）、Python標準ライブラリのみで学習しC#で推論を再現するTF-IDF＋ロジスティック回帰分類器、ECDSA署名によるアップデート検証
- **セキュリティ**: PINと管理者パスワードをPBKDF2でハッシュ化しロックアウトを適用、CSRF対策、ワーカー用機密情報のAES-GCM暗号化、トークンを記録しない監査ログ
- **パフォーマンス**: 30台・60日分の模擬データによるベンチマークで、初回予測応答を1.1〜2.3秒から約105ミリ秒へ、ピークメモリを約400〜450MBから約260MBへ削減（一部はガベージコレクター設定の修正による）
- **テスト**: xUnitのテストメソッド199件、Vitestテスト170件以上、実際のプロトコルでテストサーバーを操作する4,000行のPython E2Eテスト
    `,
    logo: "assets/pulse.svg",
    madeAt: 1,
    resume: {
      order: 5,
      headline: "Claude Code Usage Monitoring, Forecasting and Cost Platform",
      bullets: [
        "Measures a team's Claude Code usage with a cross-platform .NET 10 client and system service, an ASP.NET Core server and a React 19 dashboard, built in about one month.",
        "Forecasts when each account will reach its 5-hour and weekly limits with a 500-path Monte Carlo simulation, suggests rebalancing moves with undo, and prices usage per person and per Jira task.",
        "Ships ECDSA-signed self-updates with automatic rollback, links Claude Code sessions across computers through hooks, and enrols and supervises Autopilot worker machines with signed per-machine configurations.",
        "Backed by 199 xUnit test methods, over 170 Vitest tests and a 4,000-line end-to-end suite; a synthetic 30-computer benchmark shows the first forecast response falling from over 1 s to about 105 ms."
      ],
      tech: ["42", "43", "10", "17", "53", "29", "52", "49", "18", "26", "38"]
    },
    skills: ["42", "43", "52", "10", "17", "19", "29", "53", "49", "57", "18", "9", "58", "56", "26", "38"]
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
    ["42", "43"],
    ["15", "16"],
    ["22", "25"],
    ["24", "23"],
    ["26", "41", "27", "28"],
    ["30", "32", "31"],
    ["33", "34"],
    ["36", "35"],
    ["50", "46"],
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