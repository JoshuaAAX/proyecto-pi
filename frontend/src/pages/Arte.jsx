import { Box, Grid, Typography, Button } from "@mui/material";
import img from "../../assets/sphinx.jpg";
import simbolismo from "../../assets/simbolismo.jpg";
import escultura from "../../assets/escultura.png";
import funerario from "../../assets/funerario.jpg";
import joyas from "../../assets/joyas.jpg";
import jeroglifico2 from "../../assets/jeroglifico2.jpg";

import { useNavigate } from "react-router-dom";

const filas = [
  {
    titulo: "Jerarquía y simbolismo",
    parrafo:
      "El arte del Antiguo Egipto estaba impregnado de simbolismo y seguía una estricta jerarquía visual. Los faraones y los dioses eran representados de manera prominente y más grandes en tamaño para reflejar su estatus divino y poder. Las figuras humanas y animales también estaban representadas de acuerdo con su importancia social y religiosa.",

    imagen: simbolismo,
    lado: "izq",
  },
  {
    titulo: "La pintura y la escultura",
    parrafo: "La pintura egipcia se encontraba principalmente en murales de tumbas y templos, y tenía un estilo plano y bidimensional con colores vivos y contrastantes. Las esculturas egipcias se caracterizaban por su rigidez y frontalidad, con figuras de pie con las piernas juntas y los brazos pegados al cuerpo. Estas representaciones artísticas buscaban capturar la esencia eterna y la naturaleza divina de los individuos.",
    imagen: escultura,
    lado: "der",
  },
  {
    titulo: "Arte funerario",
    parrafo: "El arte funerario desempeñaba un papel fundamental en la cultura egipcia, ya que se creía que el alma del difunto continuaba su existencia en el más allá. Los murales, relieves y estatuas en las tumbas representaban escenas de la vida cotidiana, rituales religiosos y el viaje del alma en el inframundo. Este arte se realizaba con la intención de proporcionar al difunto una vida placentera y eterna.",
    imagen: funerario,
    lado: "izq",
  },
  {
    titulo: "Joyería y orfebrería",
    parrafo: "Los egipcios eran expertos en la creación de joyas y objetos preciosos. Utilizaban metales como el oro y la plata, así como piedras preciosas y vidrio coloreado, para crear collares, brazaletes, anillos y amuletos. Estas joyas se usaban tanto en la vida cotidiana como en rituales religiosos, y reflejaban la importancia del adorno personal en la sociedad egipcia.",
    imagen: joyas,
    lado: "der",
  },
   {
    titulo: "El legado duradero del arte egipcio",
    parrafo: "El arte del Antiguo Egipto ha dejado un legado duradero en la historia del arte. Su estilo distintivo y su atención a los detalles simbólicos y religiosos han influido en muchas culturas posteriores. Además, las técnicas de conservación utilizadas por los egipcios para preservar sus obras de arte han permitido que muchos ejemplos sobrevivan hasta nuestros días, brindándonos una invaluable ventana a su cultura y civilización.",
    imagen: jeroglifico2,
    lado: "izq",
  },


];

const Arte = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ px: "15%", py: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 6 }}>
        Arte del antiguo Egipto
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
        El arte del Antiguo Egipto se caracterizó por su duradero legado artístico que reflejaba 
        la cultura y las creencias religiosas de esta antigua civilización. A lo largo de los siglos, 
        los egipcios desarrollaron un estilo artístico distintivo y altamente simbólico que abarcaba 
        una variedad de formas, desde la pintura y la escultura hasta la arquitectura y la orfebrería. 
        Su arte se centraba en la representación precisa y jerárquica de figuras humanas y divinas, 
        y tenía una fuerte conexión con la vida religiosa y el culto a los dioses
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
        El arte del Antiguo Egipto fue un testimonio impresionante de la rica cultura 
        y creencias religiosas de esta antigua civilización. A través de la pintura, 
        la escultura, la arquitectura y otros medios artísticos, los egipcios lograron 
        crear obras duraderas que reflejaban su cosmovisión y su conexión con el mundo divino. 
        Su estilo distintivo, su simbolismo profundo y su enfoque en la representación jerárquica 
        han dejado un legado perdurable que continúa fascinando y inspirando a generaciones posteriores.
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
onClick={() => navigate('/quizarte')}
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
export default Arte;