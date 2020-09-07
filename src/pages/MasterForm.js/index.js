import React, { useState, useEffect } from "react"
import axios from "axios"

import { AppBar, Toolbar, Typography, Container, Card, Grid, makeStyles } from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"
import PersonalData from "./PersonalData"
import Schedule from "./Schedule"
import Checkout from "./Checkout"
import Thankyou from "./Thankyou"

const dataInitialState = {
  dni: "",
  phone: "",
  schedule: { day: null, hour: null },
}

const styles = makeStyles(() => ({
  container: {
    padding: "25px 40px",
  },
}))

const days = () => {
  const today = new Date()
  let daysList = []
  for (let i = 0; i < 5; i++) {
    const day = new Date(today)
    day.setDate(day.getDate() + i)
    let dayNameOptions = { weekday: "long" }
    let monthDateOptions = { month: "short", day: "numeric" }
    const dayName = day.toLocaleDateString("es-ES", dayNameOptions)
    const monthDate = day.toLocaleDateString("es-ES", monthDateOptions)
    daysList.push({ dayName, monthDate })
  }
  return daysList
}
const hoursArray = () => [
  { value: "sevenToNine", nameToShow: "7:00 a 9:00" },
  { value: "nineToEleven", nameToShow: "9:00 a 11:00" },
  { value: "elevenToThirteen", nameToShow: "11:00 a 13:00" },
  { value: "thirteenToFifteen", nameToShow: "13:00 a 15:00" },
  { value: "fifteenToSeventenn", nameToShow: "15:00 a 17:00" },
  { value: "seventeenToNineteen", nameToShow: "17:00 a 19:00" },
  { value: "nineteenToTwentyone", nameToShow: "19:00 a 21:00" },
]

const MasterForm = () => {
  const [availableHours, setAvailableHours] = useState([])
  const [step, setStep] = useState(1)
  const [tabPosition, setTabPosition] = useState(0)
  const [data, setData] = useState(dataInitialState)
  const [scheduleList, setScheduleList] = useState([])
  const [inputErrors, setInputErrors] = useState({})
  const classes = styles()
  const daysList = days()
  const hoursMap = hoursArray()

  useEffect(() => {
    availableHours.length === 0 &&
      axios.get("https://5f4928b88e271c001650c73d.mockapi.io/AGENDAMIENTO/CONSULTARDISPONIBILIDAD").then(({ data }) => {
        setAvailableHours(data)
      })
  }, [availableHours])

  const dataHandler = ({ target }) => setData(data => ({ ...data, [target.name]: target.value }))
  const tabHandler = (e, newValue) => setTabPosition(newValue)
  const hourHandler = (e, hour, day) => setData(data => ({ ...data, schedule: { hour, day } }))
  const checkoutHandler = () => {
    setScheduleList(list => [...list, data])
    setData(dataInitialState)
    setTabPosition(0)
    setInputErrors({})
    setStep(4)
  }
const dataNextStep = () =>{ if(!errorHandler())  setStep(2)}
  const errorHandler = () => {
      if (!Number(data.dni) || data.dni.length < 5)
      setInputErrors({input:"dni", message: "Dni must be numeric and more than 5 digits"})
      else if (!Number(data.phone) || data.phone.length < 5)
      setInputErrors({input:"phone", message: "Phone must be numeric and more than 5 digits"})
      else return false
    return true
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
              <PersonalData errors={inputErrors} data={data} setter={dataHandler} nextStep={dataNextStep} classes={classes} />
            ) : step === 2 ? (
              <Schedule
                daysList={daysList}
                availableHours={availableHours}
                nextStep={() => setStep(3)}
                hourHandler={hourHandler}
                selectedHour={data.schedule}
                tabPosition={tabPosition}
                setTabPosition={tabHandler}
                classes={classes}
                hoursMap={hoursMap}
                scheduleList={scheduleList}
              />
            ) : step === 3 ? (
              <Checkout hoursMap={hoursMap} classes={classes} nextStep={checkoutHandler} data={data.schedule} />
            ) : step === 4 ? (
              <Thankyou classes={classes} rootStep={() => setStep(1)} />
            ) : null}
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MasterForm
