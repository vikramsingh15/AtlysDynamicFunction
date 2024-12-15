import React from "react";

interface InputFieldProps {
  
    finalOutput: number;
}

const InputField: React.FC<InputFieldProps> = ({
    finalOutput,
}) => {
    return (
        <div className="">
            <div className="outputContainer">

                <span className="radioContainer">
                    <span className="radioInnerCircle" />
                </span>

                <div className="divider" />

                {/* <label>Initial Value of x</label> */}
                <input
                    type="text"
                    disabled
                    value={finalOutput}
                    className="customInput"
                />

                
            </div>
           
        </div>
    );
};

export default InputField;
