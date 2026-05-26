import { useState, useEffect } from "react";

import {
  TextField,
  Button,
  Stack,
} from "@mui/material";

function BookForm({ onSubmit, editingBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
  });

  useEffect(() => {
    if (editingBook) {
      setBook(editingBook);
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);

    setBook({
      title: "",
      author: "",
      genre: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Title"
          name="title"
          value={book.title}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Genre"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
        >
          {editingBook ? "Update Book" : "Add Book"}
        </Button>
      </Stack>
    </form>
  );
}

export default BookForm;