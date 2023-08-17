import { log } from "console";
import React from "react";
import Select from "react-select";

function Dropdown({
  options,
  label,
  defualtValue,
  setValue,
}: {
  label: string;
  options: Array<{ value: string; label: string }>;
  defualtValue: { value: string; label: string } | null;
  setValue: Function;
}) {
  return (
    <div className="dropdown">
      <label className="input-field-label">{label}</label>
      <Select
        options={options}
        isSearchable={false}
        defaultValue={defualtValue}
        placeholder={"בחר"}
        onChange={() => {}}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: "2vmin",
            height: "5vmin",
            borderRadius: "1.6vmin",
            maxHeight: "5vmin",
          }),
        }}
      />
    </div>
  );
}

export default Dropdown;
