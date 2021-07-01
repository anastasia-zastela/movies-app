import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Date,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    stars: [
        {
            type: String,
        },
    ],
}, {
    timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
