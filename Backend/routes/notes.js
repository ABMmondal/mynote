const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/note");
const { body, validationResult } = require("express-validator");

// route 1 get all the notes end point is "/api/auth/fetchNotes"
router.get("/fetchNotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
});

// route 2 add notes end point is "/api/auth/addNotes"
router.post(
  "/addNotes",
  fetchuser,
  [
    body("titel", "dey re bokachoda").isLength({ min: 3 }),
    body("description", "dey re bokachoda").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const { titel, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({ titel, description, tag, user: req.user.id });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  }
);
// route 3 update an existing note  notes end point is "/api/auth/updateNotes"
router.put("/updateNotes/:id", fetchuser, async (req, res) => {
  const { titel, description, tag } = req.body;
  try {
    //creat note object
    const newNote = {};
    if (titel) {
      newNote.titel = titel;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //find which note you want to update
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(400).send("No note found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("pala kela");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
});

// route 3 delete an existing note  notes end point is "/api/auth/deleteNote"
router.delete("/deleteNote/:id", fetchuser, async (req, res) => {
  try {
    //find which note you want to delete
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(400).send("No note found");
    }

    // alower delete

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("pala kela");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "delete hoye ga6e bo" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
