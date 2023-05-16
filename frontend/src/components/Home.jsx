import { Button, Container, Grid, Stack, Typography } from "@mui/material";

const Canvas = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid
          item
          sx={{
            mt: { xs: 20, md: 0 },
            mb: { xs: 5, md: 0},
            rotate: "20deg",
            "&: hover": {
              cursor: "pointer",
              transform: "scale(1.1)",
              transition: "all 0.5s ease-in-out",
            },
            transition: "all 0.5s ease-in-out",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          xs={12}
          md={4}
        >
          <img width={200} src="../../assets/cube.png" alt="3D Cube" />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          px={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontSize="1.8rem">
            ¡Donde aprender sobre la cultura egipcia es fácil y divertido!
          </Typography>
          <Stack
            direction={{ xs: "row", md: "column" }}
            spacing={2}
            sx={{
              mt: 5,
              mb: { md: 0, xs: 10 },
              width: { xs: "100%", md: "40%" },
              "& .MuiButton-root": {
                color: "brown",
                outline: "1px solid #DBB489",
                backgroundColor: "rgba(219, 180, 137, 0.1)",
              },
            }}
          >
            <Button>Crear una cuenta</Button>
            <Button>Ya tengo una cuenta</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Canvas;
