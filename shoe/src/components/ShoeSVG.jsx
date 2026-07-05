import { forwardRef } from 'react'

// A stylized low-top runner. Colors are passed in as props so the same
// markup can be recolored per shoe, and GSAP can tween the fills directly.
const ShoeSVG = forwardRef(function ShoeSVG(
  { primary = '#c8ff00', secondary = '#101010', sole = '#0d0d0d', className = '' },
  ref
) {
  return (
    <svg 
      ref={ref}
      viewBox="0 0 760 380"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* sole */}
      <path
        className="shoe-sole"
        d="M70 300 C60 250 90 230 150 226 L600 210 C660 208 700 230 718 268
           C730 292 718 318 686 322 L120 336 C90 338 76 322 70 300 Z"
        fill={sole}
      />
      {/* midsole stripe */}
      <path
        className="shoe-midsole"
        d="M96 286 C100 262 122 252 160 250 L590 236 C630 234 656 248 668 272
           L660 292 C600 300 200 308 110 304 C100 300 94 296 96 286 Z"
        fill={primary}
        opacity="0.85"
      />
      {/* upper body */}
      <path
        className="shoe-upper"
        d="M96 250 C90 190 120 140 190 116 C250 96 320 92 380 96
           C470 102 540 96 590 128 C630 152 654 188 662 226
           L96 250 Z"
        fill={secondary}
      />
      {/* tongue / vamp highlight */}
      <path
        className="shoe-vamp"
        d="M210 150 C260 122 330 112 390 116 C440 118 480 128 510 146
           C470 156 420 158 370 156 C310 154 255 150 210 150 Z"
        fill={primary}
        opacity="0.18"
      />
      {/* heel tab */}
      <path
        className="shoe-heel"
        d="M590 128 C630 152 654 188 662 226 L700 220 C690 178 660 144 614 118 Z"
        fill={primary}
      />
      {/* laces */}
      <g className="shoe-laces" stroke={primary} strokeWidth="6" strokeLinecap="round">
        <line x1="300" y1="120" x2="340" y2="160" />
        <line x1="335" y1="114" x2="372" y2="156" />
        <line x1="370" y1="112" x2="404" y2="154" />
        <line x1="405" y1="112" x2="436" y2="152" />
        <line x1="440" y1="114" x2="466" y2="150" />
      </g>
      {/* swoosh / tick brand mark on the side */}
      <path
        className="shoe-tick"
        d="M180 220 C230 250 300 256 360 234 C400 220 430 196 460 200
           C420 230 380 256 330 268 C270 282 210 274 170 248 Z"
        fill={primary}
      />
      {/* eyelets */}
      <g fill={primary}>
        <circle cx="300" cy="135" r="4" />
        <circle cx="335" cy="129" r="4" />
        <circle cx="370" cy="127" r="4" />
        <circle cx="405" cy="127" r="4" />
        <circle cx="440" cy="129" r="4" />
      </g>
    </svg>
  )
})

export default ShoeSVG
