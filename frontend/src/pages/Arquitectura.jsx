import { Box, Grid, Typography, Button } from "@mui/material";
import img from "../../assets/sphinx.jpg";
import Monumento from "../../assets/monumento.jpg"
import Piedra from "../../assets/piedra.jpg"
import Templo from "../../assets/templo.jpeg"
import Piramide from "../../assets/piramidesArqui.jpg"
import Obelisco from "../../assets/obelisco.jpg"
import Jeroglifico from "../../assets/jeroglifico.jpg"
import Mastabas from "../../assets/mastabas.jpg"

import { useNavigate } from "react-router-dom";

const filas = [
  {
    titulo: "Monumentalidad en la construcción",
    parrafo:
      "La arquitectura del Antiguo Egipto se destacaba por su enfoque en la monumentalidad. Los egipcios construyeron grandes estructuras como templos, pirámides y obeliscos que sobresalían en el paisaje y reflejaban el poder y la grandeza del faraón.",
        
    imagen: Monumento,
    lado: "izq",
  },
  {
    titulo: "Uso de la piedra",
    parrafo: "La piedra, especialmente la piedra caliza y el granito, fue el material de construcción principal en el Antiguo Egipto. Los egipcios aprovecharon las canteras locales para obtener bloques de piedra y los tallaron con precisión para construir sus monumentos duraderos.",
    imagen: Piedra,
    lado: "der",
  },
  {
    titulo: "Templos impresionantes",
    parrafo:
    "Los templos eran el centro de la vida religiosa y social en el Antiguo Egipto. Eran estructuras enormes con patios abiertos, columnatas y santuarios interiores. El Templo de Karnak y el Templo de Luxor son ejemplos impresionantes de la arquitectura de templos egipcios.",
    imagen: Templo,
    lado: "izq",
  },
  {
    titulo: "Las pirámides",
    parrafo: "Las pirámides son quizás el símbolo más reconocido de la arquitectura egipcia. Estas enormes estructuras funerarias fueron construidas para los faraones y estaban destinadas a preservar sus cuerpos y asegurar su vida después de la muerte. La Gran Pirámide de Giza es la más famosa y la única de las Siete Maravillas del Mundo Antiguo que aún perdura.",
    imagen: Piramide,
    lado: "der",
  },
   {
    titulo: "Obeliscos",
    parrafo: "Los obeliscos eran monumentos altos y delgados hechos de una sola pieza de piedra. Eran erigidos en parejas frente a los templos y se creía que simbolizaban rayos de sol petrificados. El Obelisco Inacabado en la cantera de Asuán es un ejemplo notable de un obelisco egipcio que nunca fue completado.",
    imagen: Obelisco,
    lado: "izq",
  },
  {
    titulo: "Decoración y simbolismo",
    parrafo: "La arquitectura egipcia se caracterizaba por su detallada decoración y simbolismo. Los muros y las columnas estaban adornados con bajorrelieves y jeroglíficos que contaban historias y representaban a los dioses. El simbolismo era importante en el diseño, con elementos como el uso del color y la orientación hacia el río Nilo.",
    imagen: Jeroglifico,
    lado: "der",
  },
   {
    titulo: "Arquitectura funeraria",
    parrafo: "El Antiguo Egipto desarrolló una variedad de estructuras funerarias, además de las pirámides, para honrar a los muertos. Estas incluían mastabas (tumbas rectangulares con una capilla sobre ellas), hipogeos (tumbas subterráneas) y el Valle de los Reyes, donde se enterraron muchos faraones.",
    imagen: Mastabas,
    lado: "izq",
  },

];

const Arquitectura = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ px: "15%", py: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 6 }}>
        Arquitectura en el antiguo Egipto
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
        La arquitectura del Antiguo Egipto fue una manifestación impresionante del ingenio y 
        la habilidad de esta antigua civilización. A lo largo de los siglos, los egipcios 
        construyeron monumentos duraderos que reflejaban su cultura, creencias religiosas y 
        organización social. Su arquitectura se caracterizaba por su monumentalidad, el uso de 
        materiales duraderos, como la piedra, y una meticulosa atención al simbolismo y la decoración.
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
        La arquitectura del Antiguo Egipto sigue siendo una fuente de asombro y fascinación en la actualidad. 
        Su grandeza y perfección técnica reflejan la habilidad y la dedicación de los antiguos egipcios en la 
        construcción de monumentos duraderos que han resistido la prueba del tiempo.
        </Typography>
        <Button
        onClick={() => navigate('/mainpage')}
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
onClick={() => navigate('/quizzArquitectura')}
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
      <Grid container sx={{ px: {md:"20%", sm: 8} }}>
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
export default  Arquitectura;