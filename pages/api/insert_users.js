const db = require("../../db/db");
export default async function insert_users(req, res) {
  if (req.method !== "POST") {
    res.status(500).json({ message: "Solo se aceptan POST" });
  } else {
    try {
      const data = req.body;
      const results = await db.query(
        "Insert into Usuarios (nombre,apellido,cedula,rol,usuario,contraseña) Values(?,?,?,?,?,?)",
        [
          data.nombre,
          data.apellido,
          data.cedula,
          data.rol,
          data.usuario,
          data.contraseña,
        ]
      );
      await db.end();
      res.json({ hello: results, method: req.method });
    } catch (error) {
      res.json({ err: error });
    }
  }
}
