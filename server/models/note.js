
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    note: { type: String, required: true, maxlength: 255, minlength: 3 }
}, { timestamps: true });

const Note = mongoose.model('Note', NoteSchema);