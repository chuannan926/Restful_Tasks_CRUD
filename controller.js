const Task = require('./models');

module.exports ={
    index:(request,response) =>{
        Task.find({}).sort({createdAt:1})
        .then(All_Task =>{
            console.log("HERE");
            response.json(All_Task);
        })
        .catch(err => response.json(err))
    },
    
    new_task:(request, response) =>{
        Task.create(request.body)
        .then(New_Task =>response.json(New_Task))
        .catch(err => response.json(err))   
    },

    one_task:(request, response) =>{
        console.log("One Task");

    },

    update_task:(request, response) =>{
        console.log("Update");
        Task.findByIdAndUpdate(request.params.id,request.body)
        .then(Update_Task =>response.json(Update_Task))
        .catch(err => response.json(err))  
    },

    delete:(request,response) =>{
        console.log("Bye");
        Task.findByIdAndRemove(request.params.id)
        .then(Delete_Task =>response.json(Delete_Task))
        .catch(err =>response.json(err))

    }



}
    