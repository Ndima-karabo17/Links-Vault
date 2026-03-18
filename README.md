# Links Vault

A professional-grade link management dashboard designed for users who need a centralized, aesthetic, and secure place to store their most important web connections. Links Vault moves away from cluttered browser bookmarks and into a dedicated workspace that feels like a modern product.

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Design Decisions](#design-decisions)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Routing](#routing)
- [Visuals](#visuals)
- [Roadmap](#roadmap)
- [Project Status](#project-status)

---

## Description

Links Vault is a single-page React application that gives users a dedicated workspace to store, organize, and revisit their most important web links. Instead of reloading the browser on every action, React Router swaps components instantly for a smooth, app-like experience. Users can register, log in, add links with context (title, description, tags), and manage their personal link library — all persisted in localStorage.

---

## Features

### Authentication
- Create a new account with email and password
- Password and confirm password validation on sign up
- Sign in with registered credentials and agree to Terms and Privacy
- Redirects automatically after login to the Add Link page
- Logout button available from the Link View page

### The Vault — Add Link
- Structured form that captures not just a URL but full context:
  - Title
  - Description
  - Tags
- URL format validation on submission
- Success message on adding a link, then redirects to Link View

### The Library — Link View
- Persistent gallery of all saved links loaded from localStorage
- Edit link details with the Edit Details button
- Visit the saved URL directly with the Visit Site button
- Remove any link from the collection with the X button
- Add New Link button available in the top right header

### Navigation
- Single-page app experience powered by React Router
- No full page reloads — components swap instantly
- Landing Page introduces the app and links to auth pages

---

## Design Decisions

The app uses a baby blue and white color theme chosen to project trust, clarity, and productivity. The Auth and Dashboard sections intentionally use no images to keep the user experience focused entirely on the data. The Link View page uses a CSS Grid system that automatically calculates how many columns can fit on screen, ensuring a clean layout across all screen sizes.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [React](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [React Router DOM](https://reactrouter.com/) | Client-side routing |
| [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) | Responsive link gallery layout |
| [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) | Persistent link and user storage |

---

## Requirements

Before installing, make sure you have the following:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ndima-karabo17/Links-Vault.git

# 2. Navigate into the project folder
cd Links-Vault

# 3. Install dependencies
npm install

# 4. Install React Router DOM
npm install react-router-dom

# 5. Start the development server
npm run dev

# 6. Open the link shown in the terminal in your browser
```

---

## Usage

Follow this workflow to use the app:

1. Arrive at the **Landing Page** — read about the app and who created it
2. Click the **Get Started** button on the top right
3. Fill in the **Sign Up** form with your email and password — make sure password and confirm password match
4. Click **Sign Up** — you will be redirected to the Sign In page
5. Enter your credentials, check the Terms and Privacy checkbox, and click **Sign In**
6. You will be redirected to the **Add Link** page
7. Fill in the link form — refer to the placeholders for guidance on what each field expects
8. Click **Add to Collection** — a success message will appear and you will be redirected to **Link View**
9. Your saved link will appear in the gallery with options to **Edit Details**, **Visit Site**, or remove it with the **X** button
10. Use the **Add New Link** button in the top right to add more links
11. Click **Logout** when you are done

---

## Routing

Client-side routing is handled by React Router:

| Path | Page | Description |
|------|------|-------------|
| `/` | Landing Page | Introduction and calls to action |
| `/register` | Sign Up | Create a new account |
| `/login` | Sign In | Log in to your account |
| `/add-link` | Add Link (The Vault) | Add a new link with context |
| `/links` | Link View (The Library) | View, edit, and delete saved links |

---

## Visuals

### Landing Page
<img width="1400" height="800" alt="landing page" src="https://github.com/user-attachments/assets/e77a8cbd-61f4-4cde-8842-1b3632f65911" />

### Sign Up Page
<img width="1400" height="800" alt="Sign up page" src="https://github.com/user-attachments/assets/ece1e84d-2ce1-49f1-8821-53504ceadbd7" />

### Sign In Page
<img width="1400" height="800" alt="Sign in page" src="https://github.com/user-attachments/assets/945cdeda-cd3b-4cd4-b69a-d1704d828be7" />

### Redirection View
<img width="1400" height="800" alt="Redirecting view" src="https://github.com/user-attachments/assets/b81c7972-61ff-488b-9d33-b3f28ea0bcb1" />

### Add Link Page
<img width="1400" height="800" alt="Add Link Page" src="https://github.com/user-attachments/assets/ecc48f91-09e3-496e-a20d-1de7199c6ccd" />

### Link View Page
<img width="1400" height="800" alt="Link View Page" src="https://github.com/user-attachments/assets/9591fca7-3e28-45e3-af13-50b35ec1592e" />

---

## Roadmap

- [ ] Connect to a backend API for multi-device sync
- [ ] Add tag-based filtering in the Link View
- [ ] Search links by title or description
- [ ] Import bookmarks from browser
- [ ] Share a link collection with others
- [ ] Dark mode support

---

## Project Status

This project is currently in active development. Core features including authentication, link management, and persistent storage are fully functional. Backend integration and advanced filtering are planned for future updates.

---

## Author

Built by Ndima Mhangwani
GitHub: [Ndima-karabo17](https://github.com/Ndima-karabo17)
