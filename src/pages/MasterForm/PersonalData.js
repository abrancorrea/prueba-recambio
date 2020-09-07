import React from "react"

import { Typography, Grid, TextField, Button, InputAdornment, Fade } from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"

const PersonalData = ({ errors, data, setter, nextStep, classes }) => {
  return (
    <Fade in timeout={400}>
      <Grid container justify="center" direction="column" className={classes.container}>
        <Typography variant="h6">1. Ingresa con tus datos personales</Typography>
        <Spacer height="50px" />
        <TextField
          error={Object.keys(errors).length && errors.input === "dni"}
          variant="outlined"
          label="Dni del titular de la tarjeta"
          name="dni"
          value={data.dni}
          onChange={setter}
          helperText={Object.keys(errors).length && errors.input === "dni" ? errors.message : "Sin puntos ni guiones"}
        />
        <Spacer height="50px" />

        <TextField
          error={Object.keys(errors).length && errors.input === "phone"}
          variant="outlined"
          label="Numero de movil"
          name="phone"
          value={data.phone}
          onChange={setter}
          helperText={Object.keys(errors).length && errors.input === "phone" ? errors.message : "999999999"}
          InputProps={{
            startAdornment: <InputAdornment position="start">+52</InputAdornment>,
          }}
        />
        <Spacer height="50px" />
        <Button variant="contained" color="primary" onClick={nextStep}>
          Siguiente
        </Button>
      </Grid>
    </Fade>
  )
}

export default PersonalData
