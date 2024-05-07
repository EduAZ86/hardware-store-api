import express from 'express';
import cors from 'cors';
import connectDB from './config/dB';

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

connectDB().then(() => console.log('database connection ready')
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})