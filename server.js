const express = require("express");
const db = require("./database");

const app = express();
const PORT = 3000;

app.use(express.json());

// cadastrar produto
app.post("/produtos", (req, res) => {
  const { nome, preco } = req.body;

  const sql = `
    INSERT INTO produtos (nome, preco)
    VALUES (?, ?)
    `;

  db.run(sql, [nome, preco], function (err) {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao cadastrar produto",
      });
    }

    res.status(201).json({
      id: this.lastID,
      nome,
      preco,
    });
  });
});

// buscar produto
app.get("/produtos", (req, res) => {
  const sql = "SELECT * FROM produtos";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao buscar produtos",
      });
    }

    res.json(rows);
  });
});

// buscar produto pelo id
app.get("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM produtos WHERE id = ?";

  db.get(sql, [id], (err, rows) => {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao buscar produto",
      });
    }

    res.json(rows);
  });
});

//atualizar produto pelo id
app.put("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;

  const sql = `
        UPDATE produtos
        SET nome = ?, preco = ?
        WHERE id = ?
    `;

  db.run(sql, [nome, preco, id], function (err) {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao atualizar produto",
      });
    }

    res.json({
      mensagem: "Produto atualizado com sucesso",
    });
  });
});

//deletar produto pelo id
app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM produtos WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({
        erro: "Erro ao excluir produto",
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        erro: "Produto não encontrado",
      });
    }

    res.json({
      mensagem: "Produto excluído com sucesso",
    });
  });
});

//mostrar que ta rodando no terminal
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});