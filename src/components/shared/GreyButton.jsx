const GreyButton = ({ className, children }) => {
  return (
    <button
      className={`rounded-lg border-2 border-grey px-6 py-2 text-lg text-grey ${className}`}
    >
      {children}
    </button>
  );
};

export default GreyButton;
