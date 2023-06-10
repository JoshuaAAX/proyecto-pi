import { Box, Grid, Typography, Button } from "@mui/material";
import img from "../../assets/sphinx.jpg";
import Ra from "../../assets/Ra.jpg"
import Anubis from "../../assets/Anubis.png"
import Osiris from "../../assets/Osiris.png"
import Seth from "../../assets/Set.png"
import Hathor from "../../assets/Hathor.png"
import Thoth from "../../assets/Thoth.png"
import Maat from "../../assets/Maat.png"
import Isis from "../../assets/Isis.png"
import { useNavigate } from "react-router-dom";

const filas = [
  {
    titulo: "Ra",
    parrafo:
      "Ra era uno de los dioses más importantes en la religión del antiguo Egipto.Era considerado el dios del sol y se le atribuía gran poder y autoridad. Ra era representado como un hombre con cabeza de halcón coronada por un disco solar y un cobra en la frente.Se creía que Ra viajaba por el cielo durante el día en su barca solar, trayendo luz y calor al mundo. Durante la noche, Ra emprendía un viaje peligroso a través del inframundo, luchando contra las fuerzas del caos y las serpientes malignas. Al amanecer, renacía como el sol de la mañana, simbolizando el renacimiento y la renovación.",
        
    imagen: Ra,
    lado: "izq",
  },
  {
    titulo: "Anubis",
    parrafo: "Anubis era una de las deidades más importantes en la mitología del antiguo Egipto. Se le asociaba con el proceso de embalsamamiento y el más allá, y era venerado como el dios de los muertos, los funerales y la momificación. Anubis era representado como un hombre con cabeza de chacal o como un chacal completo acostado. El chacal estaba estrechamente asociado con los cementerios y se creía que tenía habilidades sobrenaturales para proteger las tumbas y guiar a las almas de los difuntos hacia el más allá. Por esta razón, Anubis era considerado el guardián de las tumbas y el encargado de juzgar el corazón de los fallecidos en el proceso de juicio de los muertos.  Durante el proceso de momificación, los embalsamadores buscaban la protección de Anubis y llevaban máscaras y amuletos que representaban su imagen. Se creía que Anubis supervisaba el proceso de momificación y protegía el cuerpo embalsamado hasta que el difunto alcanzara la vida después de la muerte.",
    imagen: Anubis,
    lado: "der",
  },
  {
    titulo: "Osiris",
    parrafo:
    "Era considerado el dios de la vida después de la muerte, la fertilidad, la vegetación y el juicio divino. Osiris era representado como un hombre con piel verde o negra, llevando una corona atef (una corona blanca con plumas). Según la mitología, Osiris fue el primer faraón y gobernó sobre Egipto en tiempos antiguos, enseñando a los egipcios la agricultura y las leyes. Sin embargo, su hermano Seth, movido por la envidia y el resentimiento, conspiró contra él y lo asesinó, desmembrando su cuerpo y dispersando sus restos por todo Egipto. Isis, la esposa de Osiris y hermana al mismo tiempo, reunió los fragmentos del cuerpo de Osiris y lo resucitó utilizando magia. Osiris se convirtió entonces en el rey del inframundo y el juez supremo de las almas en el juicio de los muertos. Se creía que solo aquellos cuyos corazones fueran ligeros como una pluma y pasaran el juicio podrían alcanzar la vida eterna en el más allá.",
    imagen: Osiris,
    lado: "izq",
  },
  {
    titulo: "Seth",
    parrafo: "Fue una de las deidades principales en la mitología del antiguo Egipto. Sin embargo, es importante señalar que Seth no era considerado un dios benevolente o positivo como la mayoría de las otras deidades egipcias. Era conocido como el dios de las tormentas, la violencia, el caos y la desorden. Seth era representado como un animal compuesto, con un cuerpo humano y cabeza de animal, a menudo identificado como un animal desconocido o una bestia salvaje. Seth era el hermano de Osiris, a quien asesinó y desmembró por envidia y resentimiento. Seth era un dios inestable y violento, y se le atribuía la responsabilidad de las tormentas y los desastres naturales. Se le consideraba una fuerza del caos que amenazaba el orden establecido y la armonía del mundo.",
    imagen: Seth,
    lado: "der",
  },
   {
    titulo: "Hathor",
    parrafo: "Era considerada una deidad multifacética asociada con el amor, la maternidad, la música, la danza, la belleza, la alegría y la protección. Hathor era representada como una mujer con cabeza de vaca o con una corona solar que llevaba el disco solar y dos cuernos de vaca. La cabeza de vaca era un símbolo de maternidad y fertilidad, y Hathor era considerada la madre de todos los seres vivos. Su apariencia también podía variar, ya que en algunas representaciones se la mostraba con rasgos completamente humanos.",
    imagen: Hathor,
    lado: "izq",
  },
  {
    titulo: "Thoth",
    parrafo: "Thoth era uno de los dioses más destacados en la mitología del antiguo Egipto. Era venerado como el dios de la sabiduría, la escritura, la magia, la Luna, el tiempo y el conocimiento. Thoth era representado con cabeza de ibis o babuino sagrado. Como dios de la escritura y la sabiduría, se le asociaba con la escritura jeroglífica y se creía que había inventado el lenguaje y los sistemas de escritura. Además, se le atribuía la capacidad de mediar y resolver disputas, y era considerado el patrón de los escribas y los intelectuales. En la mitología egipcia, Thoth desempeñaba varios roles importantes. Se le consideraba el secretario y consejero de los dioses y era conocido como el registrador de los eventos divinos y humanos",
    imagen: Thoth,
    lado: "der",
  },
   {
    titulo: "Maat",
    parrafo: "Era venerada como la personificación del orden, la justicia, la verdad y la armonía en el universo y en la sociedad humana. Maat era representada como una mujer con una pluma de avestruz, símbolo de la verdad, en su cabeza. A menudo se la mostraba acompañada por una balanza, que utilizaba en el juicio de los muertos para pesar el corazón de una persona contra la pluma de la verdad. Si el corazón resultaba más liviano que la pluma, el individuo se consideraba justo y digno de la vida eterna en el más allá. La importancia de Maat radicaba en su papel como principio fundamental que regía la existencia y el funcionamiento del universo. Se creía que el equilibrio y el orden cósmico dependían de la preservación de Maat. La armonía social, la estabilidad política y el bienestar general estaban estrechamente vinculados a la práctica y el respeto de Maat en la vida cotidiana.",
    imagen: Maat,
    lado: "izq",
  },
  {
    titulo: "Isis",
    parrafo: "Era considerada la diosa de la maternidad, la magia, la protección, la curación y la fertilidad. Además, tenía un papel importante en la religión funeraria y era vista como una diosa que brindaba consuelo y ayuda en el más allá. Isis era representada como una mujer con un trono o un disco solar en la cabeza, a menudo coronada con cuernos de vaca y rodeada de serpientes. Isis jugó un papel significativo en los mitos egipcios. Era la esposa de Osiris y madre de Horus. Después de la muerte de Osiris a manos de su hermano Seth, Isis utilizó su magia para resucitarlo y concebir a su hijo Horus. Se le atribuía la capacidad de controlar los elementos y de usar su magia para proteger y curar. Isis era venerada como una diosa compasiva y amorosa. Se creía que escuchaba las plegarias y brindaba consuelo y ayuda a aquellos que la invocaban. Su papel como diosa de la maternidad y la protección la convirtió en una figura importante en la vida cotidiana de los egipcios.",
    imagen: Isis,
    lado: "der",
  },
];

const Religion = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ px: "15%", py: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 6 }}>
        Religión en el antiguo Egipto
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
        La religión en el antiguo Egipto era una parte fundamental
        de la vida cotidiana y la cultura egipcia. Los antiguos egipcios 
        tenían una creencia en una amplia variedad de dioses y diosas que gobernaban
        diferentes aspectos del mundo y de la vida humana. La religión desempeñaba
        un papel importante en la sociedad, la política y la vida después de la muerte.
        Los egipcios creían en la existencia de dioses y diosas que eran representados con características
        humanas o animales. Cada deidad tenía sus propias responsabilidades y dominios, y se les adoraba
        y honraba a través de rituales y ceremonias. 
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
        Algunos de los dioses más importantes incluían a Ra, el dios del sol; Osiris, el dios de la vida después de la muerte e Isis, la diosa de la maternidad y la magia.
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
        La religión en el antiguo Egipto también se centraba en la vida después de la muerte.
        Los egipcios creían en la existencia de una vida después de la muerte y se esforzaban
        por asegurarse una vida eterna. Para lograr esto, se llevaban a cabo rituales de embalsamamiento 
        y se construían tumbas y monumentos funerarios, como las pirámides, para proteger los cuerpos
        y las almas de los difuntos. El Libro de los Muertos era una colección de hechizos y oraciones 
        que se colocaban en las tumbas para guiar y proteger al difunto en su viaje al más allá.
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
onClick={() => navigate('/quizzreligion')}
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
export default Religion;


