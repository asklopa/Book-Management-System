import { useEffect, useState } from "react";

import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "./services/api";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

import {
  Container,
  Typography,
  Paper,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await getBooks();

      const data = Array.isArray(response.data)
        ? response.data
        : [];

      setBooks(data);

      setError("");
    } catch (err) {
      console.log(err);

      setError("Failed to fetch books");

      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddOrUpdate = async (book) => {
    try {
      if (editingBook) {
        await updateBook(editingBook.id, book);
        setEditingBook(null);
      } else {
        await addBook(book);
      }

      await fetchBooks();
    } catch (error) {
      console.error(error);
      alert("Operation failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      alert("Delete failed");
    }
  };

  const filteredBooks = books.filter((book) => {
    return (
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())) &&
      (genreFilter === "" || book.genre === genreFilter)
    );
  });

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          Book Management System
        </Typography>

        <Box sx={{ my: 3 }}>
          <SearchBar
            search={search}
            setSearch={setSearch}
            genreFilter={genreFilter}
            setGenreFilter={setGenreFilter}
          />
        </Box>

        <Box sx={{ my: 3 }}>
          <BookForm
            onSubmit={handleAddOrUpdate}
            editingBook={editingBook}
          />
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <BookList
            books={filteredBooks}
            onEdit={setEditingBook}
            onDelete={handleDelete}
          />
        )}
      </Paper>
    </Container>
  );
}

export default App;