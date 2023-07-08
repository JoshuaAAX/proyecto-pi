import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import background from "../../assets/background.png";

import "../styles/Slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importar imagenes de los temas
import politica from "../../assets/politica.png";
import faraonl from "../../assets/faraonl.png";
import visir from "../../assets/visir.jpg";
import nomarca from "../../assets/nomarca.jpg";
import gastronomia from "../../assets/gastronomia.jpg";
import estrategia from "../../assets/ejercito.jpg";

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

const SistemaPolitico = () => {
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
          color: i === indice ? "#DBB489" : "gray",
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
        {initialRender && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
          
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
            >
              <Typography variant="h6" sx={{ mt: 4 }}>
                Sistema político
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
                      backgroundImage: `url(${politica})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    En el Antiguo Egipto, los faraones eran gobernantes
                    absolutos y considerados divinos. Su función era mantener el
                    orden y la estabilidad, controlando el Nilo y garantizando
                    buenas cosechas. La sociedad estaba jerarquizada, con el
                    faraón en la cima y los agricultores y trabajadores en la
                    base. Además de los faraones, la élite gobernante incluía
                    sacerdotes, escribas y altos funcionarios. Aunque había
                    esclavitud, era menos común que en otras civilizaciones de
                    la época.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
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
                Sistema político del Antiguo Egipto
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
                      backgroundImage: `url(${politica})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    En el Antiguo Egipto, los faraones eran gobernantes
                    absolutos y considerados divinos. Su función era mantener el
                    orden y la estabilidad, controlando el Nilo y garantizando
                    buenas cosechas. La sociedad estaba jerarquizada, con el
                    faraón en la cima y los agricultores y trabajadores en la
                    base. Además de los faraones, la élite gobernante incluía
                    sacerdotes, escribas y altos funcionarios. Aunque había
                    esclavitud, era menos común que en otras civilizaciones de
                    la época.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
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
              exit={{ opacity: 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                El Faraón: Líder Divino
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
                      backgroundImage: `url(${faraonl})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    En el antiguo Egipto, la máxima autoridad era el faraón, una
                    figura considerada no solo como líder político, sino también
                    como una deidad viviente. Por lo tanto, la palabra del
                    faraón era incuestionable y su poder, absoluto. Además de
                    sus responsabilidades políticas, los faraones también
                    desempeñaban funciones religiosas y militares, reforzando su
                    estatus en la sociedad egipcia.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
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
                La Administración del Reino: Visir y Sacerdotes
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
                      backgroundImage: `url(${visir})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    Los faraones no gobernaban solos. Para ayudar en la
                    administración del vasto imperio egipcio, contaban con un
                    sistema administrativo complejo. El 'Visir', un equivalente
                    al actual primer ministro, desempeñaba un papel crucial en
                    este sistema. El visir supervisaba la administración del
                    reino, asesoraba al faraón y se encargaba de implementar sus
                    decisiones. Los sacerdotes también tenían una importante
                    función en la administración del estado. Eran responsables
                    de la recolección de impuestos y el mantenimiento de los
                    proyectos de infraestructura, además de realizar sus deberes
                    religiosos.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
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
                Los Nomarcas: Gobernadores Provinciales
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
                      backgroundImage: `url(${nomarca})`,
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
                    Otra figura importante en el sistema político del antiguo
                    Egipto era el nomarca, o gobernador provincial. Los nomarcas
                    eran responsables de administrar las diferentes regiones del
                    antiguo Egipto. Originalmente eran miembros de la familia
                    real, pero con el tiempo, los puestos se volvieron
                    hereditarios, lo que llevó a la formación de dinastías
                    locales poderosas.
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
                      onClick={() => navigate("/mainpage")}
                      sx={{
                        color: "brown",
                        outline: "1px solid #DBB489",
                        backgroundColor: "rgba(219, 180, 137, 0.1)",
                        mb: 2,
                        width: "100%",
                      }}
                    >
                      Ir a la página principal
                    </Button>
                    <Button
                      onClick={() => navigate("/quizpolitica")}
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

export default SistemaPolitico;

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
