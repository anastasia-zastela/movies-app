import express from 'express';
import connectDB from './config/db.js';
import movieRoutes from './routes/movieRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

connectDB();

const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(express.json());

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/movies', movieRoutes);

// app.use(notFound);

// app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
