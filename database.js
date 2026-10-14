const sqlite3 = require('sqlite3').verbose();
const path = require("path");

const caminhoBanco = path.join(__dirname, "database.sqlite");

const db = new sqlite3.Database(caminhoBanco, (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err.message);
    return;
  }

  console.log("Banco de dados conectado com sucesso.");
});

db.run(`
    CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL
    )
`, (err) => {
    if (err) {
        console.error("Erro ao criar tabela:", err.message);
        return;
    }

    console.log("Tabela produtos pronta.");
});

module.exports = db;