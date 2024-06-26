const SilverType = (props: object) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <circle cx={8} cy={8} r={8} fill="url(#pattern0_8834_10899)" />
    <defs>
      <pattern
        id="pattern0_8834_10899"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_8834_10899" transform="scale(0.0333333)" />
      </pattern>
      <image
        id="image0_8834_10899"
        width={30}
        height={30}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)
export default SilverType