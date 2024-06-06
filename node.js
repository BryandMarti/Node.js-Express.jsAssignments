const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Mock database
let db = [];

// GET /api/data
app.get('/api/data', (req, res) => {
    setTimeout(() => { // Simulate async operation
        res.json(db);
    }, 1000); // Delay of 1 second
});//learned delay of lessons and YT videos

// POST /api/data
app.post('/api/data', (req, res) => {
    const newData = req.body;
    setTimeout(() => { // Simulate async operation
        db.push(newData);
        res.status(201).send('Data added successfully');
    }, 1000); // Delay of 1 second
});

// PUT /api/data/:id
app.put('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updateData = req.body;
    setTimeout(() => { // Simulate async operation
        const index = db.findIndex(item => item.id === id);
        if (index!== -1) {
            db[index] = updateData;
            res.send('Data updated successfully');
        } else {
            res.status(404).send('Data not found');
        }
    }, 1000); // Delay of 1 second
});

// DELETE /api/data/:id
app.delete('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    setTimeout(() => { // Simulate async operation
        const index = db.findIndex(item => item.id === id);
        if (index!== -1) {
            db.splice(index, 1);
            res.send('Data deleted successfully');
        } else {
            res.status(404).send('Data not found');
        }
    }, 1000); // Delay of 1 second
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
