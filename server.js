// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Resolve o __dirname (já que em ES modules não existe por padrão)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configura a pasta public como estática
app.use(express.static(path.join(__dirname, "public")));

// Rota padrão -> carrega o index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Sobe o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
