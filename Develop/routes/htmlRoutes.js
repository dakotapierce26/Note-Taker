const router = require('express').Router();
const path = require('path');

router.get('/notes', (res, req) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

router.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/styles.css'));
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;