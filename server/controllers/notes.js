const mongoose = require("mongoose");
const Note = mongoose.model("Note");
const session = require('express-session');

module.exports = {
    display: (req, res) => {
        console.log("this is display")
        Note.find({})
            .then(notes => res.json(notes)) 
            .catch(err => {
                console.log("can't find")
                res.status(500).json(err)
            })
    },
    create: (req, res) => {
        console.log("you are in the create method")
        console.log(req.body)
        let currentNote = new Note( req.body );
        currentNote.save() 
            .then(notes => res.json(true))
            .catch(err => {
                console.log("can't find")
                res.status(500).json(err)
            })
    }
}
