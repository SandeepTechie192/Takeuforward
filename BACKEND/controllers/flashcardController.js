const Flashcard = require('../models/flashcardModel');

exports.getAllFlashcards = (req, res) => {
    Flashcard.getAll((err, flashcards) => {
        if (err) return res.status(500).send(err);
        res.json(flashcards);
    });
};

exports.createFlashcard = (req, res) => {
    Flashcard.create(req.body, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, ...req.body });
    });
};

exports.updateFlashcard = (req, res) => {
    Flashcard.update(req.params.id, req.body, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ id: req.params.id, ...req.body });
    });
};

exports.deleteFlashcard = (req, res) => {
    Flashcard.delete(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(204).send();
    });
};
