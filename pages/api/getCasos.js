const db = require("../../db/db");

export default async function getCasos(req, res) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Solo se aceptan Get" });
  } else {
    try {
      const results = await db.query("SELECT * FROM Registro_de_casos");
      await db.end();

      const results2 = await db.query(
        "SELECT * FROM Estado_de_Caso order by idEstado_de_caso desc"
      );
      await db.end();

      const cedula = [];
      const estado = [];
      const union = [];
      results2.forEach((element) => {
        if (!cedula.includes(element.cedula)) {
          cedula.push(element.cedula);
          estado.push(element.estado);
          union.push({
            cedula: element.cedula,
            estado: element.estado,
          });
        }
      });

      const respuesta = [];

      const muertos = [];
      const curados = [];
      const casa = [];
      const hospital = [];
      const uci = [];
      const positivos = [];
      const negativos = [];
      results.forEach((element) => {
        union.forEach((element2) => {
          if (element.cedula === element2.cedula) {
            console.log("f");
            if (element.resultado_examen === "negativo") {
              negativos.push("negativo");
            }
            if (element2.estado === "En UCI") {
              uci.push("uci");
            }
            if (element2.estado === "En Tratamiento Hospital") {
              hospital.push("hospital");
            }
            if (element2.estado === "En Tratamiento Casa") {
              casa.push("casa");
            }
            if (element2.estado === "Curado") {
              curados.push("curado");
            }
            if (element2.estado === "Muerte") {
              muertos.push("muertos");
            }

            if (element.resultado_examen === "negativo") {
              positivos.push(element.resutado_examen);
              respuesta.push({
                latitud_residencia: element.latitud_residencia,
                longitud_residencia: element.longitud_residencia,
                color: "green",
              });
            } else if (
              element2.estado === "En Tratamiento Casa" ||
              element2.estado === "En Tratamiento Hospital"
            ) {
              respuesta.push({
                latitud_residencia: element.latitud_residencia,
                longitud_residencia: element.longitud_residencia,
                color: "yellow",
              });
            } else if (element2.estado === "En UCI") {
              respuesta.push({
                latitud_residencia: element.latitud_residencia,
                longitud_residencia: element.longitud_residencia,
                color: "orange",
              });
            } else if (element2.estado === "Curado") {
              respuesta.push({
                latitud_residencia: element.latitud_residencia,
                longitud_residencia: element.longitud_residencia,
                color: "pink",
              });
            } else if (element2.estado === "Muerte") {
              respuesta.push({
                latitud_residencia: element.latitud_residencia,
                longitud_residencia: element.longitud_residencia,
                color: "red",
              });
            }
          }
        });
      });

      const graficas = {
        totales: [
          `${positivos.length}`,
          `${muertos.length}`,
          `${curados.length}`,
        ],
        infectados: [
          `${casa.length}`,
          `${hospital.length}`,
          `${uci.length}`,
          `${muertos.length}`,
        ],
        positivos_negativos: [`${positivos.length}`, `${negativos.length}`],
      };
      console.log("objeto enviar", respuesta);
      console.log("cedula", cedula);
      console.log("estado", estado);

      res.json({
        DatosCasosRegistrados: results,
        estados: results2,
        general: respuesta,
        graficas: graficas,
        method: req.method,
      });
    } catch (error) {
      return { error };
    }
  }
}
