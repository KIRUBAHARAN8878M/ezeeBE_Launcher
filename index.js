import express from 'express';
import launcherRouter from './routes/launcher.js';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/launcher', launcherRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
