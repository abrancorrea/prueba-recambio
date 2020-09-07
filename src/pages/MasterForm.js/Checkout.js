import React from "react"

import {
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  makeStyles,
  Fade,
} from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"


const Checkout = ({ data, classes }) => {
  return (
    <Grid
      container
      justify="center"
      direction="column"
      className={classes.container} 
    >
      {/* <Fade in> */}
        <Typography variant="h6">
          Se agendará el siguiente recambio: 
        </Typography>
        <Spacer height="50px" />
        <Typography>Fecha: {data.day} </Typography>
        <Typography>Hora: {data.hour} </Typography>
        <Spacer height="50px" />        
        <Button variant="contained" color="primary"> {/*onClick={nextStep}>*/}
          Siguiente
        </Button>
      {/* </Fade> */}
    </Grid>
  )
}

export default Checkout
