import React from "react"

import {
  Typography,
  Grid,
  Button,
} from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"


const Checkout = ({ data, classes, hoursMap, nextStep}) => {
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
        <Typography>Hora: {hoursMap.find(hour => hour.value === data.hour).nameToShow} </Typography>
        <Spacer height="50px" />        
        <Button variant="contained" color="primary" onClick={nextStep}> 
          Siguiente
        </Button>
      {/* </Fade> */}
    </Grid>
  )
}

export default Checkout
