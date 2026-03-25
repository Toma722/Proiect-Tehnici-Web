const express= require("express");
const path= require("path");

app= express();
app.set("view engine", "ejs")

console.log("Folder index.js", __dirname);
console.log("Folder curent (de lucru)", process.cwd());
console.log("Cale fisier", __filename);

app.use("/resurse", express.static(path.join(__dirname, "resurse")));

app.get("/", (req, res)=>{
    res.render("pagini/index");
});

app.get("/despre", (req, res)=>{
    res.render("pagini/despre");
});

app.listen(8080);
console.log("Serverul a pornit!");
