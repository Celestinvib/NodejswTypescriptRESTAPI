"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
const express_1 = require("express");
let notes = [];
const router = (0, express_1.Router)();
router.get('/notes', (req, res, next) => {
    res.status(200).json({ notes: notes });
});
router.post('/note', (req, res, next) => {
    const body = req.body; //Assign the request body to it (if we put body.texts ts will let we know that is incorrect)
    const newNote = {
        id: new Date().toISOString(),
        // text: req.body.text
        text: body.text
    };
    notes.push(newNote);
    res.status(201).json({ message: 'Note added succesfully!', note: newNote });
});
router.put('/note/:noteId', (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const tId = params.noteId;
    const noteIndex = notes.findIndex((noteItem) => noteItem.id === tId);
    if (noteIndex >= 0) {
        notes[noteIndex] = { id: notes[noteIndex].id, text: body.text };
        res.status(200).json({ message: 'Note updated succesfully!.', note: notes[noteIndex] });
    }
    ;
    res.status(404).json({ message: 'Could not find any note with that id.' });
});
router.delete('/note/:noteId', (req, res, next) => {
    const params = req.params;
    notes = notes.filter(nodeItem => nodeItem.id !== params.noteId);
    res.status(201).json({ message: 'Note deleted succesfully!.', notes: notes });
});
// module.exports = router;
exports.default = router;
