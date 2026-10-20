import type { ResumeConfig, RirekishoConfig } from '@/types'

// Projects shown on the resume and rirekisho by default (ids from projectsData). The portfolio always shows all of them.
export const documentProjectIds: string[] = ["6", "3", "5"]

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
    ["26", "27", "28"],
    ["30", "32", "31"],
    ["33", "34"],
    ["36", "35"],
    ["Problem Solving", "Debugging"],
  ],
}

// Rirekisho-only content. Leave a field out (or empty) to print the cell blank for hand-writing.
// Dates use DD-Mon-YYYY, for example "15-Mar-2004".
export const rirekishoConfig: RirekishoConfig = {
  birthDate: "REDACTED_DOB",
  gender: undefined,
  postalCode: "REDACTED_POSTAL",
  addressFurigana: "REDACTED_FURIGANA",
  addressJa: "REDACTED_ADDRESS_JA",
  address: "REDACTED_ADDRESS",
  phone: undefined,
  contactPostalCode: undefined,
  contactAddressFurigana: undefined,
  contactAddress: undefined,
  contactPhone: undefined,
  motivation:
    "フルスタックのソフトウェア開発者として、スケーラブルで高性能なWebアプリケーションの設計・開発に取り組んできました。モダンなフロントエンド／バックエンド技術に加え、システム設計、自動化、クリーンアーキテクチャの実務経験があります。人工知能・機械学習の知見を活かし、データ駆動型のインテリジェントな機能やワークフローの実現にも積極的に取り組んでいます。効率的で保守しやすいコードを書くこと、そして信頼性の高い本番品質のソリューションを届けることを大切にしています。",
  requests: "貴社の規定に従います。",
}
