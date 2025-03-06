const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MySQL adatbázis kapcsolat
const db = mysql.createConnection({
  host: "localhost",  
  user: "root",       
  password: "",       
  database: "felveteli",
  port: 3307
});

// Kapcsolódás az adatbázishoz
db.connect(err => {
  if (err) {
    console.error("Hiba a MySQL kapcsolódás során:", err);
    return;
  }
  console.log("Sikeres MySQL kapcsolat!");
});

// Főoldal teszt
app.get("/", (req, res) => {
  res.send("Báckend működik!");
});

// Szerver indítása
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Szerver fut: http://localhost:${PORT}`);
});