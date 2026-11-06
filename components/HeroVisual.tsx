import Image from "next/image"

export default function HeroVisual() {
  return (
    <div className="hero-visual reveal delay-1" aria-label="BIM building visualization">
      <div className="visual-label top">DIGITAL TWIN / COORDINATION</div>
      {/* <svg className="building" viewBox="0 0 700 520" role="img" aria-label="Stylized BIM building model">
        <defs>
          <linearGradient id="glass" x1="0" x2="1">
            <stop offset="0" stopColor="#111318" />
            <stop offset=".5" stopColor="#2d3037" />
            <stop offset="1" stopColor="#090a0d" />
          </linearGradient>
          <linearGradient id="goldLine" x1="0" x2="1">
            <stop offset="0" stopColor="#8d6513" />
            <stop offset=".5" stopColor="#f0c34f" />
            <stop offset="1" stopColor="#8d6513" />
          </linearGradient>
        </defs>
        <g opacity=".45" stroke="#a9adb4" strokeWidth="1">
          <path d="M80 420 L350 310 L650 420 L380 510 Z" fill="none" />
          <path d="M80 420 L80 470 M125 402 L125 452 M170 384 L170 434 M215 366 L215 416 M260 348 L260 398 M305 330 L305 380" />
          <path d="M125 402 L395 510 M170 384 L440 490 M215 366 L485 472 M260 348 L530 454 M305 330 L575 436" />
          <path d="M350 310 L350 475 M400 329 L400 457 M450 347 L450 438 M500 365 L500 420 M550 384 L550 402" />
        </g>
        <g transform="translate(110 60)">
          <path
            d="M80 370 L80 130 L210 60 L470 170 L470 390 L340 450 Z"
            fill="url(#glass)"
            stroke="#d8dde3"
            strokeWidth="2"
          />
          <path d="M210 60 L210 290 L340 350 L340 450" fill="#17191e" stroke="#c4c8ce" strokeWidth="2" />
          <path d="M210 60 L470 170 L340 230 L80 130 Z" fill="#202329" stroke="#c4c8ce" strokeWidth="2" />
          <g stroke="#777c84" strokeWidth="1.2" opacity=".8">
            <path d="M110 145 L110 355 M140 130 L140 340 M170 116 L170 325" />
            <path d="M240 88 L240 305 M270 101 L270 320 M300 114 L300 334 M370 126 L370 360 M405 141 L405 375 M440 156 L440 390" />
            <path d="M85 185 L210 120 L465 226 M85 235 L210 170 L465 276 M85 285 L210 220 L465 326 M85 335 L210 270 L465 376" />
          </g>
          <g fill="none" stroke="url(#goldLine)" strokeWidth="5" opacity=".95">
            <path d="M105 315 L215 260 L450 355" />
            <path d="M105 265 L215 210 L450 305" />
          </g>
          <g fill="none" stroke="#e34a45" strokeWidth="4" opacity=".9">
            <path d="M125 150 L215 195 L395 275" />
            <path d="M395 275 L395 360" />
          </g>
          <g fill="none" stroke="#49b5d6" strokeWidth="4" opacity=".9">
            <path d="M155 340 L155 205 L280 140" />
            <path d="M280 140 L430 205 L430 340" />
          </g>
          <g fill="#e9bb43">
            <circle cx="215" cy="260" r="5" />
            <circle cx="395" cy="275" r="5" />
            <circle cx="280" cy="140" r="5" />
          </g>
        </g>
      </svg> */}
      <Image src={"/image.png"} alt="BIM building visualization" width={300} height={520} />
      <div className="visual-label bottom">REVIT • NAVISWORKS • BIM 360 • AUTOCAD</div>
    </div>
  );
}
