const express = require("express")
const cors = require("cors")
const PORT = 4000
const projects = require("./projects.json")
const about = require("./about.json")

const app = express();

//MIDDLEWARE
app.use(cors())

//home route
app.get("/",(req,res)=>{
    res.send("hello world")
});

//Route for retrieving projects
app.get("/projects", (req,res) => {
    res.json(projects);
});

//route for retrieving about info
app.get("/about", (req,res) => {
    res.json(about);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))