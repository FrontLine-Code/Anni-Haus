const GreenType = (props: object) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <circle cx={8} cy={8} r={8} fill="url(#pattern0_8834_10897)" />
    <defs>
      <pattern
        id="pattern0_8834_10897"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_8834_10897" transform="scale(0.0333333)" />
      </pattern>
      <image
        id="image0_8834_10897"
        width={30}
        height={30}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)
export default GreenType;