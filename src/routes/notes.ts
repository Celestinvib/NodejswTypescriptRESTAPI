// import express from 'express';
import { Router } from 'express';

import { Note } from '../models/note';

type RequestBody = { text: string }; //Set the body of a request
type RequestParams = { noteId: string };

let notes: Note[] = [];

const router = Router();

router.get('/notes', (req, res, next) => {
    res.status(200).json({ notes: notes });
});

router.post('/note', (req,res,next) => {
    const body = req.body as RequestBody; //Assign the request body to it (if we put body.texts ts will let we know that is incorrect)

    const newNote: Note = {
        id: new Date().toISOString(),
        // text: req.body.text
        text: body.text
    };

    notes.push(newNote);
    res.status(201).json({message: 'Note added succesfully!', note: newNote})

});

router.put('/note/:noteId', (req, res, next) => {
    const params = req.params as RequestParams;
    const body = req.body as RequestBody;

    const tId = params.noteId;
    const noteIndex = notes.findIndex((noteItem) => noteItem.id === tId);
    if (noteIndex >= 0) {
        notes[noteIndex] = {id: notes[noteIndex].id, text: body.text};
        res.status(200).json({message: 'Note updated succesfully!.', note:  notes[noteIndex] })

    };
    res.status(404).json({message: 'Could not find any note with that id.'})
});

router.delete('/note/:noteId', (req, res, next) => {
    const params = req.params as RequestParams;
    
    notes = notes.filter(nodeItem => nodeItem.id !== params.noteId);
    res.status(201).json({message: 'Note deleted succesfully!.', notes: notes});
 
});

// module.exports = router;
export default router;