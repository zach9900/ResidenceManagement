import React, { useState } from "react";

function InputField({
  fieldName,
  inputType,
}: {
  fieldName: string;
  inputType: string;
}) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-field-container">
      <label className="input-field-label">{fieldName}</label>
      <input
        className="input-field"
        value={inputValue}
        type={inputType}
        placeholder={fieldName}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default InputField;
