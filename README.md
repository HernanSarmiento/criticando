📝 CRITICANDO
















CRITICANDO is a full-stack web application designed to simulate a journalist blog where users can share their opinion on various news topics or create their own posts. The application provides an interactive and dynamic environment, allowing users to manage their own articles and commentaries.

This project is a great demonstration of how to build a GraphQL API, user authentication, and a responsive frontend UI, all integrated with modern technologies.
</hr>
🎯 Project Goals

CRITICANDO demonstrates:

Full-stack development with React & Node.js

GraphQL API integration using Apollo

JWT authentication for secure user sessions

State management using React Redux

Form validation with React Hook Form

Responsive UI built with Tailwind CSS

Dynamic transitions and animations using GSAP

💡 Ideal for a blogging platform, with modern tools for performance, scalability, and security.
</hr>
🚀 Features

Share your opinions and create your own blog posts

Comment and engage with existing news feeds

Secure user authentication using JWT tokens

Simple, clean UI with smooth transitions and animations

SPA navigation with React Router

⚠️ Note: This project is primarily backend-driven, meaning posts are managed via the backend API.
</hr>
🛠️ Tech Stack
Frontend

React.js – User Interface

Tailwind CSS – Responsive and utility-first styling

Apollo Client – Fetching data from a GraphQL API

React Redux – Managing global application state (user authentication, posts)

GSAP – Animations and transitions for a dynamic UX

React Router DOM – SPA navigation

React Hook Form – Validation for user forms

Backend

Node.js – Backend runtime

Express.js – RESTful API server

Apollo GraphQL – GraphQL API server

MongoDB – NoSQL database to store posts and user data

JWT (JSON Web Tokens) – Authentication & session management

Bcrypt – Secure password hashing and encryption
</hr>
📂 Project Structure
criticando/
├── src/        # Frontend (React)
├── server/     # Backend (Express & Apollo GraphQL)
└── README.md
</hr>
⚙️ Installation & Setup

To get the project running locally, follow these steps:

1️⃣ Frontend Setup
cd criticando/src
npm install
npm run dev

2️⃣ Backend Setup
cd criticando/server
npm install
npm start

3️⃣ Running the Application

Both the frontend and backend should be running in separate terminals.

Start the backend server:
cd server
npm start

Start the frontend:
cd src
npm run dev
</hr>
🧠 Architectural Decisions

GraphQL API for flexible, efficient data fetching

JWT Authentication for secure user sessions

Apollo Client for managing GraphQL queries and caching on the frontend

React Redux to manage global state (e.g., user sessions, posts)

Tailwind CSS for a responsive and modern user interface

GSAP to add dynamic animations and smooth page transitions
</hr>
🧪 Possible Improvements

Add a user profile page to manage posts and comments

Implement pagination for posts and comments

Enhance the commenting system with nested replies

Mobile responsiveness testing and optimization

Deployment (Docker, Vercel, or Railway)
