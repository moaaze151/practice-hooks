import React from "react";
import "./style.css";

export default function InputField(props) {
  const { label, name, type, value, handleChange, isValid, errorMessage } =
    props;
  return (
    <div className="inputContainer">
      <label>{label}</label>
      <input type={type} value={value} name={name} onChange={handleChange} />
      {errorMessage && !isValid(<span className="error">{errorMessage}</span>)}
    </div>
  );
}
