const express = require('express');
const app = express();
const cors = require('cors');
const rootRoute = require('./routes');


app.use(express.json());
app.use(express.static("."))
app.use(cors());

app.listen(8080, () => {
    console.log("Connection Success")
})

app.use("/api",rootRoute)






