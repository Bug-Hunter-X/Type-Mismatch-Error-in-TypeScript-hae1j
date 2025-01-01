# Type Mismatch Error in TypeScript

This repository demonstrates a common type mismatch error in TypeScript and provides a solution.

## Description

The `greeter` function is defined to accept a string argument. However, an array is passed as an argument, resulting in a type error.

## Solution

The solution involves either using a type assertion to tell the compiler that the array should be treated as a string, or performing type checking before passing the argument to the function.

## How to run

1. Clone this repository.
2. Navigate to the repository directory.
3. Compile the TypeScript code using `tsc bug.ts` and `tsc bugSolution.ts`
4. Run the compiled Javascript code using `node bug.js` and `node bugSolution.js`
