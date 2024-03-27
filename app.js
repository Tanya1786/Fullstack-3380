const mongoose = require('mongoose');

const w24StudentSchema = new mongoose.Schema({
  name: String,
  studentID: String
});
const W24Student = mongoose.model('w24student', w24StudentSchema);

async function createDocument() {
  try {
    const student = new W24Student({
      name: "Tanya Holczer",
      studentID: "300383457"
    });
    await student.save();
    console.log("Document Added Successfully");
  } catch (error) {
    console.error("Error adding document:", error);
  }
}

module.exports = { createDocument };
