import mongoose from 'mongoose';
import sampleMovies from './data/sampleMovies.js';
import connectDB from './config/db.js';
import Movie from './models/movieModel.js'

connectDB();

const importData = async () => {
    try {
        await Movie.deleteMany();

        await Movie.insertMany(sampleMovies);

        console.log('Data imported!')
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Movie.deleteMany();

        console.log('Data destroyed!')
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
}
else {
    importData();
}
