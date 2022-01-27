const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    // useNewUrlParser: true,
    // useCreateIndex: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Clean room',
    completed: false
})

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})