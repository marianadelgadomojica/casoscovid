import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const user = {
//           name: "hollman",
//           email: req.email,
//         };
//         return user;
//       },
//     }),
//   ],
// });

import axios from "axios";
const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        axios
          .get(`http://localhost:3000/api/getUsuario/${credentials.usuario}`)
          .then((response) => {
            if (response.status == 200) {
            } else {
              console.log("problemas en el servidor");
            }
          })
          .catch((e) => {
            console.log("error");
          });

        const res = await fetch(
          `http://localhost:3000/api/getUsuario/${credentials.usuario}`
        );
        const results1 = await res.json();
        const results = results1.usuarioRegistrado;
        var rol = "No autorizado";
        console.log("credendials");
        console.log(credentials.password);
        console.log("contraseña");
        console.log("results");
        console.log(results.length);
        console.log("vacio");
        if (results.length > 0) {
          console.log("entra");
          console.log(results[0].contraseña);
        }
        {
          console.log("results vacio");
        }
        if (
          results.length > 0 &&
          credentials.password === results[0].contraseña
        ) {
          rol = results[0].rol;
          console.log("Credenciales validas");
        } else {
          rol = "No autorizado";
          console.log(rol);
        }
        var user = {
          name: rol,
          email: "",
          image: "",
        };

        return user;
      },
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
