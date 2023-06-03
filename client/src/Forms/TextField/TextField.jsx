import "./TextField.css";

export function TextField({ title, password, register, hasError }) {
  return (
    <div
      className={`text-field form__text-field ${
        hasError ? "text-field_invalid" : "text-field_valid"
      }`}
    >
      <span className="text-field__title">{title}</span>

      <input
        className="text-field__input"
        style={{ fontSize: "12px" }}
        type={password ? "password" : "text"}
        {...register}
      />
    </div>
  );
}
