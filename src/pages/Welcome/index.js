import React from "react";
import { useHistory } from "react-router-dom";

import bg from "./welcome-bg-2.jpg";

import { Container, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Spacer } from "../../common/StyledElements";

const styles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${bg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y"
  },
  typography: {
    color: "#fafafa"
  },
  button: {
    width: "200px",
    borderRadius: "50px"
  }
}));

const Welcome = () => {
  const history = useHistory();
  const classes = styles();
  return (
    <Container disableGutters maxWidth={false} className={classes.container}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11} sm={8} md={7}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Spacer height="200px" />
            <Typography variant="h6" className={classes.typography}>
              Agencia de Recambio
            </Typography>
            <Spacer height="150px" />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => history.push("/form")}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Welcome;
