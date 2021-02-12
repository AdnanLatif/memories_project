import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoute from './routes/posts.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limmit: '30mb0', extended: true }));
app.use(cors());
app.use('/posts', postRoute);

('mongodb+srv://adnan:igeu98MRkP3iMB6@cluster0.nzhjq.mongodb.net/memoriesProject?retryWrites=true&w=majority');
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);
