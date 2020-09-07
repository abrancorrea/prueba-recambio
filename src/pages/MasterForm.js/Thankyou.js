import React from 'react'

import { Grid,Typography,Button } from '@material-ui/core'
import { Spacer } from '../../common/StyledElements'

const Thankyou = ({classes, rootStep}) => {
    return (
        <Grid
      container
      justify="center"
      direction="column"
      className={classes.container} 
    >
      {/* <Fade in> */}
        <Typography variant="h6">
          Recambio agendado satisfactoriamente 
        </Typography>
        <Spacer height="50px" />
        <Typography variant="body1" align="center"> Gracias por preferirnos</Typography>
        <Spacer height="50px" />        
        <Button variant="contained" color="primary" onClick={rootStep}> 
          Volver al inicio
        </Button>
      {/* </Fade> */}
    </Grid>
    )
}

export default Thankyou
