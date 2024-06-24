import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import movies from './routes/movies';
const app = express();
dotenv.config();
app.use(cors());



const PORT = process.env.PORT || 3001;


app.use('/movies', movies);

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});




