const db = require("../../../db/db");

export default async function getUsuario(req, res) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Solo se aceptan Get" });
  } else {
    try {
      const results = await db.query(
        `SELECT * FROM Usuarios WHERE usuario='${req.query.usuario}'`
      );
      await db.end();
      res.json({ usuarioRegistrado: results, method: req.method });
    } catch (error) {
      res.json({ err: error });
    }
  }
}
