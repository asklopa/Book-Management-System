A simple Book Management System built using React that allows users to perform full CRUD operations (Create, Read, Update, Delete) on books. The application integrates with a mock API (JSON Server / MockAPI) and includes search and filtering functionality.

Live Demo

🔗 Live Application: https://book-management-system-phi-sandy.vercel.app/
🔗 GitHub Repository: https://github.com/asklopa/Book-Management-System.git OR https://github.com/asklopa

✨ Features
📖 View list of books
➕ Add a new book
✏️ Edit existing book details
🗑️ Delete a book
🔍 Search books by title or author
🎯 Filter books by genre
⏳ Loading states for API calls
❌ Basic error handling for API failures
📱 Responsive UI

🛠️ Tech Stack
React (Functional Components + Hooks)
Axios
React Router
MockAPI (Backend)
MUI

⚙️ Key Functionalities
📌 Add Book
Form collects title, author, genre, year
Sends POST request to API
📌 Edit Book
Pre-fills existing data
Updates via PUT request
📌 Delete Book
Removes book using DELETE request
📌 Search
Filters books by title or author
📌 Filter
Filters books based on genre
❗ Error Handling
Displays error message if API fails
Handles empty state when no books are available
Loading indicator shown during API requests






