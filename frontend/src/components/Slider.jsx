import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";

import background from "../../assets/background.png";

import "../styles/Slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importar imagenes de los temas
import politica from "../../assets/politica.png";
import religion from "../../assets/religion.png";
import arquitectura from "../../assets/arquitectura.png";
import arte from "../../assets/arte.png";
import gastronomia from "../../assets/gastronomia.jpg";
import estrategia from "../../assets/ejercito.jpg";

import { AnimatePresence, motion } from "framer-motion";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { toast } from "react-hot-toast";

import TouchAppIcon from "@mui/icons-material/TouchApp";

const IntroPage = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: "ondemand",
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => setIndice(newIndex),
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
  useEffect(() => {
    console.log(indice);
  }, [indice]);

  const temas = {
    0: (
      <AnimatePresence>
        {indice === 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 3, type: "spring" }}
          >
            <Box
              sx={{
                position: "relative",
                height: "100vh",
                background: "rgba(0,0,0,0)",
              }}
            >
              <AnimatePresence>
                {!initialRender && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, type: "spring", delay: 2.5 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        columnGap: 2,
                        position: "absolute",
                        bottom: { md: "15%", xs: "20%" },
                        right: "20px",
                        background: "#333",
                        px: 3,
                        py: 1,
                        color: "#fff",
                        borderRadius: "16px",
                      }}
                    >
                      <motion.div
                        initial={{ x: 200 }}
                        animate={{
                          x: 0,
                          transition: { duration: 1, type: "spring", delay: 4 },
                        }}
                      >
                        <TouchAppIcon fontSize="medium" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 0.8,
                            type: "spring",
                            delay: 4,
                          },
                        }}
                      >
                        <Typography sx={{ width: "12rem" }}>
                          Desliza hacia los lados o usa el scroll
                        </Typography>
                      </motion.div>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
              <Box sx={styles.banner} />
              <Box sx={styles.about}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 1, type: "spring", delay: 1 }}
                >
                  <Typography sx={{ fontSize: { xs: 24, md: 40 } }}>
                    Bienvenido(a) a nilearn
                  </Typography>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{
                    duration: 1,
                    type: "spring",
                    delay: 2,
                  }}
                >
                  <Typography
                    sx={{
                      px: { xs: "8%", md: "20%" },
                      py: 2,
                      fontSize: { xs: 16, md: 22 },
                    }}
                  >
                    Sumérgete en el fascinante mundo de los faraones, los dioses
                    y las imponentes pirámides que aún nos deslumbran con su
                    grandeza. Acompáñanos mientras desenterramos los secretos
                    del Valle de los Reyes y descubrimos el poderoso Nilo, el
                    río que dio vida y sustento a esta antigua civilización.
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    ),
    1: (
      <AnimatePresence>
        {indice === 1 && (
          <Box sx={{ px: "15%" }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1.5, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography
                sx={{ fontSize: { xs: 26, md: 40 } }}
                px="15%"
                textAlign="center"
                mb={4}
                pt={4}
              >
                ¡Aquí comienza tu camino!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1.5, delay: 0.7, type: "spring" },
              }}
            >
              <Grid
                container
                sx={{
                  pt: { md: 3, xs: 0 },
                  "& .MuiTypography-root": {
                    px: { md: "10%", xs: 0 },
                    textAlign: "justify",
                  },
                }}
              >
                <Grid item md={6} xs={12} pb={{ xs: 4, md: 0 }}>
                  <Typography>
                    Nuestro objetivo es brindarte una experiencia educativa y
                    entretenida, llena de información detallada y visualmente
                    cautivadora. Explora nuestras secciones dedicadas a la vida
                    cotidiana en el antiguo Egipto, la arquitectura majestuosa
                    de los templos y las tumbas, los jeroglíficos enigmáticos y
                    los tesoros ocultos del arte egipcio.
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography>
                    La civilización egipcia se caracterizó por su estabilidad
                    política y social, así como por su avanzado conocimiento en
                    diversos campos, como la arquitectura, la escritura, la
                    medicina y la astronomía. Los antiguos egipcios creían en la
                    vida después de la muerte y dedicaron gran parte de sus
                    recursos y esfuerzos a la preparación para la vida en el más
                    allá.
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                sx={{
                  py: 4,
                  px: "5%",
                  textAlign: "justify",
                  display: { xs: "none", md: "block" },
                }}
              >
                Se expresaban a a través de la música, la danza, la pintura y la
                escultura. Los antiguos egipcios eran expertos en la talla de
                piedra y en la creación de obras de arte que representaban a
                dioses, faraones y escenas de la vida cotidiana. La pintura se
                utilizaba en los muros de los templos y las tumbas para narrar
                historias y preservar la memoria de los difuntos.
              </Typography>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
    2: (
      <AnimatePresence>
        {indice === 2 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            {!small && (
              <motion.div
                initial={{ y: "-10vh", opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1.5, type: "spring" },
                }}
                exit={{ opacity: 0 }}
              >
                <Typography variant="h4">Temas de estudio</Typography>
              </motion.div>
            )}
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
    3: (
      <AnimatePresence>
        {indice === 3 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            {!small && <Typography variant="h4">Temas de estudio</Typography>}
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h6" sx={{ mt: 4 }}>
                Religión
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
                      backgroundImage: `url(${religion})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    La religión también desempeñó un papel central en la vida
                    egipcia. Los antiguos egipcios adoraban a una gran cantidad
                    de dioses y diosas, y creían en la existencia de una vida
                    después de la muerte. Desarrollaron complejos rituales
                    funerarios y construyeron enormes tumbas, conocidas como
                    pirámides, para albergar los cuerpos embalsamados de los
                    faraones y otros miembros de la élite.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
    4: (
      <AnimatePresence>
        {indice === 4 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            {!small && <Typography variant="h4">Temas de estudio</Typography>}
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h6" sx={{ mt: 4 }}>
                Arquitectura
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
                      backgroundImage: `url(${arquitectura})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    La arquitectura egipcia es otro aspecto destacado de esta
                    civilización. Construyeron monumentos impresionantes, como
                    las pirámides de Giza y los templos de Luxor y Karnak. Estas
                    estructuras eran testimonio del poder y la riqueza de los
                    faraones, y se construyeron con una precisión y belleza
                    sorprendentes.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
    5: (
      <AnimatePresence>
        {indice === 5 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            {!small && <Typography variant="h4">Temas de estudio</Typography>}
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h6" sx={{ mt: 4 }}>
                Arte
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
                      backgroundImage: `url(${arte})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify", pl: { md: 4, xs: 0 } }}
                  >
                    El arte egipcio es reconocido como uno de los aspectos más
                    destacados de la antigua civilización egipcia. Se
                    caracteriza por su durabilidad, monumentalidad y simbología
                    rica. Está estrechamente relacionado con la religión y la
                    vida después de la muerte. Las obras de arte egipcias tenían
                    la finalidad de honrar a los dioses, rendir tributo a los
                    faraones y garantizar la vida eterna de los difuntos. Se
                    encontraban en templos, tumbas y monumentos funerarios.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
    6: (
      <AnimatePresence>
        {indice === 6 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            {!small && <Typography variant="h4">Temas de estudio</Typography>}
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h6" sx={{ mt: 4 }}>
                Gastronomía
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
                      backgroundImage: `url(${gastronomia})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    La gastronomía del Antiguo Egipto reflejaba la
                    disponibilidad de alimentos y la cultura culinaria de la
                    época. Los principales alimentos eran trigo y cebada,
                    utilizados para hacer pan y cerveza. El río Nilo desempeñaba
                    un papel fundamental al proporcionar agua para la
                    agricultura, favoreciendo una sociedad agraria próspera.
                    Además, el Nilo era una vía de transporte y comercio
                    crucial, promoviendo el intercambio de bienes y la
                    comunicación entre diferentes regiones de Egipto.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    ),
    7: (
      <AnimatePresence>
        {indice === 7 && (
          <Box sx={{ position: "absolute", top: "2rem" }}>
            {!small && <Typography variant="h4">Temas de estudio</Typography>}
            <motion.div
              initial={{ y: "-10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, type: "spring" },
              }}
              exit={{ opacity: 0 }}
            >
              <Typography variant="h6" sx={{ mt: 4 }}>
                Estrategia Militar
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
                      backgroundImage: `url(${estrategia})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    La estrategia militar en el Antiguo Egipto estaba
                    estrechamente vinculada a la protección y expansión del
                    reino. A lo largo de su historia, los egipcios desarrollaron
                    diversas tácticas y estrategias militares para defender su
                    territorio y mantener el control sobre regiones
                    conquistadas.
                  </Typography>
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
      {[...Array(8)].map((_, index) => (
        <div className="my-slide" key={index}>
          {temas[index]}
        </div>
      ))}
    </Slider>
  );
};

export default IntroPage;

const styles = {
  banner: {
    backgroundImage: `url(${background})`,
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "100vh",
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
