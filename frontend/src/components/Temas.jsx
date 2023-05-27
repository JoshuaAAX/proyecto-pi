import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import politica from "../../assets/politica.png";
import religion from "../../assets/religion.png";
import arquitectura from "../../assets/arquitectura.png";
import arte from "../../assets/arte.png";
import gastronomia from "../../assets/gastronomia.jpg";
import estrategia from "../../assets/ejercito.jpg";

import { amber } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const filas = [
  {
    titulo: "Sistema político",
    parrafo:
      "En el Antiguo Egipto, los faraones eran gobernantes absolutos y considerados divinos. Su función era mantener el orden y la estabilidad, controlando el Nilo y garantizando buenas cosechas. La sociedad estaba jerarquizada, con el faraón en la cima y los agricultores y trabajadores en la base. Además de los faraones, la élite gobernante incluía sacerdotes, escribas y altos funcionarios. Aunque había esclavitud, era menos común que en otras civilizaciones de la época.",
    imagen: politica,
    lado: "izq",
  },
  {
    titulo: "Religión",
    parrafo:
      "La religión también desempeñó un papel central en la vida egipcia. Los antiguos egipcios adoraban a una gran cantidad de dioses y diosas, y creían en la existencia de una vida después de la muerte. Desarrollaron complejos rituales funerarios y construyeron enormes tumbas, conocidas como pirámides, para albergar los cuerpos embalsamados de los faraones y otros miembros de la élite.",
    imagen: religion,
    lado: "der",
  },
  {
    titulo: "Arquitectura",
    parrafo:
      "La arquitectura egipcia es otro aspecto destacado de esta civilización. Construyeron monumentos impresionantes, como las pirámides de Giza y los templos de Luxor y Karnak. Estas estructuras eran testimonio del poder y la riqueza de los faraones, y se construyeron con una precisión y belleza sorprendentes.",
    imagen: arquitectura,
    lado: "izq",
  },
  {
    titulo: "Arte",
    parrafo:
      "El arte egipcio es reconocido como uno de los aspectos más destacados de la antigua civilización egipcia. Se caracteriza por su durabilidad, monumentalidad y simbología rica. Está estrechamente relacionado con la religión y la vida después de la muerte. Las obras de arte egipcias tenían la finalidad de honrar a los dioses, rendir tributo a los faraones y garantizar la vida eterna de los difuntos. Se encontraban en templos, tumbas y monumentos funerarios.",
    imagen: arte,
    lado: "der",
  },
  {
    titulo: "Gastronomía",
    parrafo:
      "La gastronomía del Antiguo Egipto reflejaba la disponibilidad de alimentos y la cultura culinaria de la época. Los principales alimentos eran trigo y cebada, utilizados para hacer pan y cerveza. El río Nilo desempeñaba un papel fundamental al proporcionar agua para la agricultura, favoreciendo una sociedad agraria próspera. Además, el Nilo era una vía de transporte y comercio crucial, promoviendo el intercambio de bienes y la comunicación entre diferentes regiones de Egipto.",
    imagen: gastronomia,
    lado: "der",
  },
  {
    titulo: "Estrategia Militar",
    parrafo:
      "La estrategia militar en el Antiguo Egipto estaba estrechamente vinculada a la protección y expansión del reino. A lo largo de su historia, los egipcios desarrollaron diversas tácticas y estrategias militares para defender su territorio y mantener el control sobre regiones conquistadas.",
    imagen: estrategia,
    lado: "der",
  },
];

const Temas = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: amber[50], py: 8 }}>
      <Box sx={{ px: "15%", py: 4 }}>
        <Typography variant="h3" px="15%" textAlign="center" mb={4}>
          ¡Aquí comienza tu camino!
        </Typography>
        <Typography sx={{ px: "15%", py: 4 }}>
          Nuestro objetivo es brindarte una experiencia educativa y entretenida,
          llena de información detallada y visualmente cautivadora. Explora
          nuestras secciones dedicadas a la vida cotidiana en el antiguo Egipto,
          la arquitectura majestuosa de los templos y las tumbas, los
          jeroglíficos enigmáticos y los tesoros ocultos del arte egipcio.
        </Typography>

        <Typography sx={{ px: "15%", py: 4 }}>
          La civilización egipcia se caracterizó por su estabilidad política y
          social, así como por su avanzado conocimiento en diversos campos, como
          la arquitectura, la escritura, la medicina y la astronomía. Los
          antiguos egipcios creían en la vida después de la muerte y dedicaron
          gran parte de sus recursos y esfuerzos a la preparación para la vida
          en el más allá.
        </Typography>

        <Typography sx={{ px: "15%", py: 4 }}>
          La cultura egipcia se expresaba a través de la música, la danza, la
          pintura y la escultura. Los antiguos egipcios eran expertos en la
          talla de piedra y en la creación de obras de arte que representaban a
          dioses, faraones y escenas de la vida cotidiana. La pintura se
          utilizaba en los muros de los templos y las tumbas para narrar
          historias y preservar la memoria de los difuntos.
        </Typography>

        <Typography sx={{ px: "15%", py: 4 }}>
          Nuestro objetivo es brindarte una experiencia educativa y entretenida,
          llena de información detallada y visualmente cautivadora. Explora
          nuestras secciones dedicadas a la vida cotidiana en el antiguo Egipto,
          la arquitectura majestuosa de los templos y las tumbas, los
          jeroglíficos enigmáticos y los tesoros ocultos del arte egipcio.
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          p: 10,
        }}
      >
        {filas.map((fila, index) => (
          <Grid item md={4} key={index}>
            <Tema
              titulo={fila.titulo}
              parrafo={fila.parrafo}
              imagen={fila.imagen}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ px: "15%", py: 4 }}>
        <Typography>
          El Antiguo Egipto tuvo un impacto duradero en la historia y la
          cultura. Su legado perdura en la actualidad a través de sus monumentos
          y artefactos arqueológicos, que han sido objeto de estudio y
          admiración durante siglos. La civilización egipcia dejó un rico legado
          cultural, artístico y científico que sigue siendo objeto de
          fascinación y estudio en la actualidad.
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
          Ir a la pagina principal
        </Button>
      </Box>
    </Box>
  );
};

// eslint-disable-next-line react/prop-types
const Tema = ({ titulo, parrafo, imagen }) => {
  return (
    <Card>
      <CardMedia sx={{ height: 300 }} image={imagen} />
      <CardContent sx={{ px: 5, py: 5, height: 350 }}>
        <Typography gutterBottom variant="h4" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {parrafo}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Temas;

/*  <Typography variant="h2" textAlign="center" sx={{ mb: 6 }}>
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
      </Grid> */
