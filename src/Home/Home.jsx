import React from "react";
import "./index.css";
import Footer from "./Footer";
import Header from "./Header";
import { createFB, readFB } from "../Firebase/api";

function Home() {
  return (
    <div className="home">
      <Header />
      {/* <div
        onClick={async () => {
          const guardar = await createFB(
            {
              id: 1,
              user: "@juan",
              title: "Texto",
              text: "Este es un nuevo texto la primer publicación de prueba",
              sources: [
                "https://picsum.photos/200",
                "https://picsum.photos/200",
                "https://picsum.photos/200",
              ],
            },
            "publics"
          );
          console.log(guardar);
        }}
        style={{ padding: "80px" }}
      >
        Crear
      </div> */}
      {/* <div
        onClick={async () => {
          try {
            const guardar = await readFB("publics");
            console.log(guardar);
          } catch (error) {
            console.error("Error al leer la colección:", error);
          }
        }}
        style={{ padding: "80px" }}
      >
        Leer
      </div> */}
      <Footer />
    </div>
  );
}

export default Home;
