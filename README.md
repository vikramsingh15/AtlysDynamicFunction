# Function Chain Calculator

## Overview

This project is a web application that allows users to execute a chain of 5 mathematical functions, with the output (y) of each function serving as the input (x) for the next. The application is built using React and TypeScript, with custom CSS for styling.

## Project Structure

function-chain-calculator
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── FunctionCard.tsx
│   │   ├── FunctionChain.tsx
│   │   ├── InputField.tsx
│   │   └── OutputField.tsx
│   ├── styles
│   │   └── styles.css
│   ├── App.tsx
│   ├── index.tsx
│   └── utils
│       └── validators.ts
├── package.json
├── tsconfig.json
└── README.md

## Components

### FunctionCard.tsx

- Props: `equation` (string), `onChange` (function)
- Renders a text input field for the mathematical equation
- Validates the input to accept only basic arithmetic operations and exponents

### FunctionChain.tsx

- State: `initialValue` (number), `results` (Object of Object)
- Renders the chain of `FunctionCard` components
- Manages the calculation of the final output by chaining the functions

### InputField.tsx

- Props: `value` (number), `onChange` (function)
- Renders an input field for the initial value
- Calls `onChange` when the input value changes

### OutputField.tsx
- Renders overall result

## Styles

### styles.css

Contains custom CSS styles for the application, including styles for the layout and appearance of the function cards and the chaining lines.

## Main Components

### App.tsx

- Renders the `InputField` and `FunctionChain` components
- Manages the state for the initial input value and the equations

### index.tsx

- Entry point for the React application
- Renders the `App` component into the root div in `index.html`

## Utilities

### validators.ts

- `validateEquation`: A function that checks if the input equation contains only basic arithmetic operations and exponents

## Setup and Running the Application

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies using `npm install`
4. Start the development server using `npm start`
5. Open the application in your browser at `http://localhost:3000`

