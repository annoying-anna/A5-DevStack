# Dev Stack Builder

A modern React web application for discovering, comparing, and assembling the perfect technology stack for your next project.

**Live Site:** https://annoying-anna.github.io/A5-DevStack/

## Features

- Browse 15+ curated technologies across 7 categories
- Add/remove technologies to your personal stack
- LocalStorage persistence for your selections
- Responsive design with mobile support
- Toast notifications for user actions
- Dark-themed UI with gradient accents

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool
- **Tailwind CSS 3** — Utility-first styling
- **DaisyUI 4** — Component library
- **react-toastify** — Toast notifications

## Getting Started

```bash
npm install
npm run dev
```

## React Q&A

### 1. What is a component in React?

A component is a reusable, independent piece of UI that accepts inputs (props) and returns React elements describing what should appear on screen. Components can be function-based or class-based, and they can be composed together to build complex interfaces. In this project, `Navbar`, `Hero`, `TechnologyCard`, and `YourStack` are all components.

### 2. What is the difference between state and props?

**Props** (properties) are read-only data passed from a parent component to a child component. They flow one way — downward. **State** is mutable data managed within a component itself using `useState`. When state changes, React re-renders the component. For example, `stack` is state in `App.jsx`, while `technologies` and `onAdd` are props passed to `TechnologyCard`.

### 3. What is the Virtual DOM and why does React use it?

The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to optimize rendering — when state changes, React creates a new Virtual DOM tree, diffs it against the previous one, and only updates the minimal set of real DOM nodes needed. This batch updating is faster than directly manipulating the real DOM for every change.

### 4. What are React Hooks? Name the ones you used.

Hooks are functions that let function components use React features like state and lifecycle. In this project I used:
- **useState** — for managing `stack` and `mobileMenuOpen` state
- **useEffect** — for loading/saving stack to localStorage on mount and when stack changes

### 5. What is the difference between controlled and uncontrolled components?

In a **controlled** component, React state is the single source of truth — form values are managed via state and updated via onChange handlers. In an **uncontrolled** component, the DOM itself holds the state, accessed via refs. This app primarily uses controlled patterns since all interactive state flows through React state in `App.jsx`.

### 6. What is the purpose of keys in React lists?

Keys help React identify which items in a list have changed, been added, or removed. They give each element a stable identity so React can efficiently reconcile the Virtual DOM. Without keys, React would re-render every item in a list when one changes. In this project, `key={tech.id}` is used when mapping technologies to cards.

### 7. What is prop drilling and how can it be avoided?

Prop drilling occurs when you pass props through multiple layers of components that don't need them, just to reach a deeply nested child. It can be avoided using **Context API**, **Redux**, or state management libraries. In this project, state lives in `App.jsx` and is passed down to direct children — a reasonable pattern for this scale. For larger apps, React Context or a state library would reduce the prop passing.

## Author

Himel Barman — Programming Hero B14 Batch
