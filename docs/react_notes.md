## Basics

- npm create vite@<version> : Creates the project
- npm install : Installs the package in package.json
- npm run dev: Runs the dev server
- vite.config.js file: For running the app
- node_modules: Contains all modules to run our app. Need not worry to run our app

## Components in react:

- Name of component should always start with capital letter
- It is a JS function which returns jsx, which looks like HTML which is not exactly html
- components can be created anywhere, but good practice is to create all components inside a components folder.
- Modularity of code
- Can be tested one by one
- Abstraction: Hides away code complexity and you can use it like a black box

## What is JSX:

- Stands for javascript extension
- Helps to use javascript with HTML
- Should only return one element.So mostly enclosed within div element

## Props/ properties:

- values passed to the component to make them dynamic
- props are objects so use . operator to access value in component
- They can be passes like HTML properties
- YOu can use destructuring like const { name, message } = props or in the function itself as parameter.
- props are immutable and you cannot change its value in the component.
- You can pass anything in props be it array, function or any other component.

## React.StrictMode loads the code twice. It is used in dev for debugging purpose. When in prod remove this.

## Element variable:

- A variable which can be assigned a component or jsx element

## Ternary operator:

- Used for inline codition
- var = <condition>? <True value> : <False value>

## Fragments:

- Can skip div elements eg if the component is a list item.
  -Use <> </>

## Event handling:

- onClick instead of onclick
  - onClick is jsx element and not html
  - use jsut function name and not () with function
- You can pass even through a function to a function
- For submit use e.preventDefault() to stop default behaviour

## State:

- is used to store the information about component to control behaviour of component
- It is mutable
- It is like a local variable declared inside the function
- It is contained inside the component.
- Whenever state value changes, the entire component renders
- way to create state vaiable:
  - const [count, setCount] = useState(0);
  - setCount is the function which will change the value of the variable
  - useState() is used to make `count` a state variable
  - You can set default value by passing the value to useState(0)
- You can use object to save multiple related state variables. In this way you won't have to write multile state variables
- spread operator ... is like \*\*dict in python
