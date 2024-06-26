const PlayVideo = (props: object) => (
  <svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M7.13174 74.75C12.5801 84.1868 20.99 91.5621 31.0572 95.732C41.1244 99.902 52.2862 100.634 62.8115 97.8133C73.3369 94.9931 82.6375 88.7786 89.271 80.1337C95.9044 71.4888 99.5 60.8966 99.5 50C99.5 39.1034 95.9044 28.5112 89.271 19.8663C82.6375 11.2214 73.3369 5.00693 62.8115 2.18667C52.2862 -0.633587 41.1244 0.0979966 31.0572 4.26796C20.99 8.43792 12.5801 15.8132 7.13175 25.25"
      stroke="#3B3B3B"
    />
    <g opacity={0.4}>
      <path
        d="M40 35L63.3333 50L40 65V35Z"
        stroke="#3B3B3B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
)
export default PlayVideo;