const CalculatorButton = ({ value, onClick }) => {
  return (
    <button id={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default CalculatorButton;
