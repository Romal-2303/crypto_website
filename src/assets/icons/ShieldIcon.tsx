interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
}

const ShieldIcon = ({
  color = "#000000",
  width = "45",
  height = "45",
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3301 5.67L6.59009 17.41C6.15009 17.85 5.41008 17.79 5.05008 17.27C3.81008 15.46 3.08008 13.32 3.08008 11.12V6.73C3.08008 5.91 3.70008 4.98 4.46008 4.67L10.0301 2.39C11.2901 1.87 12.6901 1.87 13.9501 2.39L17.9901 4.03999C18.6601 4.30999 18.8301 5.17 18.3301 5.67Z"
        fill={"rgba(21, 212, 107)"}
      />
      <path
        opacity="1"
        d="M19.27 7.04012C19.92 6.49012 20.91 6.96011 20.91 7.81011V11.1201C20.91 16.0101 17.36 20.5901 12.51 21.9301C12.18 22.0201 11.82 22.0201 11.48 21.9301C10.06 21.5301 8.74 20.8601 7.61 19.9801C7.13 19.6101 7.08001 18.9101 7.50001 18.4801C9.68001 16.2501 16.06 9.75012 19.27 7.04012Z"
        fill={"rgba(21, 212, 107)"}
      />
    </svg>
  );
};

export default ShieldIcon;
