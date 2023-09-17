import express from "express";

const router = express.Router();




router.post("/note", async (req,res) => {
  const note = req.body.note;
  const courseNumber = req.body.courseNumber;
  console.log(note);
  console.log(courseNumber);
  res.send("Hello World");
});

export default router;
