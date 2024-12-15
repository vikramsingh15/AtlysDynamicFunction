import React, { useState } from "react";

interface FunctionCardProps {
  id: string;
  title: string;
  nextFunction: string;
  onUpdate: (id: string, equation: string) => void;
  result: number;
  input: number;
}

const FunctionCard: React.FC<FunctionCardProps> = ({
  id,
  title,
  nextFunction,
  onUpdate,
  result,
  input,
}) => {
  const [equation, setEquation] = useState("");

  const handleEquationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEquation = e.target.value;
    setEquation(newEquation);
    onUpdate(id, newEquation);
  };

  return (
    <div className="card">

      <div className="titleContainer">
        <img src="/images/title.png" alt="Example" className="function-image" />
        <h3 className="functionTitle">{title}</h3>
      </div>
      
      <label>Equation</label>
      <input
        type="text"
        value={equation}
        onChange={handleEquationChange}
        placeholder="e.g., x*2"
      />
      <label>Next function</label>
      <select disabled>
        <option>{nextFunction}</option>
      </select>
      <div className="ioContainer">
        <p>
          <span className="radioContainer">
            <span className="radioInnerCircle" />
          </span>
          Input
        </p>
        <p>
          Output
          <span className="radioContainer">
            <span className="radioInnerCircle" />
          </span> 
        </p>
      </div>
      
    </div>
  );
};

export default FunctionCard;
