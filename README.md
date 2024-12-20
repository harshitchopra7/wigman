# Wingman Coding Challenge

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Demo](#demo)
4. [Getting Started](#getting-started)
5. [Code Structure](#code-structure)
6. [Technologies Used](#technologies-used)
7. [Testing and Quality Assurance](#testing-and-quality-assurance)
8. [Contact](#contact)

---

## Project Overview

This repository is my submission for the Wingman Coding Challenge for the Frontend Engineering Role. The goal was to create a pixel-perfect, responsive implementation of the provided Figma design using modern technologies, adhering to best practices in code quality and structure.

The app simulates a live shopping assistance platform, showcasing my ability to build scalable, user-friendly frontend interfaces.

---

## Features

- **Pixel-Perfect Design**: Faithfully reproduced the Figma design with exact spacing, colors, and layout.
- **Responsive UI**: Ensures seamless experience across desktop, tablet, and mobile devices.
- **Mock API Data**: Used mock data closely mimicking real-world API responses to populate the UI.
- **Tailwind CSS Styling**: Implemented efficient and scalable styling.
- **Sorting**: Interactive table sorting for better usability.
- **Pagination**: Efficiently handles large datasets with server-like pagination.

### Bonus Features

- Sorting by multiple table columns.
- Pagination integrated with mock data to simulate real-world scenarios.

---

## Demo

- **Live Demo**: [Deployed Application](https://wingman-g4e2.vercel.app/)

---

## Getting Started

Follow the steps below to run the project locally:

### Prerequisites

- Ensure you have Node.js (version 16 or above) installed.
- Install a package manager like npm or Yarn.

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo-link.git
   cd your-repo-link

2. **Install Dependencies**

   ```bash
   npm install

3. **Run the Development Server**

   ```bash
   npm run dev

4. **Build for Production

   ```bash
   npm run build
   npm start

---

### Code Structure

pages/
├── api/             # API routes for server-side functionality
├── index.js         # Landing page
├── other-pages.js   # Additional pages (if any)
components/
├── Header.js        # Header component
├── Table.js         # Table component with sorting & pagination
├── Chatbot.js       # Chatbot UI component
data/
├── mockData.js      # Mock data simulating API responses
styles/
├── globals.css      # Global styles
├── tailwind.css     # Tailwind setup
utils/
├── pagination.js    # Helper functions for pagination logic
├── sorting.js       # Helper functions for sorting logic

---

### Technologies Used

- Next.js: Framework for server-side rendering and static site generation.
- React: Core library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for efficient styling.
- JavaScript: Programming language used for the logic and interactivity.
- Vercel: Deployment platform for modern web applications.

---

### Manual Testing

- Verified design accuracy by cross-referencing the Figma file.
- Tested responsiveness on multiple devices (desktop, tablet, mobile).
- Ensured sorting and pagination functionality worked seamlessly.

---

### Code Quality

- Followed industry best practices for file organization and naming conventions.
- Ensured modularity for scalability and reusability of components.

---

### Contact

- Email: chopraharshit0909@gmail.com
- LinkedIn: https://www.linkedin.com/in/harshit-chopra7/
