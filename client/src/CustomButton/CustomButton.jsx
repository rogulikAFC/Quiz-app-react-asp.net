import "./CustomButton.css";

function CustomButton({
  color,
  children,
  shadows,
  blockName,
  onClick,
  submit,
}) {
  return (
    <button
      className={`button ${blockName}__button button_color_${color}${
        shadows ? ` button_${color}-with-shadows` : ""
      }`}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

export default CustomButton;
