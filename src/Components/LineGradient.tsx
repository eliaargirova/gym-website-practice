interface LineGradientProps {
  width?: string;
}

const LineGradient: React.FC<LineGradientProps> = ({ width = "w-full" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};

export default LineGradient;