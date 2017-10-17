const notes = require('../controllers/notes.js');
const mongoose = require("mongoose");
const Note = mongoose.model("Note");

module.exports = function (app){
    console.log("this is the routes")
    app.get('/get_notes', notes.display);
    app.post('/create', notes.create);

    // app.all("*", (req, res, next) => {
    //     res.sendFile(path.resolve("./public/dist/index.html"))
    // });
}
