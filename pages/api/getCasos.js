const db = require("../../db/db");

export default async function getCasos(req, res) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Solo se aceptan Get" });
  } else {
    try {
      const results = await db.query("SELECT * FROM Registro_de_casos");
      await db.end();
      res.json({ DatosCasosRegistrados: results, method: req.method });
    } catch (error) {
      return { error };
    }
  }
}
