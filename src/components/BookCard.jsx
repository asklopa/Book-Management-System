function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>

      <button onClick={() => onEdit(book)}>
        Edit
      </button>

      <button onClick={() => onDelete(book.id)}>
        Delete
      </button>
    </div>
  );
}

export default BookCard;