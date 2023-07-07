import img from "../../assets/sphinx.jpg";
import Faraon from "../../assets/faraon.png";
import Carro from "../../assets/CarroGuerra.png";
import Infanteria from "../../assets/infanteria.png";
import Murallas from "../../assets/murallas.jpg";
import Barco from "../../assets/barco.jpg";
import Diplomacia from "../../assets/diplomacia.jpg";
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

const estrategiaMilitar = () => {
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
              Estrategia militar del antiguo Egipto
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
                  Aunque los egipcios eran hábiles en la guerra, preferían la diplomacia
                  y el establecimiento de alianzas como medio para resolver conflictos.
                  La guerra se consideraba el último recurso y se buscaban soluciones
                  pacíficas cuando era posible.
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
              Organización militar y jerarquía
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
                      backgroundImage: `url(${Faraon})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  El ejército egipcio estaba altamente organizado y jerarquizado. Los soldados 
                  eran reclutados de entre la población masculina y se dividían en unidades, 
                  como la infantería, la caballería y los arqueros. Había rangos militares que 
                  iban desde soldados rasos hasta altos oficiales, y el faraón era el comandante supremo.
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
              El poder de los carros de guerra
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
                      backgroundImage: `url(${Carro})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  Los carros de guerra eran una de las armas más importantes del ejército egipcio. 
                  Estos vehículos ligeros eran tirados por caballos y llevaban a dos guerreros: un conductor
                  y un arquero o lanza. Los carros eran utilizados para el ataque rápido y la movilidad en el 
                  campo de batalla, brindando a los egipcios una ventaja táctica.
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
          Infantería y arqueros
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
                  backgroundImage: `url(${Infanteria})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              La infantería egipcia desempeñaba un papel crucial en las batallas. 
              Los soldados de infantería llevaban lanzas, espadas y escudos para el combate 
              cuerpo a cuerpo. Los arqueros egipcios eran especialmente hábiles y se destacaban 
              por su precisión y velocidad en el disparo de flechas. La combinación de infantería 
              y arqueros permitía a los egipcios mantener una defensa sólida y un ataque eficiente
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
          Fortificaciones y estrategia defensiva
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
                  backgroundImage: `url(${Murallas})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              La estrategia defensiva desempeñaba un papel importante en el Antiguo Egipto. 
              Para proteger su territorio, los egipcios construían fortificaciones y ciudades amuralladas. 
              Estas estructuras defensivas eran diseñadas para resistir los ataques enemigos y proporcionar 
              puntos de observación estratégicos. La ubicación geográfica también era considerada, 
              utilizando ríos y pantanos como barreras naturales.
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
          La flota naval
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
                  backgroundImage: `url(${Barco})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              El Antiguo Egipto también tenía una flota naval para proteger sus costas 
              y controlar el comercio marítimo. Las embarcaciones egipcias estaban 
              equipadas con remos y velas, y se utilizaban para el transporte de tropas 
              y suministros, así como para el combate naval. La flota naval egipcia jugó un papel 
              clave en la expansión y defensa del imperio.
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
          La diplomacia y la guerra como último recurso
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
                  backgroundImage: `url(${Diplomacia})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <Grid item md={6} sm={12} sx={{ width: "20rem" }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
              Aunque los egipcios eran hábiles en la guerra, preferían la diplomacia 
              y el establecimiento de alianzas como medio para resolver conflictos. 
              La guerra se consideraba el último recurso y se buscaban soluciones 
              pacíficas cuando era posible.
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
              la estrategia militar del Antiguo Egipto fue un componente vital para
              la protección, expansión y supervivencia del imperio. A través de una
              organización militar bien estructurada, el uso efectivo de armas como
             carros de guerra, infantería, arqueros y una planificación defensiva
              sólida, los egipcios lograron mantener el control sobre su territorio
              y enfrentarse a las amenazas externas. Además, su enfoque en la
              diplomacia y la resolución pacífica de conflictos demostró su
              sabiduría estratégica, la cual egipcia fue una combinación de fuerza,
             inteligencia y adaptabilidad, su legado continúa siendo un testimonio
              de la grandeza y la habilidad militar de esta antigua civilización.

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
                onClick={() => navigate('/quizarquitectura')}
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

export default estrategiaMilitar;

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


