\# React Router Multi-Page Application



A multi-page React application built with React Router, featuring nested routing, dynamic routes, and data fetching.



\## Features



\- Nested routing with a shared layout (Root)

\- Dynamic routes for individual User and Post details

\- Data loading using React Router `loader`

\- Suspense for handling asynchronous data

\- Multiple pages: Home, Mobiles, Laptops, Users, Posts

\- 404 Not Found route handling

\- Clean navigation between pages



\## Tech Stack



\- React (Vite)

\- React Router DOM

\- Fetch API \& JSONPlaceholder

\- Tailwind CSS (for basic styling)



\## Key Concepts Covered



\- `createBrowserRouter` and `RouterProvider`

\- Nested routes and layout components

\- Dynamic route parameters (`:userId`, `:postId`)

\- `loader` for data fetching

\- `useLoaderData` and Suspense

\- Programmatic navigation with `Navigate`

\- Conditional rendering and reusable components



\## Project Structure



\- `Root` – Main layout with header/navigation

\- `Home`, `Moviles`, `Laptops` – Static pages

\- `Users` / `Users2` – List of users (with different data fetching approaches)

\- `UserDetails` – Individual user details (dynamic route)

\- `Posts` / `PostDetails` – Posts listing and details

\- `User` – Single user card component



\## How to Run



```bash

npm install

npm run dev

