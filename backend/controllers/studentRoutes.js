import express from "express";
import studentSchema from "../model/studentSchema.js";


const router = express.Router();

router.post('/form', async (req,res)=> {
    try {
        const savedData= await studentSchema.create(req.body);
        res.status(201).json(savedData);

    } catch (error) {
        console.log("Error", error);
        
    }
});

router.get('/form', async(req,res)=> {
    try {
        const stuData= await studentSchema.find();
        res.status(200).json(stuData);

    } catch (error) {
        console.log("fetching error",error);
    }
})

router.delete('/form/:id', async (req, res) => {
    try {
        const deleteData = await studentSchema.findByIdAndDelete(req.params.id);
        if (!deleteData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully', data: deleteData });
    } catch (error) {
        console.error('Error deleting data:', error.message);
        res.status(500).json({ message: 'Failed to delete data', error: error.message });
    }
});

router.get('/counts', async (req, res) => {
    try {
        const totalStudents = await studentSchema.countDocuments();
        const unplacedStudents = await studentSchema.countDocuments({ status: 'Unplaced' });
        const placedStudents = await studentSchema.countDocuments({ status: 'Placed' });

        res.status(200).json({
            total: totalStudents,
            unplaced: unplacedStudents,
            placed: placedStudents,
        });
    } catch (error) {
        console.error('Error fetching counts:', error.message);
        res.status(500).json({ message: 'Failed to fetch student counts', error: error.message });
    }
});


export default router;
