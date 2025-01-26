interface SvgProps {
  color?: string;
  height?: string;
  width?: string;
}

const CheckMark = ({
  height = "24",
  width = "24",
  color = "white",
}: SvgProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      id="check"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="primary"
        d="M10,18a1,1,0,0,1-.71-.29l-5-5a1,1,0,0,1,1.42-1.42L10,15.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,10,18Z"
      ></path>
    </svg>
  );
};

export default CheckMark;
