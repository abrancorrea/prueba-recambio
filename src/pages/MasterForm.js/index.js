import React, { useState } from "react"

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  Grid,
} from "@material-ui/core"
import { Spacer } from "../../common/styledElements"
import PersonalData from "./PersonalData"

const dataInitialState = {
  dni: "",
  phone: "",
  schedule: null,
}

const MasterForm = () => {
  const [step, setStep] = useState(1)

  const [data, setData] = useState(dataInitialState)

  const dataHandler = ({target}) =>{
console.log(target)
    setData(data => ({ ...data, [target.name]: target.value }))}

  return (
    <Container disableGutters maxWidth={false}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"> Agencia de Recambio</Typography>
        </Toolbar>
      </AppBar>
      <Spacer height="50px" />
      <Grid container justify="center">
        <Grid item xs={11} sm={8} md={6}>
          <Card raised>
            {step === 1 ? (
              <PersonalData data={data} setter={dataHandler} nextStep={()=>setStep(2)} />
            ) : step === 2 ? (
              <h4>jojo 2</h4>
            ) : step === 3 ? (
              <h6> juajua 3</h6>
            ) : null}
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MasterForm
