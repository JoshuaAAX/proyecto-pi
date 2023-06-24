import { Box, Grid, Typography, Button } from "@mui/material";
import img from "../../assets/sphinx.jpg";
import Faraon from "../../assets/faraon.png";
import Carro from "../../assets/CarroGuerra.png";
import Infanteria from "../../assets/infanteria.png";
import Murallas from "../../assets/murallas.jpg";
import Barco from "../../assets/barco.jpg";
import Diplomacia from "../../assets/diplomacia.jpg";

import { useNavigate } from "react-router-dom";

const filas = [
  {
    titulo: "Organización militar y jerarquía",
    parrafo:
      "El ejército egipcio estaba altamente organizado y jerarquizado. Los soldados eran reclutados de entre la población masculina y se dividían en unidades, como la infantería, la caballería y los arqueros. Había rangos militares que iban desde soldados rasos hasta altos oficiales, y el faraón era el comandante supremo.",

    imagen: Faraon,
    lado: "izq",
  },
  {
    titulo: "El poder de los carros de guerra",
    parrafo:
      "Los carros de guerra eran una de las armas más importantes del ejército egipcio. Estos vehículos ligeros eran tirados por caballos y llevaban a dos guerreros: un conductor y un arquero o lanza. Los carros eran utilizados para el ataque rápido y la movilidad en el campo de batalla, brindando a los egipcios una ventaja táctica.",
    imagen: Carro,
    lado: "der",
  },
  {
    titulo: "Infantería y arqueros",
    parrafo:
      "La infantería egipcia desempeñaba un papel crucial en las batallas. Los soldados de infantería llevaban lanzas, espadas y escudos para el combate cuerpo a cuerpo. Los arqueros egipcios eran especialmente hábiles y se destacaban por su precisión y velocidad en el disparo de flechas. La combinación de infantería y arqueros permitía a los egipcios mantener una defensa sólida y un ataque eficiente.",
    imagen: Infanteria,
    lado: "izq",
  },
  {
    titulo: "Fortificaciones y estrategia defensiva",
    parrafo:
      "La estrategia defensiva desempeñaba un papel importante en el Antiguo Egipto. Para proteger su territorio, los egipcios construían fortificaciones y ciudades amuralladas. Estas estructuras defensivas eran diseñadas para resistir los ataques enemigos y proporcionar puntos de observación estratégicos. La ubicación geográfica también era considerada, utilizando ríos y pantanos como barreras naturales.",
    imagen: Murallas,
    lado: "der",
  },
  {
    titulo: "La flota naval",
    parrafo:
      "El Antiguo Egipto también tenía una flota naval para proteger sus costas y controlar el comercio marítimo. Las embarcaciones egipcias estaban equipadas con remos y velas, y se utilizaban para el transporte de tropas y suministros, así como para el combate naval. La flota naval egipcia jugó un papel clave en la expansión y defensa del imperio.",
    imagen: Barco,
    lado: "izq",
  },
  {
    titulo: "La diplomacia y la guerra como último recurso",
    parrafo:
      "Aunque los egipcios eran hábiles en la guerra, preferían la diplomacia y el establecimiento de alianzas como medio para resolver conflictos. La guerra se consideraba el último recurso y se buscaban soluciones pacíficas cuando era posible.",
    imagen: Diplomacia,
    lado: "der",
  },
];

const Militar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ px: "15%", py: 4 }}>
        <Typography variant="h2" textAlign="center" sx={{ mb: 6 }}>
          Estrategia militar del antiguo Egipto
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          Aunque los egipcios eran hábiles en la guerra, preferían la diplomacia
          y el establecimiento de alianzas como medio para resolver conflictos.
          La guerra se consideraba el último recurso y se buscaban soluciones
          pacíficas cuando era posible.
        </Typography>
      </Box>
      {filas.map((fila, index) => (
        <Box key={index} sx={{ mb: 8, mt: 4 }}>
          <Tema
            titulo={fila.titulo}
            parrafo={fila.parrafo}
            imagen={fila.imagen}
            ladoImg={fila.lado}
          />
        </Box>
      ))}
      <Box sx={{ px: "15%", py: 4 }}>
        <Typography>
          la estrategia militar del Antiguo Egipto fue un componente vital para
          la protección, expansión y supervivencia del imperio. A través de una
          organización militar bien estructurada, el uso efectivo de armas como
          carros de guerra, infantería, arqueros y una planificación defensiva
          sólida, los egipcios lograron mantener el control sobre su territorio
          y enfrentarse a las amenazas externas. Además, su enfoque en la
          diplomacia y la resolución pacífica de conflictos demostró su
          sabiduría estratégica, la cual egipcia fue una combinación de fuerza,
          inteligencia y adaptabilidad, su legado continúa siendo un testimonio
          de la grandeza y la habilidad militar de esta antigua civilización.
        </Typography>
        <Button
          onClick={() => navigate("/mainpage")}
          sx={{
            color: "brown",
            outline: "1px solid #DBB489",
            backgroundColor: "rgba(219, 180, 137, 0.1)",
            display: "block",
            mx: "auto",
            mt: 4,
          }}
        >
          Ir a la página principal
        </Button>
        <Button
          onClick={() => navigate("/quizestrategia")}
          sx={{
            color: "brown",
            outline: "1px solid #DBB489",
            backgroundColor: "rgba(219, 180, 137, 0.1)",
            display: "block",
            mx: "auto",
            mt: 4,
          }}
        >
          Evalua tus conocimientos
        </Button>
      </Box>
    </Box>
  );
};

// eslint-disable-next-line react/prop-types
const Tema = ({ titulo, parrafo, imagen, ladoImg }) => {
  return (
    <>
      <Typography variant="h2" textAlign="center" sx={{ mb: 6 }}>
        {titulo}
      </Typography>
      <Grid container sx={{ px: { md: "20%", sm: 8 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: ladoImg === "izq" ? "row-reverse" : "row",
          }}
        >
          <Grid
            item
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {parrafo}
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            display="flex"
            justifyContent="center"
            sx={{
              height: "100%",
              backgroundImage: `url(${imagen})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              mx: 4,
            }}
          ></Grid>
        </Box>
      </Grid>
    </>
  );
};
export default Militar;
