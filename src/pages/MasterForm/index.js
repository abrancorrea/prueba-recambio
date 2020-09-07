import React, { useState, useEffect } from "react"
import axios from "axios"

import { AppBar, Toolbar, Typography, Container, Card, Grid } from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"

import { days, hoursArray, styles, dataInitialState } from "../../utils/helpers"

import PersonalData from "./PersonalData"
import Schedule from "./Schedule"
import Checkout from "./Checkout"
import Thankyou from "./Thankyou"

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
  const dataNextStep = () => !errorHandler() && setStep(2)
  const ScheduleNextStep = () => !errorHandler() && setStep(3)
  const errorHandler = () => {
    if (step === 1) {
      if (!Number(data.dni) || data.dni.length < 5)
        setInputErrors({ input: "dni", message: "El Dni debe ser numerico y de mas de 5 caracteres" })
      else if (!Number(data.phone) || data.phone.length < 5)
        setInputErrors({ input: "phone", message: "El telefono debe ser numerico y de mas de 5 caracteres" })
      else return false
    } else if (step === 2 && !data.schedule.day) {
      setInputErrors({ input: "schedule", message: "Debe seleccionar una opcion para poder continuar" })
    } else {
      setInputErrors({})
      return false
    }
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
              <PersonalData
                errors={inputErrors}
                data={data}
                setter={dataHandler}
                nextStep={dataNextStep}
                classes={classes}
              />
            ) : step === 2 ? (
              <Schedule
                errors={inputErrors}
                daysList={daysList}
                availableHours={availableHours}
                nextStep={ScheduleNextStep}
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
