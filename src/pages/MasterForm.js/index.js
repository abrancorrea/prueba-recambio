import React, { useState } from "react"

import { AppBar, Toolbar, Typography, Container, Fade } from "@material-ui/core"

const MasterForm = () => {
  const [step, setStep] = useState(1)
  
  return (
    <Container disableGutters max-width="false">
      <Fade in timeout={400}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6"> Agencia de Recambio</Typography>
          </Toolbar>
        </AppBar>
      </Fade>
    </Container>
  )
}

export default MasterForm
