export interface FunctionData {
  title: string;
  nextFunctionExecId: string;
  id: string;
  displayOrder: number;
  x: number;
  y: number;
  equation?: string;
}


export interface EquationFunctionData {
  [key: string]: FunctionData;
}

export const EquationFunction: EquationFunctionData = {
  "Function:1": {
    title: "Function: 1",
    nextFunctionExecId: "Function:2",
    id: "Function:1",
    displayOrder: 1,
    x: 2,
    y: 0,
    equation: "",
  },
  "Function:2": {
    title: "Function: 2",
    displayOrder: 2,
    nextFunctionExecId: "Function:4",
    id: "Function:2",
    x: 0,
    y: 0,
    equation: "",
  },
  "Function:4": {
    title: "Function: 4",
    nextFunctionExecId: "Function:5",
    displayOrder: 4,
    id: "Function:4",
    x: 0,
    y: 0,
    equation: "",
  },
  "Function:5": {
    title: "Function: 5",
    nextFunctionExecId: "Function:3",
    id: "Function:5",
    displayOrder: 5,
    x: 0,
    y: 0,
    equation: "",
  },
  "Function:3": {
    title: "Function: 3",
    displayOrder: 3,
    nextFunctionExecId: "-",
    id: "Function:3",
    x: 0,
    y: 0,
    equation: "",
  },
};
