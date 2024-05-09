import express from 'express';
import cors from 'cors';
import connectDB from './database/dB';
import v1Router from './v1/routes';

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());
app.use('/api/v1', v1Router);

connectDB().then(() => console.log('database connection ready')
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})