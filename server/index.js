import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.routes.js';
import usersRoute from './routes/users.routes.js';
import hotelsRoute from './routes/hotels.routes.js';
import roomsRoute from './routes/rooms.routes.js';

const app = express();
dotenv.config();

const connect = async() => {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  }catch(error){
    throw error
  }
}

mongoose.connection.on("disconected", () => console.log('MongoDB disconnected'));

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server running on port: http://localhost:${process.env.PORT}`)
});