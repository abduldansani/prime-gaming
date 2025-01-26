const PrimaryButton = ({ className, type, children }) => {
  const fill = (
    <button className={`bg-primary hover:bg-primaryHover ${className}`}>
      {children}
    </button>
  );
  const outline = (
    <button
      className={`border-2 border-primary hover:border-primaryHover hover:text-primaryHover text-primary ${className}`}
    >
      {children}
    </button>
  );
  return type === "fill" ? fill : outline;
};

export default PrimaryButton;
