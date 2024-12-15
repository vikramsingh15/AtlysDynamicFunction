import React, { useState, useEffect } from "react";
import FunctionCard from "./FunctionCard";
import InputField from "./InputField";
import { evaluateEquation } from "../utils/validators";
import { EquationFunction, EquationFunctionData } from "../constants/functionsData";
import OutputField from "./OutputField";

const FunctionChain: React.FC = () => {
  const [initialValue, setInitialValue] = useState<number>(2);
  const [results, setResults] = useState<EquationFunctionData>(EquationFunction);


  useEffect(() => {
    if (initialValue !== undefined) {
      const updatedResults: EquationFunctionData = structuredClone(results);

      const arrResults = Object.values(updatedResults);
      let func = arrResults.find((func) => func.displayOrder === 1);

      // @ts-ignore
      func.x = initialValue
      while (func && func.equation) {
        let value: number;
        try {
          value = evaluateEquation(func.equation, func.x);
        } catch (error) {
          value = NaN;
        }
        const nextFunctionExecId: string = func.nextFunctionExecId;
        func.y = value;
        if (nextFunctionExecId !== "-") {
          updatedResults[nextFunctionExecId].x = value;
        }

        func = updatedResults[nextFunctionExecId]
      }
      setResults(updatedResults);

    }
  }, [initialValue])



  const handleUpdate = (id: string, equation: string) => {
    const updatedResults: EquationFunctionData = structuredClone(results);
  
    updatedResults[id].equation = equation;
    let func = updatedResults[id];
    while (func && func.equation) {
      let value: number;
      try {
        value = evaluateEquation(func.equation, func.x);
      } catch (error) {
        value = NaN;
      }
      const nextFunctionExecId: string = func.nextFunctionExecId;
      func.y = value;
      if (nextFunctionExecId !== "-") {
        updatedResults[nextFunctionExecId].x = value;
      }

      func = updatedResults[nextFunctionExecId]
      
    }
    setResults(updatedResults);
  };

  const finalResult = (): number => {
    const result = Object.values(results).find((res) => res.nextFunctionExecId === "-");
    return result?.y || 0;
  };

  return (
    <>
      
      <div className="container">
        <InputField
          initialValue={initialValue}
          onInitialChange={setInitialValue}
        />

        
        {Object.values(results)
          .sort((a, b) => a.displayOrder - b.displayOrder)
          .map((func) => (
            <FunctionCard
              key={func.id}
              id={func.id}
              title={func.title}
              nextFunction={func.nextFunctionExecId}
              onUpdate={handleUpdate}
              result={func.y}
              input={func.x}
            />
          ))}

        <OutputField
          finalOutput={finalResult()}
        />

      </div>
    </>
  );
};

export default FunctionChain;
