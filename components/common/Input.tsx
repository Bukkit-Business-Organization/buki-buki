import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
  showLabel?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  accept?: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  placeholder,
  showLabel = true,
  disabled = false,
  defaultValue = "",

  onChange,
}) => {
  return (
    <div className="mb-4">
      {showLabel ? (
        <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
          {label}
        </label>
      ) : (
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
