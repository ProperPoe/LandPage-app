const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');
const path = require('path'); 
const userRoutes = require('./routes/users')
const experienceRoutes = require('./routes/experiences')

const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(express.json());
app.use(cors());

//middelware used to connect routes
app.use('/api', userRoutes)
app.use('/api', experienceRoutes)

mongoose.connect(process.env.CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log("Server listening 9001")
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});