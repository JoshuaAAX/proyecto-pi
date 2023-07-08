import img from "../../assets/sphinx.jpg";
import pan from "../../assets/pan2.jpeg";
import cerveza from "../../assets/cerveza.jpg";
import vino from "../../assets/vino.jpg";
import pescado from "../../assets/pescado.jpg";
import carne from "../../assets/carne.png";
import frutas from "../../assets/frutas.png";
import miel from "../../assets/miel.jpg"
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

const Gastronomia = () => {
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
              Gastronomia en el antiguo Egipto
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
                  La gastronomía del antiguo Egipto se basaba en gran medida en los alimentos
                  y productos disponibles en la región del río Nilo. Los antiguos egipcios cultivaban
                  una variedad de cultivos como trigo, cebada, lentejas, guisantes, cebollas, ajos, sandías,
                  uvas y dátiles. También criaban animales como vacas, ovejas, cabras, cerdos, aves de corral
                  y pescado del Nilo.
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
              Pan
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
                      backgroundImage: `url(${pan})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  El pan era un alimento básico en la dieta egipcia antigua. 
                  Se elaboraba principalmente con trigo y se horneaba en forma 
                  de panes redondos o alargados. También se preparaban panes especiales 
                  para ocasiones festivas.
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
              Cerveza
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
                      backgroundImage: `url(${cerveza})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  La cerveza era la bebida más común en el antiguo Egipto. 
                  Se elaboraba a partir de cebada y se consumía tanto por niños 
                  como por adultos. Era una parte esencial de la vida diaria y 
                  también se usaba en rituales religiosos.
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
          Vino
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
                  backgroundImage: `url(${vino})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              El vino también era una bebida popular, aunque estaba más asociado 
              con la élite y las clases altas. Se producía a partir de uvas y se 
              almacenaba en ánforas de cerámica.
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
          Pescado del Nilo
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
                  backgroundImage: `url(${pescado})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              El río Nilo proporcionaba una fuente abundante de pescado 
              en la dieta egipcia antigua. Los egipcios pescaban diferentes 
              tipos de peces, como tilapia, carpa y anguila, y los preparaban 
              asados, ahumados o hervidos.
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
          Carne
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
                  backgroundImage: `url(${carne})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              La carne, especialmente la de res, cerdo y aves de corral, 
              también se consumía en el antiguo Egipto. Sin embargo, 
              debido a su costo y disponibilidad limitada, era más común 
              entre la élite y los nobles.
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
          Frutas y Verduras
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
                  backgroundImage: `url(${frutas})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              Los egipcios consumían una variedad de frutas y vegetales frescos, 
              incluyendo dátiles, uvas, higos, melones, lechugas, cebollas y ajos. 
              Estos productos agrícolas se utilizaban en platos diversos y también 
              se consumían solos.
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
          Miel
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
                  backgroundImage: `url(${miel})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              La miel se utilizaba como endulzante en la cocina del antiguo Egipto. 
              También se usaba para hacer bebidas y se consideraba un ingrediente 
              valioso y apreciado.",
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
          <Grid item md={6} sx={{ width: "20rem", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", pl: { md: 4, xs: 0 } }}
            >
              Los faraones y la élite tenían acceso a una mayor variedad de alimentos y platos,
              mientras que la población común dependía en gran medida de los productos básicos 
              disponibles localmente. La comida desempeñaba un papel central en la vida y las creencias
              religiosas de los antiguos egipcios, y se le daba una gran importancia en festivales y rituales.

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
                onClick={() => navigate('/quizgastronomia')}
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



