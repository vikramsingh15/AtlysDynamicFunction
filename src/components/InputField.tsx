import React from "react";

interface InputFieldProps {
  initialValue: number;
  onInitialChange: (value: number) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  initialValue,
  onInitialChange,
}) => {
  return (
    <div className="">
      <div className="inputContainer">
        {/* <label>Initial Value of x</label> */}
        <input
          type="number"
          value={initialValue}
          onChange={(e) => onInitialChange(Number(e.target.value))}
          className="customInput"
        />

        <div className="divider" />
        <span className="radioContainer">
          <span className="radioInnerCircle" />
        </span>
      </div>
    
    </div>
  );
};

export default InputField;
