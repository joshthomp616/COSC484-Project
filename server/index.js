
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors()); 
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
  }); 

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})