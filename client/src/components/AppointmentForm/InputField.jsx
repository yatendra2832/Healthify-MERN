// InputField.js
import React from "react";

const InputField = ({
  label,
  name,
  type,
  options,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="form-group col-md-8 col-lg-6 mb-2">
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <select
          className="form-control"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

export default InputField;
