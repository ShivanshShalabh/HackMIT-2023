const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    college: {
        type: String
    },
    course: {
        type: String
    },
    
    note: {
        type: String
    },
    tags: {
        type: Array
    },
});

module.exports = Note = mongoose.model("notes", NoteSchema);