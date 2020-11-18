const express = require('express');
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const inputCheck = require('./utils/inputCheck');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes)

app.use((req, res) => {
    res.status(404).end();
});

db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}!`)
    });
});