import { Box, Grid, Typography, Button } from "@mui/material";
import img from "../../assets/sphinx.jpg";
import pan from "../../assets/pan2.jpeg";
import cerveza from "../../assets/cerveza.jpg";
import vino from "../../assets/vino.jpg";
import pescado from "../../assets/pescado.jpg";
import carne from "../../assets/carne.png";
import frutas from "../../assets/frutas.png";
import miel from "../../assets/miel.jpg"
import { useNavigate } from "react-router-dom";

const filas = [
  {
    titulo: "Pan",
    parrafo:
      " El pan era un alimento básico en la dieta egipcia antigua. Se elaboraba principalmente con trigo y se horneaba en forma de panes redondos o alargados. También se preparaban panes especiales para ocasiones festivas.",
        
    imagen: pan,
    lado: "izq",
  },
  {
    titulo: "Cerveza",
    parrafo: "La cerveza era la bebida más común en el antiguo Egipto. Se elaboraba a partir de cebada y se consumía tanto por niños como por adultos. Era una parte esencial de la vida diaria y también se usaba en rituales religiosos",
    imagen: cerveza,
    lado: "der",
  },
  {
    titulo: "Vino",
    parrafo: "El vino también era una bebida popular, aunque estaba más asociado con la élite y las clases altas. Se producía a partir de uvas y se almacenaba en ánforas de cerámica.",
    imagen: vino,
    lado: "izq",
  },
  {
    titulo: "Pescado del Nilo",
    parrafo: "El río Nilo proporcionaba una fuente abundante de pescado en la dieta egipcia antigua. Los egipcios pescaban diferentes tipos de peces, como tilapia, carpa y anguila, y los preparaban asados, ahumados o hervidos.",
    imagen: pescado,
    lado: "der",
  },
   {
    titulo: "Carne",
    parrafo: "La carne, especialmente la de res, cerdo y aves de corral, también se consumía en el antiguo Egipto. Sin embargo, debido a su costo y disponibilidad limitada, era más común entre la élite y los nobles.",
    imagen: carne,
    lado: "izq",
  },
  {
    titulo: "Frutas y Verduras",
    parrafo: "Los egipcios consumían una variedad de frutas y vegetales frescos, incluyendo dátiles, uvas, higos, melones, lechugas, cebollas y ajos. Estos productos agrícolas se utilizaban en platos diversos y también se consumían solos.",
    imagen: frutas,
    lado: "der",
  },
   {
    titulo: "Miel",
    parrafo: "La miel se utilizaba como endulzante en la cocina del antiguo Egipto. También se usaba para hacer bebidas y se consideraba un ingrediente valioso y apreciado.",
    imagen: miel,
    lado: "izq",
  },
 
];

const Gastronomia = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ px: "15%", py: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 6 }}>
        Gastronomia en el antiguo Egipto
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
        La gastronomía del antiguo Egipto se basaba en gran medida en los alimentos
         y productos disponibles en la región del río Nilo. Los antiguos egipcios cultivaban
          una variedad de cultivos como trigo, cebada, lentejas, guisantes, cebollas, ajos, sandías,
           uvas y dátiles. También criaban animales como vacas, ovejas, cabras, cerdos, aves de corral
            y pescado del Nilo.
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
        Los faraones y la élite tenían acceso a una mayor variedad de alimentos y platos,
         mientras que la población común dependía en gran medida de los productos básicos 
         disponibles localmente. La comida desempeñaba un papel central en la vida y las creencias
          religiosas de los antiguos egipcios, y se le daba una gran importancia en festivales y rituales.
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
onClick={() => navigate('/quizzgastronomia')}
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
export default Gastronomia;