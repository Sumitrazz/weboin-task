import mongoose, { model } from 'mongoose'; 

 const studentSchema= new mongoose.Schema(
    {
        name: {
            type:String,

            
        },
        role: {
            type:String,
            
        },email: {
            type:String,
            
        },phone: {
            type:String,
            
        },course: {
            type:String,
            
        },
        status: {
            type:String,
            enum: ['Unplaced', 'Placed']
            
        }

    },{timestamps: true}
 )
export default model("Student", studentSchema);
 