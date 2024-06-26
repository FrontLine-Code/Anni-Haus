const DrugType = (props: object) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <circle cx={8} cy={8} r={8} fill="url(#pattern0_8834_10898)" />
    <defs>
      <pattern
        id="pattern0_8834_10898"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_8834_10898" transform="scale(0.0333333)" />
      </pattern>
      <image
        id="image0_8834_10898"
        width={30}
        height={30}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default DrugType;
