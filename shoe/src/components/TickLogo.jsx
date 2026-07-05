// The brand mark: a single confident tick. Used in the navbar and as a
// favicon-style motif. Kept as its own component so it can be animated
// independently (stroke draw-on at load).
export default function TickLogo({ size = 34, color = '#c8ff00', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`tick-logo ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 52 L40 76 L86 22"
        fill="none"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
