import express from "express";
import {
  getMovies,
  getMovieById,
  createMovie,
  deleteMovie,
} from "../controllers/movieController.js";
import validateMovieForm from "../middleware/validateMovieForm.js";

const router = express.Router();

router.route("/").get(getMovies);

router.route("/:id").get(getMovieById);

router.route("/").post(validateMovieForm, createMovie);

router.route("/:id").delete(deleteMovie);

export default router;
