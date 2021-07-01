const validateMovieForm = (req, res, next) => {
  if (!req.body.title.trim()) {
    return res.status(400).json({ message: "Title required" });
  } else if (!/^[A-Za-z]+/.test(req.body.title.trim())) {
    return res.status(400).json({ message: "Enter a valid title" });
  }

  if (!req.body.releaseYear) {
    return res.status(400).json({ message: "Release year required" });
  }

  if (!req.body.format) {
    return res.status(400).json({ message: "Format is required" });
  }

  if (!req.body.stars[0].length === 0) {
    return res.status(400).json({ message: "At least 1 star is required" });
  }

  next();
};

export default validateMovieForm;
