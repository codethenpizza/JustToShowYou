import React from "react";

interface IFormCheckboxProps {
  label: string,
  isChecked: boolean,
  onCheckboxChange: () => any
}

export const FormCheckbox: React.FC<IFormCheckboxProps> = ({label, isChecked, onCheckboxChange}) => {
  return (
    <label >
      <input
        type="checkbox"
        name={label}
        checked={isChecked}
        onChange={onCheckboxChange}
      />
    </label>
  )
};