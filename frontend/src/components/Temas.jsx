import { Box, Grid, Typography } from "@mui/material";
import img from "../../assets/sphinx.jpg";

const filas = [
  {
    titulo: "Sistema político",
    parrafo:
      "Uno de los aspectos más conocidos del Antiguo Egipto es su sistema de gobierno, en el cual los faraones gobernaban como monarcas absolutos y eran considerados divinos. Los faraones eran responsables de mantener el orden y la estabilidad en el reino, y se les atribuía el poder de controlar el Nilo y garantizar el éxito de las cosechas. La sociedad egipcia estaba estructurada en una jerarquía, con el faraón en la cúspide y los agricultores y trabajadores en la base. La élite gobernante incluía a sacerdotes, escribas y altos funcionarios, quienes desempeñaban un papel crucial en la administración del reino. La esclavitud también existía en el Antiguo Egipto, aunque en menor medida que en otras civilizaciones de la época.",
    imagen: img,
    lado: "izq",
  },
  {
    titulo: "Religión",
    parrafo:
        "La religión también desempeñó un papel central en la vida egipcia. Los antiguos egipcios adoraban a una gran cantidad de dioses y diosas, y creían en la existencia de una vida después de la muerte. Desarrollaron complejos rituales funerarios y construyeron enormes tumbas, conocidas como pirámides, para albergar los cuerpos embalsamados de los faraones y otros miembros de la élite.",
    imagen: img,
    lado: "der",
  },
  {
    titulo: "Arquitectura",
    parrafo:
        "La arquitectura egipcia es otro aspecto destacado de esta civilización. Construyeron monumentos impresionantes, como las pirámides de Giza y los templos de Luxor y Karnak. Estas estructuras eran testimonio del poder y la riqueza de los faraones, y se construyeron con una precisión y belleza sorprendentes.",
    imagen: img,
    lado: "izq",
  },
  {
    titulo: "Arte",
    parrafo:
        "El arte egipcio es uno de los aspectos más destacados y reconocidos de la antigua civilización egipcia. Durante miles de años, los egipcios desarrollaron un estilo artístico distintivo y altamente simbólico que se caracteriza por su durabilidad, monumentalidad y rica simbología. El arte egipcio estaba estrechamente ligado a la religión y la vida después de la muerte. La mayoría de las obras de arte se crearon con el propósito de honrar a los dioses, rendir homenaje a los faraones y asegurar la vida eterna de los difuntos. Estas obras de arte se encontraban en templos, tumbas y monumentos funerarios.",
    imagen: img,
    lado: "der",
  },
  {
    titulo: "Gastronomía",
    parrafo:
     "La gastronomía del Antiguo Egipto reflejaba la disponibilidad de alimentos en la región y la cultura culinaria de la época. La base de la dieta egipcia era la agricultura, en particular el trigo y la cebada, que se utilizaban para hacer pan y cerveza. El río Nilo desempeñó un papel fundamental en la vida de los antiguos egipcios. Proporcionaba agua para el riego de los campos, lo que permitía una agricultura próspera y el crecimiento de una sociedad agraria. Además, el Nilo servía como una importante vía de transporte y comercio, facilitando el intercambio de bienes y la comunicación entre diferentes regiones.",
    imagen: img,
    lado: "der",
  },
  {
    titulo: "Estrategia Militar",
    parrafo:
        "La estrategia militar en el Antiguo Egipto estaba estrechamente vinculada a la protección y expansión del reino. A lo largo de su historia, los egipcios desarrollaron diversas tácticas y estrategias militares para defender su territorio y mantener el control sobre regiones conquistadas.",
    imagen: img,
    lado: "der",
  },


];

const Temas = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ px: "15%", py: 4 }}>
      <Typography  sx={{ px: "15%", py: 4 }} >
        Nuestro objetivo es brindarte una experiencia educativa y entretenida, llena de información detallada 
        y visualmente cautivadora. Explora nuestras secciones dedicadas a la vida cotidiana en el antiguo Egipto, 
        la arquitectura majestuosa de los templos y las tumbas, los jeroglíficos enigmáticos y los tesoros ocultos 
        del arte egipcio.
        </Typography>

       
        <Typography  sx={{ px: "15%", py: 4 }} >
        La civilización egipcia se caracterizó por su estabilidad política y social, así como por su
        avanzado conocimiento en diversos campos, como la arquitectura, la escritura, la medicina
        y la astronomía. Los antiguos egipcios creían en la vida después de la muerte y dedicaron
        gran parte de sus recursos y esfuerzos a la preparación para la vida en el más allá.
        </Typography>

        <Typography  sx={{ px: "15%", py: 4 }} >
        La cultura egipcia se expresaba a través de la música, la danza, la pintura y la escultura.
        Los antiguos egipcios eran expertos en la talla de piedra y en la creación de obras de arte
        que representaban a dioses, faraones y escenas de la vida cotidiana. La pintura se utilizaba
        en los muros de los templos y las tumbas para narrar historias y preservar la memoria de los
        difuntos.
        </Typography>

        <Typography  sx={{ px: "15%", py: 4 }} >
        Nuestro objetivo es brindarte una experiencia educativa y entretenida, llena de información detallada 
        y visualmente cautivadora. Explora nuestras secciones dedicadas a la vida cotidiana en el antiguo Egipto, 
        la arquitectura majestuosa de los templos y las tumbas, los jeroglíficos enigmáticos y los tesoros ocultos 
        del arte egipcio.
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
        El Antiguo Egipto tuvo un impacto duradero en la historia y la cultura. Su legado perdura en
        la actualidad a través de sus monumentos y artefactos arqueológicos, que han sido objeto
        de estudio y admiración durante siglos. La civilización egipcia dejó un rico legado cultural,
        artístico y científico que sigue siendo objeto de fascinación y estudio en la actualidad.
        </Typography>
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
export default Temas;
