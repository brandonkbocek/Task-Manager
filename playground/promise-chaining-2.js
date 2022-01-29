require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('61f1ff890c9a79ac9bc52a46').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('61f31484a735b91efb10019d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})