import express from 'express';
import bodyParser from 'body-parser';
import partyRoute from './routes/partyRoutes';
import officeRoute from './routes/officeRoutes';
import userRoute from './routes/userRoutes';


const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// API routes
app.use('/api/v1/parties', partyRoute);
app.use('/api/v1/offices', officeRoute);
app.use('/api/v1/auth', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

export default app;