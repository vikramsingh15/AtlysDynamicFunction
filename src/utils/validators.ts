export const evaluateEquation = (equation: string, x: number): number => {
  
  // Step 1: Insert * between number and x (e.g., 2x -> 2*x)
  const fixedEquation = equation.replace(/(\d)x/g, "$1*x");

  // Step 2: Sanitize the input to allow only valid characters and replace x with value
  const sanitizedEquation = fixedEquation
    .replace(/[^-()\d/*+.x^]/g, "") // Allow only valid characters
    .replace(/x/g, x.toString());   // Replace 'x' with the actual value

  console.log({ sanitizedEquation });

  // Step 3: Evaluate the equation safely
  // eslint-disable-next-line no-new-func
  return Function(`"use strict"; return (${sanitizedEquation});`)();
};
