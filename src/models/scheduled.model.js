import mongoose, {Schema} from "mongoose"
import moment from "moment"; //required in dates

// Schema for the test
const testSchema = new Schema({
    
    title: {
        type:String,
        required: true,
    },

    description: String,

    schedule:{
        type: Date,
        required: true,
        set: (value) => moment(value, 'DD/MM/YYYY').toISOString()
    },

    isScheduled: Boolean


})


// Schema for the class
const classSchema = new Schema({
    
    title: {
        type:String,
        required: true,
    },

    description: String,

    schedule:{
        type: Date,
        required: true,
        set: (value) => moment(value, 'DD/MM/YYYY').toISOString()
    },

    isScheduled: Boolean


})


// Schema for the assignments
const assignmentSchema = new Schema({
    
    title: {
        type:String,
        required: true,
    },

    description: String,

    schedule:{
        type: Date,
        required: true,
        set: (value) => moment(value, 'DD/MM/YYYY').toISOString()
    },

    isScheduled: Boolean


})

export const Test = mongoose.model("Test" , testSchema)
export const Class = mongoose.model("Class" , classSchema)
export const Assignment = mongoose.model("Assignment" , assignmentSchema)