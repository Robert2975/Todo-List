const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://romersimpson2:VzjWgmGg0u3yRSH5@todo-list.roxpz.mongodb.net/?retryWrites=true&w=majority&appName=Todo-List",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log("MongoDB Atlas Conectado!")
    }).catch((err) => console.log(err))
}

module.exports = connectToDb