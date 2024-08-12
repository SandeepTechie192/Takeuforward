const db = require('../config/db');

const Flashcard = {
    getAll: (callback) => {
        const query = 'SELECT * FROM flashcards';
        db.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    create: (data, callback) => {
        const query = 'INSERT INTO flashcards SET ?';
        db.query(query, data, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    update: (id, data, callback) => {
        const query = 'UPDATE flashcards SET ? WHERE id = ?';
        db.query(query, [data, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM flashcards WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
};

module.exports = Flashcard;
