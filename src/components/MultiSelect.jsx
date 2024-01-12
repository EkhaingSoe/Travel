import React from "react";

const MultiSelect = ({ options, value, onChange, placeholder }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: state.isFocused ? "0 0 10px rgba(0, 0, 0, 0.2)" : "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#F97316" : "white",
      color: state.isSelected ? "white" : "black",
    }),
  };
  return (
    <Select
      options={options}
      isMulti
      value={value}
      onChange={onChange}
      className="w-full md:w-[150px] text-xs"
      
      placeholder={placeholder}
    />
  );
};

export default MultiSelect;
