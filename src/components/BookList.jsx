import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

function BookList({ books, onEdit, onDelete }) {
  return (
    <Stack spacing={2}>
      {books.map((book) => (
        <Card key={book.id}>
          <CardContent>
            <Typography variant="h6">
              {book.title}
            </Typography>

            <Typography color="text.secondary">
              Author: {book.author}
            </Typography>

            <Typography color="text.secondary">
              Genre: {book.genre}
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit(book)}
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={() => onDelete(book.id)}
              >
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default BookList;