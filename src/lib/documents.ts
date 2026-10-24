import type {
  Certificate,
  Education,
  Experience,
  PersonalInfo,
  PrivateDetails,
  Project,
  ResumeConfig,
  RirekishoConfig,
  Skill,
} from "@/types";

export interface DocumentSource {
  personalInfo: PersonalInfo;
  educationData: Education[];
  certificatesData: Certificate[];
  experienceData: Experience[];
  skillsData: Skill[];
  projectsData: Project[];
  resumeConfig: ResumeConfig;
  rirekishoConfig: RirekishoConfig;
  documentProjectIds: string[];
  privateDetails: PrivateDetails;
  skillCategoryLabelsJa: Record<string, string>;
}

export interface PartialDate {
  year: number;
  month?: number;
  day?: number;
}

const MONTH_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Parses "DD-Mon-YYYY", "Mon-YYYY" or "YYYY" into a partial date.
 * @param input - Date string from the portfolio data
 * @returns Parsed date, or null when the string is not a date (for example "Present")
 */
export function parsePartialDate(input: string | undefined): PartialDate | null {
  if (!input) return null;
  const s = input.trim();
  let m = /^(\d{1,2})-([A-Za-z]{3})-(\d{4})$/.exec(s);
  if (m) {
    const month = MONTH_ABBR.findIndex((x) => x.toLowerCase() === m![2].toLowerCase());
    if (month < 0) return null;
    return { year: Number(m[3]), month: month + 1, day: Number(m[1]) };
  }
  m = /^([A-Za-z]{3})-(\d{4})$/.exec(s);
  if (m) {
    const month = MONTH_ABBR.findIndex((x) => x.toLowerCase() === m![1].toLowerCase());
    return month < 0 ? null : { year: Number(m[2]), month: month + 1 };
  }
  m = /^(\d{4})$/.exec(s);
  return m ? { year: Number(m[1]) } : null;
}

export interface Timeframe {
  start: PartialDate | null;
  end: PartialDate | null;
  ongoing: boolean;
}

/**
 * Parses a portfolio timeframe such as "01-Aug-2022-Present" or "01-Jun-2021-31-May-2022".
 * @param timeframe - Timeframe string from the portfolio data
 * @returns Start date, end date, and whether the period is ongoing
 */
export function parseTimeframe(timeframe: string): Timeframe {
  const m = /^(\d{1,2}-[A-Za-z]{3}-\d{4})-(.+)$/.exec(timeframe.trim());
  if (!m) return { start: null, end: null, ongoing: false };
  const ongoing = m[2].trim().toLowerCase() === "present";
  return { start: parsePartialDate(m[1]), end: ongoing ? null : parsePartialDate(m[2]), ongoing };
}

const dateKey = (d: PartialDate | null): number => (d ? d.year * 10000 + (d.month ?? 0) * 100 + (d.day ?? 0) : 0);

function monthYearUpper(d: PartialDate | null): string {
  if (!d) return "";
  return d.month ? `${MONTH_ABBR[d.month - 1].toUpperCase()} ${d.year}` : String(d.year);
}

function skillName(skillsById: Map<string, Skill>, idOrLabel: string): string {
  return skillsById.get(idOrLabel)?.name ?? idOrLabel;
}

/**
 * Strips markdown emphasis, links and code ticks from a text fragment.
 * @param text - Markdown text
 * @returns Plain text on a single line
 */
function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export interface ParsedDescription {
  overview: string;
  points: string[];
}

/**
 * Reads a project description written in markdown: the first paragraph is the overview, list items are the key points.
 * @param markdown - Project description (English or Japanese)
 * @returns Overview text and key points, so any project gets a proper summary without extra data
 */
export function parseDescription(markdown: string | undefined): ParsedDescription {
  let overview = "";
  const points: string[] = [];
  for (const raw of (markdown ?? "").split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    if (line.startsWith("- ") || line.startsWith("* ")) points.push(stripMarkdown(line.slice(2)));
    else if (!overview) overview = stripMarkdown(line);
  }
  return { overview, points };
}

function firstSentence(text: string): string {
  const match = /^(.+?[.!?。])(\s|$)/.exec(text);
  return match ? match[1] : text;
}

function shortPoint(point: string): string {
  const [label, ...rest] = point.split(/\s[—–]\s|:\s/);
  if (rest.length === 0) return truncate(point, 120);
  return truncate(`${label}: ${firstSentence(rest.join(" "))}`, 135);
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const space = cut.lastIndexOf(" ");
  return `${cut.slice(0, space > max * 0.6 ? space : max).replace(/[,;:\u2014-]+$/, "")}…`;
}

/**
 * Picks the projects shown in the generated documents, in a stable order.
 * @param projects - All portfolio projects
 * @param ids - Ids of the projects to include
 * @returns The chosen projects, ordered by resume order then portfolio order
 */
export function selectDocumentProjects(projects: Project[], ids: string[]): Project[] {
  const chosen = new Set(ids);
  return projects
    .map((p, index) => ({ p, key: p.resume?.order ?? 1000 + index }))
    .filter(({ p }) => chosen.has(p.id))
    .sort((a, b) => a.key - b.key)
    .map(({ p }) => p);
}

export interface ResumeModel {
  name: string;
  title: string;
  contact: { phone: string; email: string; portfolioUrl: string; linkedin: string; github: string };
  profile: string;
  languages: { name: string; note?: string }[];
  skills: string[];
  certifications: { name: string; issuer: string; url?: string }[];
  education: { institution: string; course: string; period: string }[];
  experience: { company: string; position: string; period: string; bullets: string[] }[];
  projects: { name: string; headline: string; bullets: string[]; tech: string[] }[];
}

/**
 * Builds the English resume content from the portfolio data.
 * @param source - Portfolio data and resume configuration
 * @returns Normalised resume content ready to render
 */
export function buildResumeModel(source: DocumentSource, options: { projectIds?: string[] } = {}): ResumeModel {
  const { personalInfo, educationData, certificatesData, experienceData, skillsData, projectsData, resumeConfig } =
    source;
  const skillsById = new Map(skillsData.map((s) => [s.id, s]));

  const languages = resumeConfig.languageSkillIds
    .map((id) => skillsById.get(id))
    .filter((s): s is Skill => Boolean(s))
    .map((s) => ({ name: s.name, note: s.level.toLowerCase() === "native" ? undefined : s.level }));

  const education = educationData.map((e) => {
    const tf = parseTimeframe(e.timeframe);
    const end = tf.ongoing ? parsePartialDate(e.expectedEnd) : tf.end;
    const endText = end ? String(end.year) : tf.ongoing ? "Present" : "";
    return {
      institution: e.instituteName,
      course: e.course,
      period: `${tf.start?.year ?? ""} – ${endText}`,
    };
  });

  const experience = experienceData.map((x) => {
    const tf = parseTimeframe(x.timeframe);
    return {
      company: x.companyName,
      position: x.position,
      period: `${monthYearUpper(tf.start)} – ${tf.ongoing ? "PRESENT" : monthYearUpper(tf.end)}`,
      bullets: x.resumeBullets ?? [],
    };
  });

  const projects = selectDocumentProjects(projectsData, options.projectIds ?? source.documentProjectIds).map((p) => {
    const parsed = parseDescription(p.description);
    const generated = [truncate(firstSentence(parsed.overview), 150), ...parsed.points.slice(0, 2).map(shortPoint)];
    return {
      name: p.name,
      headline: p.resume?.headline ?? p.slogan,
      bullets: p.resume?.bullets ?? generated.filter(Boolean),
      tech: (p.resume?.tech ?? p.skills).map((id) => skillName(skillsById, id)),
    };
  });

  return {
    name: personalInfo.name,
    title: personalInfo.title,
    contact: {
      phone: source.privateDetails.phone,
      email: source.privateDetails.email,
      portfolioUrl: personalInfo.portfolioUrl,
      linkedin: personalInfo.linkedin,
      github: personalInfo.github,
    },
    profile: resumeConfig.profile,
    languages,
    skills: resumeConfig.skillGroups.map((group) => group.map((id) => skillName(skillsById, id)).join(", ")),
    certifications: certificatesData.map((c) => ({
      name: c.shortName ?? c.name,
      issuer: c.institute,
      url: c.url,
    })),
    education,
    experience,
    projects,
  };
}

/**
 * Drops every private detail (email, phone, birth date, gender, postal code, addresses) for the published PDFs.
 * @returns Empty private details; the cells simply print blank
 */
export function withoutPrivateDetails(): PrivateDetails {
  return { email: "", phone: "" };
}

export type EraStyle = "western" | "wareki";

/**
 * Converts a western year to a Japanese era label.
 * @param year - Western calendar year
 * @param month - Month (1-12); decides the 2019 Heisei/Reiwa boundary
 * @returns Era name and era year, for example 令和 / 8
 */
export function toWareki(year: number, month = 12): { era: string; year: number } {
  if (year > 2019 || (year === 2019 && month >= 5)) return { era: "令和", year: year - 2018 };
  if (year > 1989 || (year === 1989 && month >= 1)) return { era: "平成", year: year - 1988 };
  if (year >= 1927) return { era: "昭和", year: year - 1925 };
  return { era: "", year };
}

function eraYear(year: number, month: number | undefined, style: EraStyle): string {
  if (style === "western") return String(year);
  const w = toWareki(year, month);
  return `${w.era}${w.year === 1 ? "元" : w.year}`;
}

const FULL_SPACE = String.fromCharCode(0x3000);
const KATAKANA_TO_HIRAGANA_OFFSET = 0x60;

/**
 * Converts katakana to hiragana for the ふりがな line; other characters pass through.
 * @param text - Katakana text
 * @returns Hiragana text
 */
export function katakanaToHiragana(text: string): string {
  return text.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - KATAKANA_TO_HIRAGANA_OFFSET));
}

export interface HistoryRow {
  year: string;
  month: string;
  text: string;
  align?: "left" | "center" | "right";
}

export interface RirekishoModel {
  asOf: { year: string; month: string; day: string };
  nameFurigana: string;
  name: string;
  nameLatin: string;
  birth: { year: string; month: string; day: string; age: string };
  gender: string;
  address: { postalCode: string; furigana: string; text: string; phone: string };
  contact: { postalCode: string; furigana: string; text: string; phone: string };
  email: string;
  photoUrl: string;
  historyRows: HistoryRow[];
  qualificationRows: HistoryRow[];
  motivation: string;
  motivationCompact: string;
  requests: string;
  supplement: RirekishoSupplement;
}

export interface RirekishoProjectBlock {
  name: string;
  slogan: string;
  overview: string;
  points: string[];
  tech: string;
}

export interface RirekishoSupplement {
  projects: RirekishoProjectBlock[];
  skills: { label: string; text: string }[];
  grades: { label: string; text: string }[];
  links: { label: string; text: string }[];
}

function gradeLabelJa(type: string): string {
  const semester = /^Sem (\d+) SPI$/.exec(type);
  if (semester) return `第${semester[1]}学期SPI`;
  return type === "Overall Percentage" ? "総合得点率" : type;
}

const LEVEL_JA: Record<string, string> = {
  native: "母語",
  expert: "エキスパート",
  advanced: "上級",
  "pre-advanced": "準上級",
  intermediate: "中級",
  "pre-intermediate": "初中級",
};

const LANGUAGE_JA: Record<string, string> = {
  English: "英語",
  Hindi: "ヒンディー語",
  Gujarati: "グジャラート語",
  Japanese: "日本語",
};

function ageAt(birth: PartialDate | null, today: Date): string {
  if (!birth?.month || !birth.day) return "";
  let age = today.getFullYear() - birth.year;
  const beforeBirthday =
    today.getMonth() + 1 < birth.month || (today.getMonth() + 1 === birth.month && today.getDate() < birth.day);
  if (beforeBirthday) age -= 1;
  return String(age);
}

/**
 * Builds the rirekisho (履歴書) content from the portfolio data.
 * @param source - Portfolio data and rirekisho configuration
 * @param options - Era style for dates, and the "as of" date (defaults to today)
 * @returns Rows and fields laid out for the MHLW standard form
 */
export function buildRirekishoModel(
  source: DocumentSource,
  options: { era: EraStyle; today?: Date; projectIds?: string[] },
): RirekishoModel {
  const { personalInfo, educationData, certificatesData, experienceData, skillsData, projectsData } = source;
  const cfg = { ...source.rirekishoConfig, ...source.privateDetails.rirekisho };
  const skillsById = new Map(skillsData.map((s) => [s.id, s]));
  const today = options.today ?? new Date();
  const { era } = options;

  const row = (d: PartialDate | null, text: string, align?: HistoryRow["align"]): HistoryRow => ({
    year: d ? eraYear(d.year, d.month, era) : "",
    month: d?.month ? String(d.month) : "",
    text,
    align,
  });

  const selectedProjects = selectDocumentProjects(projectsData, options.projectIds ?? source.documentProjectIds);
  const jobs = [...experienceData]
    .map((x) => ({ x, tf: parseTimeframe(x.timeframe) }))
    .sort((a, b) => dateKey(a.tf.start) - dateKey(b.tf.start));
  const latestJobOfCompany = new Map<string, number>();
  jobs.forEach(({ x }, index) => latestJobOfCompany.set(x.id, index));
  const projectNamesFor = (companyId: string) =>
    selectedProjects.filter((p) => String(p.madeAt) === companyId).map((p) => p.name);

  const history: HistoryRow[] = [{ year: "", month: "", text: "学　歴", align: "center" }];
  [...educationData]
    .map((e) => ({ e, tf: parseTimeframe(e.timeframe) }))
    .sort((a, b) => dateKey(a.tf.start) - dateKey(b.tf.start))
    .forEach(({ e, tf }) => {
      const label = `${e.instituteNameJa ?? e.instituteName} ${e.courseJa ?? e.course}`;
      history.push(row(tf.start, `${label} 入学`));
      if (tf.ongoing) {
        history.push(row(parsePartialDate(e.expectedEnd), `${label} 卒業見込み`));
      } else {
        history.push(row(tf.end, `${label} 卒業`));
      }
    });

  history.push({ year: "", month: "", text: "" });
  history.push({ year: "", month: "", text: "職　歴", align: "center" });
  let previousCompany = "";
  let ongoingJob = false;
  jobs.forEach(({ x, tf }, index) => {
      const position = x.positionJa ?? x.position;
      if (x.companyName === previousCompany) {
        history.push(row(tf.start, `同社 職位変更${FULL_SPACE}${position}`));
      } else {
        history.push(row(tf.start, `${x.companyNameJa ?? x.companyName} 入社${FULL_SPACE}${position}`));
      }
      if (x.descriptionJa) history.push({ year: "", month: "", text: `\u3000${stripMarkdown(x.descriptionJa)}` });
      if (latestJobOfCompany.get(x.id) === index) {
        const names = projectNamesFor(x.id);
        if (names.length > 0) history.push({ year: "", month: "", text: `\u3000\u62c5\u5f53\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff1a${names.join("\u3001")}` });
      }
      previousCompany = x.companyName;
      ongoingJob = tf.ongoing;
    });
  if (ongoingJob) history.push({ year: "", month: "", text: "現在に至る" });
  history.push({ year: "", month: "", text: "以上", align: "right" });

  const qualifications: HistoryRow[] = [...certificatesData]
    .sort((a, b) => dateKey(parsePartialDate(a.completedOn)) - dateKey(parsePartialDate(b.completedOn)))
    .map((c) => {
      const via = c.url?.includes("coursera.org") ? "／Coursera" : "";
      return row(parsePartialDate(c.completedOn), `${c.nameJa ?? c.name}（${c.instituteJa ?? c.institute}${via}）修了`);
    });

  const birth = parsePartialDate(cfg.birthDate);
  const languageText = skillsData
    .filter((s) => s.category === "Language")
    .map((s) => `${LANGUAGE_JA[s.name] ?? s.name}（${LEVEL_JA[s.level.toLowerCase()] ?? s.level}）`)
    .join("、");
  const projectBlocks: RirekishoProjectBlock[] = selectedProjects.map((p) => {
    const parsed = parseDescription(p.descriptionJa ?? p.description);
    return {
      name: p.name,
      slogan: p.sloganJa ?? p.slogan,
      overview: parsed.overview,
      points: parsed.points.slice(0, 8),
      tech: (p.resume?.tech ?? p.skills)
        .map((id) => skillsById.get(id)?.name)
        .filter(Boolean)
        .join("、"),
    };
  });

  const skillGroups = new Map<string, string[]>();
  for (const s of skillsData) {
    if (s.category === "Language") continue;
    const list = skillGroups.get(s.category) ?? [];
    list.push(`${s.name}（${LEVEL_JA[s.level.toLowerCase()] ?? s.level}）`);
    skillGroups.set(s.category, list);
  }

  const supplement: RirekishoSupplement = {
    projects: projectBlocks,
    skills: [...skillGroups].map(([category, items]) => ({
      label: source.skillCategoryLabelsJa[category] ?? category,
      text: items.join("、"),
    })),
    grades: educationData
      .filter((e) => e.grades.length > 0)
      .map((e) => ({
        label: e.courseJa ?? e.course,
        text: e.grades.map((g) => `${gradeLabelJa(g.type)} ${g.value}`).join("、"),
      })),
    links: [
      { label: "ポートフォリオ", text: personalInfo.portfolioUrl },
      { label: "LinkedIn", text: personalInfo.linkedin },
      { label: "GitHub", text: personalInfo.github },
      { label: "メール", text: source.privateDetails.email },
    ].filter((link) => link.text),
  };

  const strongSkills = skillsData
    .filter((s) => s.category !== "Language" && ["expert", "advanced"].includes(s.level.toLowerCase()))
    .map((s) => s.name)
    .join("、");
  const companyById = new Map(experienceData.map((x) => [x.id, x.companyNameJa ?? x.companyName]));
  const projectSummary = selectedProjects.map((p) => {
    const owner = p.madeAt === 0 ? "個人開発" : (companyById.get(String(p.madeAt)) ?? "").replace(/（.*）/, "");
    return `・${p.name}（${owner}）：${p.sloganJa ?? p.slogan}`;
  });
  const motivationBase = [
    cfg.motivation,
    strongSkills && `【得意な技術】${strongSkills}`,
    languageText && `【語学】${languageText}`,
  ];
  const motivation = [
    ...motivationBase,
    projectSummary.length > 0 && `【主なプロジェクト】（詳細は次ページ以降に記載）\n${projectSummary.join("\n")}`,
  ]
    .filter(Boolean)
    .join("\n\n");
  const motivationCompact = [
    ...motivationBase,
    projectBlocks.length > 0 && `【主なプロジェクト】${projectBlocks.map((b) => b.name).join("、")}（詳細は次ページ以降に記載）`,
  ]
    .filter(Boolean)
    .join("\n\n");

  return {
    asOf: {
      year: eraYear(today.getFullYear(), today.getMonth() + 1, era),
      month: String(today.getMonth() + 1),
      day: String(today.getDate()),
    },
    nameFurigana: katakanaToHiragana(personalInfo.nameJa),
    name: personalInfo.nameJa,
    nameLatin: personalInfo.name,
    birth: {
      year: birth ? eraYear(birth.year, birth.month, era) : "",
      month: birth?.month ? String(birth.month) : "",
      day: birth?.day ? String(birth.day) : "",
      age: ageAt(birth, today),
    },
    gender: cfg.gender ?? "",
    address: {
      postalCode: cfg.postalCode ?? "",
      furigana: cfg.addressFurigana ?? "",
      text: [cfg.addressJa, cfg.address].filter(Boolean).join("\n"),
      phone: cfg.phone ?? source.privateDetails.phone,
    },
    contact: {
      postalCode: cfg.contactPostalCode ?? "",
      furigana: cfg.contactAddressFurigana ?? "",
      text: cfg.contactAddress ?? (cfg.contactPostalCode || !(cfg.address || cfg.addressJa) ? "" : "同上"),
      phone: cfg.contactPhone ?? "",
    },
    email: source.privateDetails.email,
    photoUrl: personalInfo.photo,
    historyRows: history,
    qualificationRows: qualifications,
    motivation,
    motivationCompact,
    requests: cfg.requests,
    supplement,
  };
}
