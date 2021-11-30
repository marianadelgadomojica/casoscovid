const db = require("../../db/db");
export default async function insert_casos(req, res) {
  if (req.method !== "POST") {
    res.status(500).json({ message: "Solo se aceptan POST" });
  } else {
    try {
      const data = req.body;
      const results = await db.query(
        "Insert into Registro_de_casos (nombre,apellido,cedula,sexo,fecha_nacimiento,direccion_residencia,direccion_trabajo,resultado_examen,fecha_examen,codigo_caso,latitud_residencia,longitud_residencia,latitud_trabajo,longitud_trabajo) Values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          data.nombre,
          data.apellido,
          data.cedula,
          data.sexo,
          data.fecha_nacimiento,
          data.direccion_residencia,
          data.direccion_trabajo,
          data.resultado_examen,
          data.fecha_examen,
          data.codigo_caso,
          data.latitud_residencia,
          data.longitud_residencia,
          data.latitud_trabajo,
          data.longitud_trabajo,
        ]
      );
      await db.end();
      res.json({ hello: results, method: req.method });
    } catch (error) {
      res.json({ err: error });
    }
  }
}
