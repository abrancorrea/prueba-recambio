import React, { useState } from "react"

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  Grid,
  makeStyles
} from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"
import PersonalData from "./PersonalData"
import Schedule from "./Schedule"
import Checkout from "./Checkout"

const dataInitialState = {
  dni: "",
  phone: "",
  schedule: {
    day: null,
    hour: null
  },
}

const styles = makeStyles(()=>({
  container: {
    padding: "25px 40px"
  }
}))

const days = () => {
  const today = new Date();
  let daysList = []
  for (let i=0; i<5; i++){
    const day = new Date(today)
    day.setDate(day.getDate() + i)
    let dayNameOptions = { weekday: 'long', };
    let monthDateOptions = { month: 'short', day: 'numeric' };
    const dayName = day.toLocaleDateString('es-ES', dayNameOptions)
    const monthDate = day.toLocaleDateString('es-ES', monthDateOptions)
    daysList.push({dayName,monthDate})
  }
  return daysList
}
  
const MasterForm = () => {
  const [step, setStep] = useState(1)
  const [tabPosition, setTabPosition] = useState(0)
  const classes = styles()
  const [data, setData] = useState(dataInitialState)
  const daysList = days()
  const dataHandler = ({target}) =>{
    setData(data => ({ ...data, [target.name]: target.value }))}

const tabHandler = (e, newValue) => {
  setTabPosition(newValue)
}

const hourHandler = (e, hour, day ) => {
setData(data=> ({...data, schedule: {
  hour,
  day
  }}))
}

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
              <PersonalData data={data} setter={dataHandler} nextStep={()=>setStep(2)} classes={classes} />
            ) : step === 2 ? (
              <Schedule daysList={daysList} nextStep={()=>setStep(3)} hourHandler={hourHandler} selectedHour={data.schedule} tabPosition={tabPosition} setTabPosition={tabHandler} classes={classes}/>
            ) : step === 3 ? (
              <Checkout classes={classes} data={data.schedule}/> 
            ) : null}
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MasterForm
