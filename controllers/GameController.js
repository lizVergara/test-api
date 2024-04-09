
const User = require("../models/User");

const searchUser = async (req, res) => {
    let character = req.params.string;

    try {
        const userFind = await User.find({
            "$or": [
                { "name": { "$regex": character, "$options": "i" } }
            ]
        }).sort({ point: 1 });

        if (userFind.length === 0) {
            create(req, res)
        }
        return res.status(200).json({
            status: "success",
            Users: userFind
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "server died"
        });
    }
}

const create = async (req, res) => {
    let params = req.body;
    try {
        const user = new User(params);
        const userCreate = await user.save();

        return res.status(200).json({
            status: "success",
            user: userCreate
        });
    } catch (error) {
        return res.status(400).json({
            status: error.message,
            mensaje: "Error to save new player "
        });
    }
};

const getAll = async (req, res) => {
    try {
        let users = await User.find({}).sort({ point: -1 });

        if (!users || users.length === 0) {
            return res.status(404).json({
                status: "error",
                mensaje: "have not been found"
            });
        }
        return res.status(200).json({
            status: "success",
            users: users
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            mensaje: "error to getting ",
            error: error.message
        });
    }
};


const update = async (req, res) => {
    try {
        let body = req.body;
        let id = body._id;

        let user = await User.findByIdAndUpdate({ _id: id }, body, { new: true }).exec();
        if (!user || user.length === 0) {
            return res.status(404).json({
                status: "error",
                mensaje: "Could not update article"
            });
        }
        return res.status(200).json({
            status: "success",
            mensaje: "Updated user",
            users: user
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            mensaje: "Error Updated user",
            error: error.message
        });
    }

}

module.exports = {
    searchUser,
    create,
    getAll,
    update
};



