const PrimaryButton = ({ className, type, children }) => {
  const fill = (
    <button className={`bg-primary ${className}`}>{children}</button>
  );
  const outline = (
    <button className={`border-2 border-primary text-primary ${className}`}>
      {children}
    </button>
  );
  return type === "fill" ? fill : outline;
};

export default PrimaryButton;
