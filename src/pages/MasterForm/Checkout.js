import React from "react"
import PropTypes from "prop-types"

import { Typography, Grid, Button, Fade } from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"

const Checkout = ({ data, classes, hoursMap, nextStep }) => {
  return (
    <Fade in timeout={400}>
      <Grid container justify="center" direction="column" className={classes.container}>
        <Typography variant="h6">Confirma tu visita</Typography>
        <Spacer height="100px" />
        <Typography variant="h6">Se agendará el siguiente recambio:</Typography>
        <Spacer height="50px" />
        <Typography>Fecha: {data.day} </Typography>
        <Typography>Hora: {hoursMap.find(hour => hour.value === data.hour).nameToShow} </Typography>
        <Spacer height="50px" />
        <Button variant="contained" color="primary" onClick={nextStep}>
          Confirmar
        </Button>
      </Grid>
    </Fade>
  )
}

Checkout.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.any.isRequired,
  hoursMap: PropTypes.array.isRequired,
  nextStep: PropTypes.func.isRequired,
}

export default Checkout
