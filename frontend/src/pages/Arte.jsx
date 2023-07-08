
import img from "../../assets/sphinx.jpg";
import simbolismo from "../../assets/simbolismo.jpg";
import escultura from "../../assets/escultura.png";
import funerario from "../../assets/funerario.jpg";
import joyas from "../../assets/joyas.jpg";
import jeroglifico2 from "../../assets/jeroglifico2.jpg";
import Gato from "../../assets/complete_cat.png"

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
  Button
} from "@mui/material";
import { toast } from "react-hot-toast";

import TouchAppIcon from "@mui/icons-material/TouchApp";
import { useNavigate } from "react-router-dom";

const Arte = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
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


  const temas = {

    0: (
     
      <AnimatePresence>
        {indice === 0 && (
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
              <Typography variant="h4" sx={{ mt: 4 }}>
              Arte del antiguo Egipto
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
                  El arte del Antiguo Egipto se caracterizó por su duradero legado artístico que reflejaba 
                  la cultura y las creencias religiosas de esta antigua civilización. A lo largo de los siglos, 
                  los egipcios desarrollaron un estilo artístico distintivo y altamente simbólico que abarcaba 
                  una variedad de formas, desde la pintura y la escultura hasta la arquitectura y la orfebrería. 
                  Su arte se centraba en la representación precisa y jerárquica de figuras humanas y divinas, 
                  y tenía una fuerte conexión con la vida religiosa y el culto a los dioses.
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
              <Typography variant="h4" sx={{ mt: 4 }}>
              Jerarquía y simbolismo
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
                      backgroundImage: `url(${simbolismo})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  El arte del Antiguo Egipto estaba impregnado de simbolismo y seguía una estricta 
                  jerarquía visual. Los faraones y los dioses eran representados de manera prominente y 
                  más grandes en tamaño para reflejar su estatus divino y poder. Las figuras humanas y 
                  animales también estaban representadas de acuerdo con su importancia social y religiosa.
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
              La pintura y la escultura
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
                      backgroundImage: `url(${escultura})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  La pintura egipcia se encontraba principalmente en murales de tumbas y templos, 
                  y tenía un estilo plano y bidimensional con colores vivos y contrastantes. 
                  Las esculturas egipcias se caracterizaban por su rigidez y frontalidad, 
                  con figuras de pie con las piernas juntas y los brazos pegados al cuerpo. 
                  Estas representaciones artísticas buscaban capturar la esencia eterna y la naturaleza divina de los individuos.
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
          Arte funerario
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
                  backgroundImage: `url(${funerario})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              El arte funerario desempeñaba un papel fundamental en la cultura egipcia, 
              ya que se creía que el alma del difunto continuaba su existencia en el más allá. 
              Los murales, relieves y estatuas en las tumbas representaban escenas de la vida cotidiana, 
              rituales religiosos y el viaje del alma en el inframundo. Este arte se realizaba con la intención 
              de proporcionar al difunto una vida placentera y eterna.
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
          Joyería y orfebrería
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
                  backgroundImage: `url(${joyas})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              Los egipcios eran expertos en la creación de joyas y objetos preciosos.
              Utilizaban metales como el oro y la plata, así como piedras preciosas y 
              vidrio coloreado, para crear collares, brazaletes, anillos y amuletos. 
              Estas joyas se usaban tanto en la vida cotidiana como en rituales religiosos, 
              y reflejaban la importancia del adorno personal en la sociedad egipcia.
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
          El legado duradero del arte egipcio
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
                  backgroundImage: `url(${jeroglifico2})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              El arte del Antiguo Egipto ha dejado un legado duradero en la historia del arte. 
              Su estilo distintivo y su atención a los detalles simbólicos y religiosos han influido 
              en muchas culturas posteriores. Además, las técnicas de conservación utilizadas por los 
              egipcios para preservar sus obras de arte han permitido que muchos ejemplos sobrevivan hasta nuestros días, 
              brindándonos una invaluable ventana a su cultura y civilización.
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
          <Grid item md={6} sx={{ width: "20rem", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", pl: { md: 4, xs: 0 } }}
            >
              La arquitectura del Antiguo Egipto sigue siendo una fuente de asombro y fascinación en la actualidad. 
              Su grandeza y perfección técnica reflejan la habilidad y la dedicación de los antiguos egipcios en la 
              construcción de monumentos duraderos que han resistido la prueba del tiempo.

</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 4,
                width: '100%',
              }}
            >
              <Button
                onClick={() => navigate('/quizarte')}
                sx={{
                  color: "brown",
                  outline: "1px solid #DBB489",
                  backgroundColor: "rgba(219, 180, 137, 0.1)",
                  width: '100%',
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


    
    
    )
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

export default Arte;

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



