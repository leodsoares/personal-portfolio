// Approximate BC outline
// Coordinate mapping: viewBox "0 0 500 450"
//   x = (139 - lon) / 25 * 500  (west = left)
//   y = (60  - lat) / 11 * 450  (north = top)

export default function BcOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d={`
          M 500,450
          L 320,450
          L 292,423
          L 265,393
          L 242,362
          L 222,332
          L 204,304
          L 187,276
          L 200,250
          L 182,224
          L 196,200
          L 176,174
          L 160,150
          L 140,124
          L 118,98
          L 90,70
          L 62,46
          L 40,20
          L 40,0
          L 500,0
          Z
        `}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
