import React from "react";

function Input({ label, placeholder, type, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          border
          rounded-lg
          px-4
          py-2
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
}

export default Input;

