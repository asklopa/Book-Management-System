import { Box, TextField, MenuItem } from "@mui/material";

function SearchBar({ search, setSearch, genreFilter, setGenreFilter }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <TextField
        label="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          width: { xs: "100%", sm: "50%" },
        }}
      />

      <TextField
        select
        label="Filter by Genre"
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
        sx={{
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Fiction">Fiction</MenuItem>
        <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
        <MenuItem value="Science">Science</MenuItem>
      </TextField>
    </Box>
  );
}

export default SearchBar;