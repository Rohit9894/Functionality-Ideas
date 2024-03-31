const express = require("express");
const NoteModel = require("../models/notes.model");
const app = express.Router();

app.get("/", async (req, res) => {
  const notes = await NoteModel.find();
  res.send(notes);
});
app.post("/", async (req, res) => {
  const { title, note, category, usid } = req.body;
  console.log(usid);
  try {
    const new_note = new NoteModel({ title, note, category, userId: usid });
    await new_note.save();
    res.send({ msg: "Note Createed" });
  } catch (e) {
    res.send(e.message);
  }
});
app.patch("/update/:noteID", async (req, res) => {
  const payload = req.body;
  // const noteID = req.params.noteID;
  // await NoteModel.findByIdAndUpdate({ _id: noteID }, payload);
  // res.send({ msg: "update successfully" });
  const noteID = req.params.noteID;
  const userID = req.body.userID;
  const note = await NoteModel.findOne({ _id: note.ID });
  if (userID !== note.userID) {
    res.send("note authrised");
  } else {
    await NoteModel.findByIdAndUpdate({ _id: noteID }, paylaod);
    res.send({ msg: "update succefully" });
  }
});
app.delete("/delete/:noteID", async (req, res) => {
  const noteId = req.params.noteID;
  const userID = req.body.usid;
  const note = await NoteModel.findOne({ _id: noteId });
  console.log(userID, note.userId);
  console.log(userID === note.userId);
  if (userID !== note.userId) {
    return res.send({ msg: "note authrised" });
  } else {
    await NoteModel.findByIdAndDelete({ _id: noteId });
    res.send({ msg: "note deleted successfully" });
  }
});
module.exports = app;
