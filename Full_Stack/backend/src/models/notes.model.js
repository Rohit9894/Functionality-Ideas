const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
  title: String,
  note: String,
  category: [],
  userId: String,
});
const NoteModel = mongoose.model("note", noteSchema);
module.exports = NoteModel;
