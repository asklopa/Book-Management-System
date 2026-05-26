import { useState, useEffect } from "react";
import { TextField, Button, Stack } from "@mui/material";

function BookForm({ onSubmit, editingBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  // 🔥 Fill form when editing
  useEffect(() => {
    if (editingBook) {
      setBook({
        title: editingBook.title || "",
        author: editingBook.author || "",
        genre: editingBook.genre || "",
        year: editingBook.year || "",
      });
    } else {
      // reset when switching back to add mode
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
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // update mode
    if (editingBook) {
      onSubmit({
        id: editingBook.id,
        ...book,
      });
    }
    // add mode
    else {
      onSubmit(book);
    }

    // reset form after submit
    setBook({
      title: "",
      author: "",
      genre: "",
      year: "",
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
          placeholder="Enter book title"
          fullWidth
        />

        <TextField
          label="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Enter author name"
          fullWidth
        />

        <TextField
          label="Genre"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          placeholder="Enter genre"
          fullWidth
        />

        <TextField
          label="Year"
          name="year"
          value={book.year}
          onChange={handleChange}
          placeholder="Enter publication year"
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