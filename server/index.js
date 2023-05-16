
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors()); 
const app = express();
app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3001;
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})