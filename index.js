import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {router} from './routes/index.js';
import rateLimit from 'express-rate-limit' 

const PORT = process.env.PORT || 5000;

const app = express();

//rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, //10 mins
    max: 30
})

app.use(limiter);
app.set('turst proxy', 1);

//set static folder
app.use(express.static('public'));

app.use('/api', router);

// Enable cors
app.use(cors());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
