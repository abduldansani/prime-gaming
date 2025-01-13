const GreyButton = ({ className, children }) => {
  return (
    <button
      className={`rounded-lg py-2 px-6 border-2 border-grey text-grey text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default GreyButton;
