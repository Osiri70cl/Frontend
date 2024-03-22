type Props = {
  viewBox?: any;
  value?: any;
};

const CustomLabel = ({ viewBox, value }: Props) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="26"
        fontWeight={600}
      >
        {value} %
      </text>
      <text
        x={cx}
        y={cy + 20}
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#74798C"
        fontSize="14"
      >
        de votre <br /> objectif
      </text>
    </g>
  );
};

export default CustomLabel;
