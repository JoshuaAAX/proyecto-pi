import img from "../../assets/sphinx.jpg";
import Ra from "../../assets/Ra.jpg";
import Anubis from "../../assets/Anubis.png";
import Osiris from "../../assets/Osiris.png";
import Seth from "../../assets/Set.png";
import Hathor from "../../assets/Hathor.png";
import Thoth from "../../assets/Thoth.png";
import Maat from "../../assets/Maat.png";
import Isis from "../../assets/Isis.png";
import Gato from "../../assets/complete_cat.png";

import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import background from "../../assets/background.png";

import "../styles/Slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { toast } from "react-hot-toast";

import TouchAppIcon from "@mui/icons-material/TouchApp";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

const Gastronomia = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: "ondemand",
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => setIndice(newIndex),
    customPaging: (i) => (
      <div
        style={{
          position: "fixed",
          bottom: 30,
          width: "30px",
          color:
            i === indice ? "#DBB489" : "gray",
          transition: "color .5s ease-in-out",
        }}
      >
        <CircleIcon fontSize="14px" />
      </div>
    ),
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      e.deltaY > 0
        ? sliderRef.current.slickNext()
        : sliderRef.current.slickPrev();
    };

    const slickListDiv = document.getElementsByClassName("slick-list")[0];
    slickListDiv.addEventListener("wheel", handleWheel);

    return () => {
      // Limpiar el event listener al desmontar el componente
      slickListDiv.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const [initialRender, setInitialRender] = useState(false);
  setTimeout(() => {
    setInitialRender(true);
  }, 6000);

  const small = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [indice, setIndice] = useState(0);

  const temas = {
    0: (
      <AnimatePresence>
        {indice === 0 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
           
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Religión en el antiguo Egipto
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Gato})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    La religión en el antiguo Egipto era una parte fundamental
                    de la vida cotidiana y la cultura egipcia. Los antiguos
                    egipcios tenían una creencia en una amplia variedad de
                    dioses y diosas que gobernaban diferentes aspectos del mundo
                    y de la vida humana. La religión desempeñaba un papel
                    importante en la sociedad, la política y la vida después de
                    la muerte. Los egipcios creían en la existencia de dioses y
                    diosas que eran representados con características humanas o
                    animales. Cada deidad tenía sus propias responsabilidades y
                    dominios, y se les adoraba y honraba a través de rituales y
                    ceremonias.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),

    //-------------------------------------------------------------------
    1: (
      <AnimatePresence>
        {indice === 1 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Ra
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Ra})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Ra era uno de los dioses más importantes en la religión del
                    antiguo Egipto.Era considerado el dios del sol y se le
                    atribuía gran poder y autoridad. Ra era representado como un
                    hombre con cabeza de halcón coronada por un disco solar y un
                    cobra en la frente. Se creía que Ra viajaba por el cielo
                    durante el día en su barca solar, trayendo luz y calor al
                    mundo. Durante la noche, Ra emprendía un viaje peligroso a
                    través del inframundo, luchando contra las fuerzas del caos
                    y las serpientes malignas. Al amanecer, renacía como el sol
                    de la mañana, simbolizando el renacimiento y la renovación.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),

    //-------------------------------------------------------------------
    2: (
      <AnimatePresence>
        {indice === 2 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Anubis
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Anubis})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Anubis era una de las deidades más importantes en la
                    mitología del antiguo Egipto. Se le asociaba con el proceso
                    de embalsamamiento y el más allá, y era venerado como el
                    dios de los muertos, los funerales y la momificación. Anubis
                    era representado como un hombre con cabeza de chacal o como
                    un chacal completo acostado. El chacal estaba estrechamente
                    asociado con los cementerios y se creía que tenía
                    habilidades sobrenaturales para proteger las tumbas y guiar
                    a las almas de los difuntos hacia el más allá. Por esta
                    razón, Anubis era considerado el guardián de las tumbas y el
                    encargado de juzgar el corazón de los fallecidos en el
                    proceso de juicio de los muertos. 
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),

    //-------------------------------------------------------------------
    3: (
      <AnimatePresence>
        {indice === 3 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Osiris
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Osiris})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Era considerado el dios de la vida después de la muerte, la
                    fertilidad, la vegetación y el juicio divino. Osiris era
                    representado como un hombre con piel verde o negra, llevando
                    una corona atef (una corona blanca con plumas). Según la
                    mitología, Osiris fue el primer faraón y gobernó sobre
                    Egipto en tiempos antiguos, enseñando a los egipcios la
                    agricultura y las leyes. Sin embargo, su hermano Seth,
                    movido por la envidia y el resentimiento, conspiró contra él
                    y lo asesinó, desmembrando su cuerpo y dispersando sus
                    restos por todo Egipto. Isis, la esposa de Osiris y hermana
                    al mismo tiempo, reunió los fragmentos del cuerpo de Osiris
                    y lo resucitó utilizando magia. Osiris se convirtió entonces
                    en el rey del inframundo y el juez supremo de las almas en
                    el juicio de los muertos.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),

    //-------------------------------------------------------------------
    4: (
      <AnimatePresence>
        {indice === 4 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Seth
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Seth})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Fue una de las deidades principales en la mitología del
                    antiguo Egipto. Sin embargo, es importante señalar que Seth
                    no era considerado un dios benevolente o positivo como la
                    mayoría de las otras deidades egipcias. Era conocido como el
                    dios de las tormentas, la violencia, el caos y la desorden.
                    Seth era representado como un animal compuesto, con un
                    cuerpo humano y cabeza de animal, a menudo identificado como
                    un animal desconocido o una bestia salvaje. Seth era el
                    hermano de Osiris, a quien asesinó y desmembró por envidia y
                    resentimiento. Seth era un dios inestable y violento, y se
                    le atribuía la responsabilidad de las tormentas y los
                    desastres naturales. Se le consideraba una fuerza del caos
                    que amenazaba el orden establecido y la armonía del mundo.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),

    //-------------------------------------------------------------------

    5: (
      <AnimatePresence>
        {indice === 5 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Hathor
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Hathor})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Era considerada una deidad multifacética asociada con el
                    amor, la maternidad, la música, la danza, la belleza, la
                    alegría y la protección. Hathor era representada como una
                    mujer con cabeza de vaca o con una corona solar que llevaba
                    el disco solar y dos cuernos de vaca. La cabeza de vaca era
                    un símbolo de maternidad y fertilidad, y Hathor era
                    considerada la madre de todos los seres vivos. Su apariencia
                    también podía variar, ya que en algunas representaciones se
                    la mostraba con rasgos completamente humanos.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),

    //-------------------------------------------------------------------
    6: (
      <AnimatePresence>
        {indice === 6 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Thoth
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Thoth})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Thoth era uno de los dioses más destacados en la mitología
                    del antiguo Egipto. Era venerado como el dios de la
                    sabiduría, la escritura, la magia, la Luna, el tiempo y el
                    conocimiento. Thoth era representado con cabeza de ibis o
                    babuino sagrado. Como dios de la escritura y la sabiduría,
                    se le asociaba con la escritura jeroglífica y se creía que
                    había inventado el lenguaje y los sistemas de escritura.
                    Además, se le atribuía la capacidad de mediar y resolver
                    disputas, y era considerado el patrón de los escribas y los
                    intelectuales. En la mitología egipcia, Thoth desempeñaba
                    varios roles importantes. Se le consideraba el secretario y
                    consejero de los dioses y era conocido como el registrador
                    de los eventos divinos y humanos
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),

    //-------------------------------------------------------------------
    7: (
      <AnimatePresence>
        {indice === 7 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Maat
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Maat})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Era venerada como la personificación del orden, la justicia,
                    la verdad y la armonía en el universo y en la sociedad
                    humana. Maat era representada como una mujer con una pluma
                    de avestruz, símbolo de la verdad, en su cabeza. A menudo se
                    la mostraba acompañada por una balanza, que utilizaba en el
                    juicio de los muertos para pesar el corazón de una persona
                    contra la pluma de la verdad. Si el corazón resultaba más
                    liviano que la pluma, el individuo se consideraba justo y
                    digno de la vida eterna en el más allá. La importancia de
                    Maat radicaba en su papel como principio fundamental que
                    regía la existencia y el funcionamiento del universo. Se
                    creía que el equilibrio y el orden cósmico dependían de la
                    preservación de Maat.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),

    //-------------------------------------------------------------------
    8: (
      <AnimatePresence>
        {indice === 8 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Isis
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Isis})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Era considerada la diosa de la maternidad, la magia, la
                    protección, la curación y la fertilidad. Además, tenía un
                    papel importante en la religión funeraria y era vista como
                    una diosa que brindaba consuelo y ayuda en el más allá. Isis
                    era representada como una mujer con un trono o un disco
                    solar en la cabeza, a menudo coronada con cuernos de vaca y
                    rodeada de serpientes. Isis jugó un papel significativo en
                    los mitos egipcios. Después de la muerte de Osiris a manos de su hermano
                    Seth, Isis utilizó su magia para resucitarlo y concebir a su
                    hijo Horus. Se le atribuía la capacidad de controlar los
                    elementos y de usar su magia para proteger y curar. Isis era
                    venerada como una diosa compasiva y amorosa. Se creía que
                    escuchaba las plegarias y brindaba consuelo y ayuda a
                    aquellos que la invocaban.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
    //-------------------------------------------------------------------

    9: (
      <AnimatePresence>
        {indice === 9 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Conclusión
              </Typography>
              <Grid
                container
                sx={{
                  mt: 5,
                  "& .MuiGrid-item": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                  },
                }}
              >
                {!small && (
                  <Grid
                    item
                    md={6}
                    sx={{
                      width: "500px",
                      height: "300px",
                      backgroundImage: `url(${Gato})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid
                  item
                  md={6}
                  sx={{
                    width: "20rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify", pl: { md: 4, xs: 0 } }}
                  >
                    Algunos de los dioses más importantes incluían a Ra, el dios
                    del sol; Osiris, el dios de la vida después de la muerte e
                    Isis, la diosa de la maternidad y la magia.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mt: 4,
                      width: "100%",
                    }}
                  >
                    <Button
                      onClick={() => navigate("/quizreligion")}
                      sx={{
                        color: "brown",
                        outline: "1px solid #DBB489",
                        backgroundColor: "rgba(219, 180, 137, 0.1)",
                        width: "100%",
                      }}
                    >
                      Evalua tus conocimientos
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
  };

  useEffect(() => {
    toast.success("hola");
  }, []);

  return (
    <Slider {...settings} ref={sliderRef}>
      {[...Array(Object.keys(temas).length)].map((_, index) => (
        <div className="my-slide" key={index}>
          {temas[index]}
        </div>
      ))}
    </Slider>
  );
};

export default Gastronomia;

const styles = {
  banner: {
    backgroundImage: `url(${background})`,
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "100%",
    width: "100%",
    color: "black",
    display: "flex",
    justifyContent: "left",
    padding: "0 2rem",
    overflow: "visible",
    filter: "blur(5px)",
    position: "absolute",
    zIndex: -1,
  },
  about: {
    display: "grid",
    flexDirection: "column",
    textAlign: "center",
    placeContent: "center",
    width: "100%",
    height: "65%",
    px: { md: 8, xs: 0 },
    rowGap: 4,
    zIndex: 50,
    textShadow: "1.5px 2px 3px black",
    color: "white",
  },
};

// eslint-disable-next-line react/prop-types
