const Court = () => {
  return (
    <svg viewBox="0 0 500 470" width="500" height="470">
      <g fill="none" stroke="#333333" strokeWidth={1}>
        {/* Outer boundary */}
        <rect x={0} y={0} width={500} height={470} />

        {/* Paint / key (16ft wide x 19ft tall) */}
        <rect x={170} y={0} width={160} height={190} />

        {/* Free throw circle (radius 6ft at top of key) */}
        <circle cx={250} cy={190} r={60} />

        {/* Restricted area arc (4ft radius from basket) */}
        <line x1={210} y1={0} x2={210} y2={52.5} />
        <line x1={290} y1={0} x2={290} y2={52.5} />
        <path d="M210,52.5 A40,40 0 0 0 290,52.5" />

        {/* Basket */}
        <circle cx={250} cy={52.5} r={7.5} />

        {/* Three point line */}
        <line x1={30} y1={0} x2={30} y2={140} />
        <line x1={470} y1={0} x2={470} y2={140} />
        <path d="M30,140 A237.5,237.5 0 0 0 470,140" />

        {/* Half court circle (radius 6ft) */}
        <path d="M190,470 A60,60 0 0 1 310,470" />
      </g>
    </svg>
  );
};

export default Court;
