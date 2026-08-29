export interface AutopilotMarkProps {
  size?: number
}

const CHIPS = [
  { key: 1, x: 7.3, y: 16.65, w: 3.6, h: 3.6, rx: 1.1, color: '#5B6EF5', cx: 9.1, cy: 18.45, deg: 50 },
  { key: 2, x: 10.0, y: 19.85, w: 4.2, h: 4.2, rx: 1.3, color: '#00BCD4', cx: 12.1, cy: 21.95, deg: 50 },
  { key: 3, x: 12.55, y: 18.5, w: 4.8, h: 4.8, rx: 1.4, color: '#00C896', cx: 14.95, cy: 20.9, deg: -47 },
  { key: 4, x: 16.7, y: 13.2, w: 5.6, h: 5.6, rx: 1.7, color: '#FF8A00', cx: 19.5, cy: 16, deg: -47 },
  { key: 5, x: 20.75, y: 7.8, w: 6.6, h: 6.6, rx: 2.0, color: '#E8407F', cx: 24.05, cy: 11.1, deg: -47 },
]

/**
 * Autopilot visual mark — five coloured chips along a two-segment plotted
 * course resolving into a checkmark, matching the design in docs/AutopilotMark.jsx.
 * @param size - Width and height of the rendered mark in pixels. Defaults to 40.
 * @returns SVG mark wrapped in a fixed-size div.
 */
export default function AutopilotMark({ size = 40 }: AutopilotMarkProps) {
  return (
    <div style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        overflow="visible"
        role="img"
        aria-label="Autopilot"
      >
        <polyline
          points="7,16 13,23 26,9"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {CHIPS.map((chip) => (
          <rect
            key={chip.key}
            x={chip.x}
            y={chip.y}
            width={chip.w}
            height={chip.h}
            rx={chip.rx}
            fill={chip.color}
            transform={`rotate(${chip.deg} ${chip.cx} ${chip.cy})`}
          />
        ))}
        <circle cx="7" cy="16" r="1.3" fill="#94a3b8" />
      </svg>
    </div>
  )
}
