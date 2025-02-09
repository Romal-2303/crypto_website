interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const Wallet = ({
  color = "#000000",
  width = "26",
  height = "26",
}: SvgProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 36 36"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>wallet-solid</title>
      <path d="M32.94,14H31V9a1,1,0,0,0-1-1H6A1,1,0,0,1,5,7H5V7A1,1,0,0,1,6,6H29.6a1,1,0,1,0,0-2H6A2.94,2.94,0,0,0,3,6.88v21A4.13,4.13,0,0,0,7.15,32H30a1,1,0,0,0,1-1V26h1.94a.93.93,0,0,0,1-.91v-10A1.08,1.08,0,0,0,32.94,14ZM32,24l-8.58,0a3.87,3.87,0,0,1-3.73-4,3.87,3.87,0,0,1,3.73-4L32,16Z"></path>
      <circle cx="24.04" cy="19.92" r="1.5"></circle>
      <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
  );
};

export default Wallet;
