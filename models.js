
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Restful_task');


var TaskSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    description :{ type: String, required: true },
    completed :{ type: Boolean, required: false },  
}, {timestamps: true });

mongoose.model('Task', TaskSchema); 
var Task = mongoose.model('Task') 

module.exports = Task; 