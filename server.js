const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const folderRoute = require('./routes/folderroute');

const app = express();

mongoose
    .connect('mongodb+srv://thomson:thomson@cluster0.qmoir.mongodb.net/folders?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB Connected'));

app.use(bodyParser.json());
app.use(cors());

app.use('/api', folderRoute);

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});