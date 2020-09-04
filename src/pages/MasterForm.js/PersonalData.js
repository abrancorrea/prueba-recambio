import React from "react"

import {
  Typography,
  Grid,
  TextField,
  Button,
  makeStyles,
  InputAdornment,
  Fade,
} from "@material-ui/core"
import { Spacer } from "../../common/styledElements"

const styles = makeStyles(() => ({
  container: {
    padding: "50px 20px 30px",
  },
}))
const PersonalData = ({ data, setter, nextStep }) => {
  const classes = styles()
  return (
    <Grid
      container
      justify="center"
      direction="column"
      className={classes.container}
    >
      {/* <Fade in> */}
        <Typography variant="h6">
          1. Ingresa con tus datos personales
        </Typography>
        <Spacer height="50px" />
        <TextField
          variant="outlined"
          label="Dni"
          name="dni"
          value={data.dni}
          onChange={setter}
          helperText="Sin puntos ni guiones"
        />
        <Spacer height="50px" />

        <TextField
          variant="outlined"
          label="Numero de movil"
          name="phone"
          value={data.phone}
          onChange={setter}
          helperText="999999999"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+52</InputAdornment>
            ),
          }}
        />
        <Spacer height="50px" />
        <Button variant="contained" color="primary" onClick={nextStep}>
          Siguiente
        </Button>
      {/* </Fade> */}
    </Grid>
  )
}

export default PersonalData
