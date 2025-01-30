const PrimaryButton = ({ className, type, children }) => {
  const fill = (
    <button className={`bg-primary hover:bg-primaryHover ${className}`}>
      {children}
    </button>
  );
  const outline = (
    <button
      className={`border-2 border-primary text-primary hover:border-primaryHover hover:text-primaryHover ${className}`}
    >
      {children}
    </button>
  );
  return type === "fill" ? fill : outline;
};

export default PrimaryButton;
