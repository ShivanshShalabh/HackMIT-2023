import express from "express";
import noteDB from "../models/notes.js";
const router = express.Router();




router.post("/note", async (req,res) => {
  const note = req.body.note;
  const course = req.body.course;
  const college = req.body.college;
  // check if note exists
  // if not, create it
  console.log(note, course, college);
  
  const oldNote = await noteDB.find({ course, college });
  if (oldNote) {
      lastNote = oldNote[oldNote.length - 1];
      console.log(lastNote);
  }
  else {
      const newNote = new note({
          note,
          course,
          college
      });
    await newNote.save();
    res.send("Note saved");

  }
});

export default router;
