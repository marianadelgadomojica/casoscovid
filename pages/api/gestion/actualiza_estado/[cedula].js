const db = require("../../../../db/db");

export default async function insertByCedula(req, res) {
  if (req.method !== "POST") {
    res.status(500).json({ message: "Solo se aceptan POST" });
  } else {
    try {
      const data = req.body;
      const results = await db.query(
        "Insert into Estado_de_Caso (cedula,estado,fecha_actualizacion) Values(?,?,?)",
        [req.query.cedula, data.estado, data.fecha_actualizacion]
      );
      await db.end();
      res.json({ response: results, method: req.method });
    } catch (error) {
      res.json({ err: error });
    }
  }

  // res.json({ id: req.query.cedula, message: "sda" });
}
