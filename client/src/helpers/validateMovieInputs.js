const validateMovieInputs = ({ title, releaseYear, format, stars }) => {
    let errors = {};

    if (!title.trim()) {
        errors.title = 'Title required';
    } else if (!/^[A-Za-z]+/.test(title.trim())) {
        errors.title = 'Enter a valid title';
    }

    if (!releaseYear) {
        errors.releaseYear = 'Release year required';
    }

    if (!format) {
        errors.format = 'Format is required';
    }

    if (stars[0].value.length === 0) {
        errors.stars = 'At least 1 star is required';
    }

    return errors;
};

export { validateMovieInputs };
