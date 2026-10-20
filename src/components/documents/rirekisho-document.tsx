import type { CSSProperties } from "react";
import type { HistoryRow, RirekishoModel } from "@/lib";
import "./rirekisho.css";

const PAGE1_ROWS = 15;
const MIN_QUALIFICATION_ROWS = 6;

export interface RirekishoDocumentProps {
  model: RirekishoModel;
  showPhoto: boolean;
}

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

const boxStyle = ({ x, y, w, h }: Box): CSSProperties => ({
  left: `${x}mm`,
  top: `${y}mm`,
  width: `calc(${w}mm + var(--bw))`,
  height: `calc(${h}mm + var(--bw))`,
});

const L = 18.7;
const S = 156.1;
const N = 135.1;
const R = 191.7;

const NAME_BOX: Box = { x: L, y: 39.3, w: N - L, h: 32.1 };
const BIRTH_BOX: Box = { x: L, y: 71.4, w: N - L, h: 9.6 };
const SEX_BOX: Box = { x: N, y: 71.4, w: R - N, h: 9.6 };
const ADDRESS_BOX: Box = { x: L, y: 81.0, w: S - L, h: 23.1 };
const PHONE_BOX: Box = { x: S, y: 81.0, w: R - S, h: 23.1 };
const CONTACT_BOX: Box = { x: L, y: 104.1, w: S - L, h: 22.8 };
const CONTACT_PHONE_BOX: Box = { x: S, y: 104.1, w: R - S, h: 22.8 };

function isLong(text: string): boolean {
  let width = 0;
  for (const ch of text) width += ch.charCodeAt(0) > 0x2e80 ? 2 : 1;
  return width > 76;
}

function HistoryRows({ rows, count }: { rows: HistoryRow[]; count: number }) {
  const padded = [...rows];
  while (padded.length < count) padded.push({ year: "", month: "", text: "" });
  return (
    <>
      {padded.map((r, i) => (
        <tr key={i} className="rk-row">
          <td className="rk-c-year">{r.year}</td>
          <td className="rk-c-month">{r.month}</td>
          <td className={`rk-c-text rk-align-${r.align ?? "left"}${isLong(r.text) ? " rk-long" : ""}`}>{r.text}</td>
        </tr>
      ))}
    </>
  );
}

function SectionTable({ heading, rows, count }: { heading: string; rows: HistoryRow[]; count: number }) {
  return (
    <table className="rk-table">
      <colgroup>
        <col className="rk-col-year" />
        <col className="rk-col-month" />
        <col />
      </colgroup>
      <thead>
        <tr className="rk-head-row">
          <th>年</th>
          <th>月</th>
          <th>{heading}</th>
        </tr>
      </thead>
      <tbody>
        <HistoryRows rows={rows} count={count} />
      </tbody>
    </table>
  );
}

/**
 * Two-page 履歴書 laid out on the MHLW (厚生労働省) standard A4 form.
 * @param model - Rirekisho content built by buildRirekishoModel
 * @param showPhoto - Whether to print the portrait in the photo box
 * @returns Rendered rirekisho pages
 */
export function RirekishoDocument({ model, showPhoto }: RirekishoDocumentProps) {
  const page1 = model.historyRows.slice(0, PAGE1_ROWS);
  const overflow = model.historyRows.slice(PAGE1_ROWS);
  const qualificationCount = Math.max(MIN_QUALIFICATION_ROWS, model.qualificationRows.length);

  return (
    <>
      <section className="doc-paper rk-page">
        <h1 className="rk-title">履 歴 書</h1>
        <p className="rk-date">
          <span className="rk-date-num">{model.asOf.year}</span>年
          <span className="rk-date-num">{model.asOf.month}</span>月
          <span className="rk-date-num">{model.asOf.day}</span>日現在
        </p>

        <div className="rk-photo">
          {showPhoto ? (
            <img src={model.photoUrl} alt="" />
          ) : (
            <div className="rk-photo-note">
              <p>写真をはる位置</p>
              <p>
                写真をはる必要が
                <br />
                ある場合
              </p>
              <p>
                {"1. 縦　36〜40mm"}
                <br />
                {"　 横　24〜30mm"}
              </p>
              <p>2. 本人単身胸から上</p>
              <p>3. 裏面のりづけ</p>
            </div>
          )}
        </div>

        <div className="rk-box" style={boxStyle(NAME_BOX)}>
          <div className="rk-furi-row">
            <span className="rk-tiny">ふりがな</span>
            <span className="rk-furi">{model.nameFurigana}</span>
          </div>
          <div className="rk-name-row">
            <span className="rk-label">{"氏　名"}</span>
            <div className="rk-name-value">
              <span className="rk-name-ja">{model.name}</span>
              <span className="rk-name-latin">{model.nameLatin}</span>
            </div>
          </div>
        </div>

        <div className="rk-box rk-birth" style={boxStyle(BIRTH_BOX)}>
          <span className="rk-abs rk-num" style={{ left: "37.4mm" }}>{model.birth.year}</span>
          <span className="rk-abs" style={{ left: "37.7mm" }}>年</span>
          <span className="rk-abs rk-num" style={{ left: "53.8mm" }}>{model.birth.month}</span>
          <span className="rk-abs" style={{ left: "54.1mm" }}>月</span>
          <span className="rk-abs rk-num" style={{ left: "69.1mm" }}>{model.birth.day}</span>
          <span className="rk-abs" style={{ left: "69.4mm" }}>日生</span>
          <span className="rk-abs" style={{ left: "87.4mm" }}>（満</span>
          <span className="rk-abs rk-num" style={{ left: "101.4mm" }}>{model.birth.age}</span>
          <span className="rk-abs" style={{ left: "101.7mm" }}>歳）</span>
        </div>

        <div className="rk-box rk-sex" style={boxStyle(SEX_BOX)}>
          <span className="rk-label">※性別</span>
          <span className="rk-sex-value">{model.gender}</span>
        </div>

        <div className="rk-box rk-address" style={boxStyle(ADDRESS_BOX)}>
          <div className="rk-furi-row rk-furi-row-thin">
            <span className="rk-tiny">ふりがな</span>
            <span className="rk-furi">{model.address.furigana}</span>
          </div>
          <div className="rk-address-body">
            <span className="rk-label">現住所</span>
            <span className="rk-postal">〒 {model.address.postalCode}</span>
            <p className="rk-address-text">{model.address.text}</p>
          </div>
        </div>
        <div className="rk-box rk-phone" style={boxStyle(PHONE_BOX)}>
          <span className="rk-label">電話</span>
          <span className="rk-phone-value">{model.address.phone}</span>
          <span className="rk-email">{model.email}</span>
        </div>

        <div className="rk-box rk-address" style={boxStyle(CONTACT_BOX)}>
          <div className="rk-furi-row rk-furi-row-thin">
            <span className="rk-tiny">ふりがな</span>
            <span className="rk-furi">{model.contact.furigana}</span>
          </div>
          <div className="rk-address-body">
            <span className="rk-label">連絡先</span>
            <span className="rk-postal">〒 {model.contact.postalCode}</span>
            <span className="rk-contact-note">（現住所以外に連絡を希望する場合のみ記入）</span>
            <p className="rk-address-text">{model.contact.text}</p>
          </div>
        </div>
        <div className="rk-box rk-phone" style={boxStyle(CONTACT_PHONE_BOX)}>
          <span className="rk-label">電話</span>
          <span className="rk-phone-value">{model.contact.phone}</span>
        </div>

        <div className="rk-history">
          <SectionTable heading="学 歴・職 歴（各別にまとめて書く）" rows={page1} count={PAGE1_ROWS} />
        </div>

        <p className="rk-footnote">※「性別」欄：記載は任意です。未記載とすることも可能です。</p>
      </section>

      <section className="doc-paper rk-page">
        <div className="rk-page2">
          {overflow.length > 0 && (
            <SectionTable heading="学 歴・職 歴（各別にまとめて書く）" rows={overflow} count={overflow.length} />
          )}
          <SectionTable heading="免 許・資 格" rows={model.qualificationRows} count={qualificationCount} />

          <div className="rk-motivation">
            <div className="rk-box-head">志望の動機、特技、好きな学科、アピールポイントなど</div>
            <div className="rk-motivation-body">{model.motivation}</div>
          </div>

          <div className="rk-requests">
            <div className="rk-box-head rk-box-head-small">
              本人希望記入欄（特に給料・職種・勤務時間・勤務地・その他についての希望などがあれば記入）
            </div>
            <table className="rk-table rk-table-plain">
              <tbody>
                {[model.requests, "", "", ""].map((text, i) => (
                  <tr key={i} className="rk-row">
                    <td className="rk-c-text rk-align-left">{text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
