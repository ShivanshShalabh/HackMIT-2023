const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    noteID: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    college: {
        type: String
    },
    course: {
        type: String
    },
    
    note: {
        type: Object
    },
    tags: {
        type: Array
    },
});

module.exports = Note = mongoose.model("notes", NoteSchema);