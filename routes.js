const controller = require("./controller");

module.exports = function(app){
    app.get('/tasks', controller.index)
    app.get('/task/:id', controller.one_task)
    app.post('/new', controller.new_task)
    
    app.patch('/update/:id', controller.update_task)
    app.get('/delete/:id', controller.delete)

}