import img from "../../assets/sphinx.jpg";
import Monumento from "../../assets/monumento.jpg";
import Piedra from "../../assets/piedra.jpg";
import Templo from "../../assets/templo.jpeg";
import Piramide from "../../assets/piramidesArqui.jpg";
import Obelisco from "../../assets/obelisco.jpg";
import Jeroglifico from "../../assets/jeroglifico.jpg";
import Mastabas from "../../assets/mastabas.jpg";
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

const Arquitectura = () => {
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
                Arquitectura en el antiguo Egipto
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
                    La arquitectura del Antiguo Egipto fue una manifestación
                    impresionante del ingenio y la habilidad de esta antigua
                    civilización. A lo largo de los siglos, los egipcios
                    construyeron monumentos duraderos que reflejaban su cultura,
                    creencias religiosas y organización social. Su arquitectura
                    se caracterizaba por su monumentalidad, el uso de materiales
                    duraderos, como la piedra, y una meticulosa atención al
                    simbolismo y la decoración.
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
                Monumentalidad en la construcción
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
                      backgroundImage: `url(${Monumento})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    La arquitectura del Antiguo Egipto se destacaba por su
                    enfoque en la monumentalidad. Los egipcios construyeron
                    grandes estructuras como templos, pirámides y obeliscos que
                    sobresalían en el paisaje y reflejaban el poder y la
                    grandeza del faraón.
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
                Uso de la piedra
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
                      backgroundImage: `url(${Piedra})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    La piedra, especialmente la piedra caliza y el granito, fue
                    el material de construcción principal en el Antiguo Egipto.
                    Los egipcios aprovecharon las canteras locales para obtener
                    bloques de piedra y los tallaron con precisión para
                    construir sus monumentos duraderos.
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
                Templos impresionantes
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
                      backgroundImage: `url(${Templo})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Los templos eran el centro de la vida religiosa y social en
                    el Antiguo Egipto. Eran estructuras enormes con patios
                    abiertos, columnatas y santuarios interiores. El Templo de
                    Karnak y el Templo de Luxor son ejemplos impresionantes de
                    la arquitectura de templos egipcios.
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
                Las pirámides
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
                      backgroundImage: `url(${Piramide})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Las pirámides son quizás el símbolo más reconocido de la
                    arquitectura egipcia. Estas enormes estructuras funerarias
                    fueron construidas para los faraones y estaban destinadas a
                    preservar sus cuerpos y asegurar su vida después de la
                    muerte. La Gran Pirámide de Giza es la más famosa y la única
                    de las Siete Maravillas del Mundo Antiguo que aún perdura.
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
                Obeliscos
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
                      backgroundImage: `url(${Obelisco})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Los obeliscos eran monumentos altos y delgados hechos de una
                    sola pieza de piedra. Eran erigidos en parejas frente a los
                    templos y se creía que simbolizaban rayos de sol
                    petrificados. El Obelisco Inacabado en la cantera de Asuán
                    es un ejemplo notable de un obelisco egipcio que nunca fue
                    completado.
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
                Decoración y simbolismo
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
                      backgroundImage: `url(${Jeroglifico})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    La arquitectura egipcia se caracterizaba por su detallada
                    decoración y simbolismo. Los muros y las columnas estaban
                    adornados con bajorrelieves y jeroglíficos que contaban
                    historias y representaban a los dioses. El simbolismo era
                    importante en el diseño, con elementos como el uso del color
                    y la orientación hacia el río Nilo.
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
                Arquitectura funeraria
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
                      backgroundImage: `url(${Mastabas})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    El Antiguo Egipto desarrolló una variedad de estructuras
                    funerarias, además de las pirámides, para honrar a los
                    muertos. Estas incluían mastabas (tumbas rectangulares con
                    una capilla sobre ellas), hipogeos (tumbas subterráneas) y
                    el Valle de los Reyes, donde se enterraron muchos faraones.
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
                    La arquitectura del Antiguo Egipto sigue siendo una fuente
                    de asombro y fascinación en la actualidad. Su grandeza y
                    perfección técnica reflejan la habilidad y la dedicación de
                    los antiguos egipcios en la construcción de monumentos
                    duraderos que han resistido la prueba del tiempo.
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
                      onClick={() => navigate("/quizarquitectura")}
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

export default Arquitectura;

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
