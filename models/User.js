const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: { type: String, required: true },
    point: { type: Number, required: false },
})


module.exports = model("User", UserSchema, "table_player")
// el ultimo parametro es la collecion de la base de datos

