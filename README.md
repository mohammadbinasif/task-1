# Task 1: DayFlow — Simple Task Manager

A responsive, single-page task manager built with plain **HTML, CSS, and
JavaScript** — no frameworks, no build tools.

> DecodeLabs Internship · Task 1

## What it does

- Add tasks from the form; they render as a live list
- Mark tasks complete / delete them
- Empty-state message when there are no tasks
- Responsive navigation with an accessible hamburger menu
  (`aria-expanded`, keyboard-friendly)

## Files

| File | Role |
|---|---|
| `index.html` | Page structure and content |
| `styles.css` | Layout, responsive design, dark theme |
| `script.js` | DOM handling: nav toggle + task CRUD in the page |

## Run it

Open `index.html` in any browser — that's it. No server or install needed.

## Concepts practiced

- Selecting and updating the DOM (`getElementById`, `querySelectorAll`)
- Event listeners (`click`, `submit`)
- Toggling classes for state (`classList.toggle`)
- Rendering lists dynamically from JS data
- Keeping UI in sync with `aria-*` attributes
