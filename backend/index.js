const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { db } = require('./db/database');
const postRoute = require('./routes/PostController');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('DB connected!'))
  .catch(err => console.log(err));

app.use('/api/post', postRoute);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
