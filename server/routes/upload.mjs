import express from "express";
import NoteDB from "../models/notes.js";
const router = express.Router();
import summarizeText from "../utils/summarize.mjs";



router.post("/note", async (req,res) => {
  const note = req.body.note;
  const course = req.body.course;
  const college = req.body.college;
  if(!note || !course || !college) { console.log(note, course, college); return; };
  // check if note exists
  // if not, create it
  console.log(note, course, college);
  
  const oldNote = await NoteDB.findOne({ course, college });
  console.log("****",oldNote);

  if (oldNote) {
      let lastNote = oldNote;
      console.log("OLD",lastNote);
      res.send("Note Exists");
  }
  else {    
    const summarizedNote = await summarizeText(note);
      const newNote = new NoteDB({
          note: summarizedNote,
          course,
          college
      });
    await newNote.save();
    res.send("Note saved");

  }
});

export default router;
