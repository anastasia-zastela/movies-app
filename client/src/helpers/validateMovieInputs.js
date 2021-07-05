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

const validateStarFullname = (stars) => {
    return stars.filter(
        (st) =>
            !st.value.trim() ||
            !/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/.test(st.value.trim().toLowerCase())
    );
};

const checkStarFullnameForUniqueness = (stars) => {
    let boolean = true;
    for (let i = 0; i < stars.length; i++) {
        if (stars[stars.length - 1].value.toLowerCase() === stars[i].value.toLowerCase()) {
            boolean = false;
        }
    }
    return boolean;
};

export { validateMovieInputs, validateStarFullname, checkStarFullnameForUniqueness };
