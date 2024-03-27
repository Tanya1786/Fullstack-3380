const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  const { myuri } = req.body;
  try {
    await mongoose.connect(myuri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const app = require('./app'); // Importing the app.js file
    await app.createDocument(); // Calling the function to create document
    
    res.send(`<h1>Document Added</h1>`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error connecting to MongoDB");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
