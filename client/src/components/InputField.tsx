import React from "react";

function InputField({
  fieldName,
  inputValue,
  setValue,
}: {
  fieldName: string;
  inputValue: string;
  setValue: Function;
}) {
  return (
    <div className="input-field-container">
      <label className="input-field-label">{fieldName}</label>
      <input
        className="input-field"
        value={inputValue}
        type={fieldName === "סיסמה" ? "password" : "text"}
        placeholder={fieldName}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default InputField;
