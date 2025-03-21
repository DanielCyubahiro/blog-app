# React Blog App

## Overview
This is a simple blog application built using React to help understand and practice various features of the library. The app allows users to create, edit, delete, and view posts. It integrates React Router for navigation, Ant Design for UI components, and Axios for data fetching. The project follows a structured approach with reusable components and context for state management.

## Features
- **React Router**: Implements navigation using `react-router-dom`.
- **Context API**: Manages global state using React Context.
- **Dynamic Routing**: Supports dynamic paths for viewing and editing posts.
- **Fetching Data**: Uses Axios to fetch posts from an external API.
- **UI Components**: Leverages Ant Design for styling and interactive components.
- **State Management**: Utilizes `useState` and `useContext` for managing posts.

## Technologies Used
- React.js
- React Router
- Ant Design
- Axios
- JSONPlaceholder API (for mock data)

## Project Structure
```
/src
│── components
│   ├── Post.jsx
│── context
│   ├── DataContext.jsx
│── hooks
│   ├── useAxiosFetch.js
│── layouts
│   ├── Layout.jsx
│── pages
│   ├── HomePage.jsx
│   ├── PostPage.jsx
│   ├── AboutPage.jsx
│   ├── NotFoundPage.jsx
│── App.jsx
│── index.jsx
│── styles.css
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/DanielCyubahiro/blog-app.git
   ```
2. Navigate into the project directory:
   ```sh
   cd blog-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Home Page: Displays a list of posts fetched from the API.
- Post Page: Allows users to create and edit posts.
- About Page: Provides information about the project.
- Not Found Page: Handles undefined routes.

## Key Files and Functionality
### `App.jsx`
- Defines routes and wraps the app with `DataProvider` for state management.

### `DataContext.jsx`
- Manages global state and provides post data using React Context.

### `useAxiosFetch.js`
- Custom hook to fetch data using Axios with cleanup handling.

### `Post.jsx`
- Renders individual posts with an option to navigate to post details.

### `PostPage.jsx`
- Handles creation and editing of posts using Ant Design forms.

### `HomePage.jsx`
- Displays posts with a loading spinner and empty state handling.

### `NotFoundPage.jsx`
- Displays a 404 error page for undefined routes.

## Future Improvements
- Add user authentication.
- Implement pagination for posts.
- Enhance UI with additional styling.
- Use a backend database for persistent storage.

---
This app was built as a learning project to explore different React features including routing, context API, state management, and API integration.

