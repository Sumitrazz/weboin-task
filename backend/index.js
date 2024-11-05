import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './controllers/studentRoutes.js';

dotenv.config();
const app= express();
const PORT = process.env.PORT || 5001;

const connectDb = async ()=> {
 try {
    await mongoose.connect(process.env.MongoDB_Url)
    console.log('✅ Connected to MongoDB');
 } catch (error) {
 console.error('❌ Failed to connect to MongoDB:', err.message);
 }   
}
connectDb();


app.use(cors());
app.use(express.json());

app.get('/',(req, res)=> {
   res.send("Hello Studnt");
});
app.use('/api/students', router );

app.use((req, res) => {
   res.status(404).json({ message: 'Route not found' });
 });
 app.use((err, req, res, next) => {
   console.error('Error:', err.message);
   res.status(500).json({ message: 'Internal Server Error', error: err.message });
 });

 app.listen(PORT, ()=> {
   console.log(`🚀 Server is running on port ${PORT}`);
})
