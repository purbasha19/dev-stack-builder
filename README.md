# Dev Stack Builder

Dev Stack Builder is a responsive website built with React. It helps developers look at technologies and create their own development stack.

Users can look at technology cards see details such, as category, difficulty and rating and add their technologies to a personal stack.

## Live Website

https://dev-stack-builder-ten.vercel.app/



## GitHub Repository

https://github.com/purbasha19/dev-stack-builder

## Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- Vite
- JSON
- React-Toastify

## Features

- Explore different technologies with their icons, descriptions, categories, ratings, and difficulty levels.
- Add technologies to your personal stack and remove them whenever needed.
- Prevent duplicate technologies and show toast notifications for different actions.
- Responsive design for desktop, tablet, and mobile devices.
- Technology data is loaded from a local JSON file.
- Shows a loading message while the data is being fetched.

## How It Works

1. Browse the available technology cards.
2. Click the "Add to Stack" button to select a technology.
3. Selected technologies will appear in the "Your Stack" section.
4. Remove one technology using the remove button.
5. Use the "Remove All" button to clear the complete stack.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write code that looks like HTML inside JavaScript and JSX is really helpful, for this purpose.

In React JSX is used to describe what the user interface looks like. Jsx makes the description very easy to read.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is data managed inside a component. When state changes, React updates the user interface.

### 3. What does the useState hook do, and where did you use it in this project?

In this project I used useState to manage state for:

- Selected technologies

- Technology data

- Loading status

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs code after a component renders.

I used useEffect to fetch the technology data, from the technologies.json` file when the website loads.

### 5. Why does every item in a .map() list need a unique key prop?

The main prop helps React recognize each item in a list.

A unique prop helps React know which item was added, which one was removed and which one was changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering is when you show things on the screen depending on a certain condition.

I used that in the "Your Stack" part.

When nothing is chosen, the website displays:

"Your stack is empty."

When things are chosen it shows the items that were selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component gives data to a child component using props.

A child component can send information back, to the parent by calling a function that was passed through props.

## Project Structure


src/
├── assets/
├── App.jsx
├── main.jsx
└── index.css

public/
└── technologies.json