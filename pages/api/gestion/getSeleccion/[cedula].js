const db = require("../../../../db/db");
export default async function getByCedula(req, res) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Solo se aceptan POST" });
  } else {
    try {
      const data = req.body;
      const results = await db.query(
        `SELECT * FROM Estado_de_Caso WHERE cedula=${req.query.cedula} order by idEstado_de_Caso desc`
      );
      await db.end();
      res.json({ response: results, method: req.method });
    } catch (error) {
      res.json({ err: error });
    }
  }

  // res.json({ id: req.query.cedula, message: "sda" });
}
