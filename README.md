# 🧱 Dev Stack Builder

A modern React application that lets developers discover, compare, and assemble their ideal technology stack for any project. Built with React, Tailwind CSS, DaisyUI, and Vite.

## ✨ About This Project

Dev Stack Builder is an interactive tech-stack curator platform. Users can browse through a curated collection of 15 development technologies spanning multiple categories — from frontend frameworks to DevOps tools — and build their personalized stack by adding items with a single click. The app features responsive design, real-time state management, toast notifications, and a clean dark-mode UI.

## 🛠️ Technologies Used

- **React.js** — Core UI library with functional components and hooks
- **Tailwind CSS** — Utility-first CSS framework for styling
- **DaisyUI** — Component library built on Tailwind CSS
- **Vite** — Fast build tool and development server
- **React-Toastify** — Toast notification library for user feedback
- **JSON** — External data file for technology information

## 🚀 Key Features

1. **Interactive Stack Builder** — Add or remove technologies from your personal stack with real-time visual feedback, duplicate detection, and a persistent sidebar panel
2. **Responsive Dark UI** — Fully responsive across mobile, tablet, and desktop with a cohesive dark theme and an orange-pink-violet gradient brand identity
3. **Curated Technology Catalog** — 15 technologies across 7 categories (Frontend, Backend, Database, Language, Styling, DevOps, Tools) with ratings, difficulty levels, badges, and detailed descriptions

## 📋 React Concepts Applied

This project demonstrates core React concepts including JSX, props drilling, component composition, `useState` for local state management, `useEffect` for data fetching simulation, conditional rendering for empty states and loading indicators, and array methods like `.map()`, `.some()`, and `.filter()` for list rendering and state updates.

---

## 📤 Deployment

- **Live Site**: https://polite-cupcake-7f1307.netlify.app
- **GitHub Repository**: (add your repo link here)

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript files. It makes component code more readable and intuitive by describing what the UI should look like alongside the logic that powers it. React uses JSX to create virtual DOM elements efficiently.

### 2. What is the difference between props and state?

**Props** are read-only values passed from a parent component to a child component — they control how a component behaves and looks from the outside. **State** is data managed within a component itself that can change over time, typically in response to user actions. Props flow downward; state lives internally.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets functional components hold and update local state. In this project, I used it in three places: to manage the list of selected stack items (`stack`), to toggle the mobile navigation menu (`mobileMenuOpen`), and to track loading status while fetching technology data (`loading`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects after a component renders — such as data fetching, subscriptions, or DOM manipulations. I used it to simulate loading the technology JSON data when the app first mounts, updating state once the data is "fetched" so the UI transitions from a loading spinner to the full technology grid.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify which items in a list have changed, been added, or removed. A unique key ensures efficient re-renders and prevents bugs where the wrong elements get updated. In this project, each technology card uses `tech.id` as its key because it is guaranteed to be unique per item.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI output based on certain conditions (like state or props). One example in this project is the **Your Stack sidebar**: when `stack.length === 0`, it displays an empty-state message with an icon and instructions; when items exist, it shows a scrollable list of added technologies with remove buttons.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data flows **down** from parent to child through **props** — you pass values or functions as attributes on a component tag. To send information back up, the parent passes a callback function as a prop, and the child calls that function with the data it wants to share. In this project, `handleAddToStack` and `handleRemoveFromStack` are callbacks passed down to `TechnologyCard`, which calls them when the user clicks add or remove.
