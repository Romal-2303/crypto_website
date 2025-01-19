interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const ManIcon = ({
  width = "26",
  height = "26",
  color = "white",
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 131.3"
      data-testid="base-icon-svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M71.6 131.3c1 0 2.1-.3 3.1-.8 3.9-1.8 5.5-6.2 3.6-10.1 0 0-14.3-32.7-16.9-44.7-1-4.2-1.6-15.3-1.8-20.5 0-1.8 1-3.4 2.6-3.9l32-9.6c3.9-1 6.2-5.5 5.2-9.4-1-3.9-5.5-6.2-9.4-5.2 0 0-29.6 9.6-40.3 9.6-10.4 0-39.8-9.4-39.8-9.4-3.9-1-8.3.8-9.6 4.7-1.3 4.2 1 8.6 5.2 9.6l32 9.6c1.6.5 2.9 2.1 2.6 3.9-.3 5.2-.8 16.4-1.8 20.5-2.6 12-16.9 44.7-16.9 44.7-1.8 3.9 0 8.3 3.6 10.1 1 .5 2.1.8 3.1.8 2.9 0 5.7-1.6 6.8-4.4l15.3-31.2L64.8 127c1.3 2.7 3.9 4.3 6.8 4.3z"
      ></path>
      <circle
        xmlns="http://www.w3.org/2000/svg"
        cx="50.3"
        cy="14.6"
        r="14.6"
      ></circle>
    </svg>
  );
};

export default ManIcon;
