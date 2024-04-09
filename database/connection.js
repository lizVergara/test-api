const mongoose = require("mongoose")

const conexion = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test"
        )
        console.log('success database')
    } catch (error) {
        console.log(error)
        throw new Error('can not connect with the database')

    }
}


module.exports = {
    conexion
}