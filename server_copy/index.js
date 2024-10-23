const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors())
app.use(express.static("public"));


app.get('/menu', (req, res) => {

    const filePath = path.join(__dirname, 'data/menu.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        try {
            const categories = JSON.parse(data);
            res.json(categories);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
