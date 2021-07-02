import Movie from "../models/movieModel.js";

// Fetch all movies
// GET /api/products
const getMovies = async (req, res) => {
  const movies = await Movie.find({});

  res.json(movies);
};

// Fetch single movie
// GET /api/movies/:id
const getMovieById = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
};

// Create single movie
// POST /api/movies
const createMovie = async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    releaseYear: req.body.releaseYear,
    format: req.body.format,
    stars: req.body.stars,
  });

  const createdMovie = await movie.save();
  res.status(201).json(createdMovie);
};

// Delete a movie
// DELETE /api/movies/:id
const deleteMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (movie) {
    await movie.remove();
    res.json({ message: "Movie removed" });
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
};

export { getMovies, getMovieById, createMovie, deleteMovie };
