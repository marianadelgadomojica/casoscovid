import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: "database-1.cdzoxzm3vyjm.us-east-2.rds.amazonaws.com",
    port: "3306",
    database: "Proyectofinaltelematica",
    user: "admin",
    password: "Moisesnana2107",
  },
});

module.exports = db;
