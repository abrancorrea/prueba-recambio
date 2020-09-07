import React from "react"

import { Grid, Typography, Button, Fade } from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"

const Thankyou = ({ classes, rootStep }) => {
  return (
    <Fade in timeout={400}>
      <Grid container justify="center" direction="column" className={classes.container}>
        <Typography variant="h6">Recambio agendado satisfactoriamente</Typography>
        <Spacer height="50px" />
        <Typography variant="body1" align="center">
          {" "}
          Gracias por preferirnos
        </Typography>
        <Spacer height="50px" />
        <Button variant="contained" color="primary" onClick={rootStep}>
          Volver al inicio
        </Button>
      </Grid>
    </Fade>
  )
}

export default Thankyou
