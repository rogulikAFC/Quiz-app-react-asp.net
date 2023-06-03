import "./Checkbox.css";

export default function Checkbox({ title, blockName, register }) {
  return (
    <label className={`checkbox form__checkbox`}>
      <input
        type="checkbox"
        className="checkbox__input"
        name={name}
        {...register}
      />

      <span className="checkbox__mark"></span>

      {title}
    </label>
  );
}
