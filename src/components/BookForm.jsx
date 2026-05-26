import { useState, useEffect } from "react";
import { TextField, Button, Stack } from "@mui/material";

function BookForm({ onSubmit, editingBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (editingBook) {
      setBook({
        title: editingBook.title || "",
        author: editingBook.author || "",
        genre: editingBook.genre || "",
        year: String(editingBook.year || ""), // 🔥 FIX HERE
      });
    } else {
      setBook({
        title: "",
        author: "",
        genre: "",
        year: "",
      });
    }
  }, [editingBook]);

  // input handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBook) {
      onSubmit({
        id: editingBook.id,
        ...book,
      });
    } else {
      onSubmit(book);
    }

    // reset form
    setBook({
      title: "",
      author: "",
      genre: "",
      year: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ width: "100%" }}>
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

        <TextField
          label="Year"
          name="year"
          value={book.year || ""}   // 🔥 extra safety
          onChange={handleChange}
          fullWidth
        />

        <Button type="submit" variant="contained" size="large">
          {editingBook ? "Update Book" : "Add Book"}
        </Button>
      </Stack>
    </form>
  );
}

export default BookForm;