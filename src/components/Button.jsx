const Button = ({ label, btnType, btnClass, btnClick }) => {
  return (
    <button type={btnType} className={btnClass} onClick={btnClick}>
      {label}
    </button>
  );
};

export default Button;