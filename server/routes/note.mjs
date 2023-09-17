import express from "express";
import NoteDB from "../models/notes.js";
const router = express.Router();
import summarizeText from "../utils/summarize.mjs";



router.post("/submit", async (req, res) => {
  const note = req.body.note;
  const course = req.body.course;
  const college = req.body.college;
  if (!note || !course || !college) { console.log(note, course, college); return; };
  // check if note exists
  // if not, create it
  console.log(note, course, college);

  const oldNote = await NoteDB.findOne({ course, college });

  if (oldNote) {
    const allNotes = oldNote + "\n\n" + note;
    const summarizedNote = await summarizeText(allNotes);
    const noteUpdate = await NoteDB.findOneAndUpdate({ _id: oldNote._id }, summarizedNote, { new: true });

    console.log(noteUpdate);

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

router.post("/get", async (req, res) => {
  const course = req.body.course;
  const college = req.body.college;
  if (!course || !college) { console.log(course, college); return; };
  console.log(course, college);

  const note = await NoteDB.findOne({ course, college });
  if (note) {
    res.send(note.note);
  }
  else {
    res.send("Note not found").status(404);
  }
});

export default router;
