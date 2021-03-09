const fs = require('fs');
const path = require('path');
const router = require('express').Router();

fs.readFile('./db/db.json', (err, data) => {

    var noteData = JSON.parse(data);

    router.get('./api/notes', (req, res) => {
        res.json(noteData);
    });

    router.post('./api/notes', (req, res) => {
        noteData.push(req.body);
        res.json("A note was saved");
    });

    router.delete('./api/notes/:index', (req, res) => {
        let del = parseInt(req.params.index);
        let tempNotes = [];
        for (let i = 0; i < noteData.length; i++) {
            if (i !== del) {
                tempNotes.push(noteData[i]);
            }
        }
        noteData = tempNotes;

        res.json("Note deleted!")
    });
});


module.exports = router;