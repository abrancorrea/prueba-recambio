import React from "react"

import {
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  makeStyles,
  Fade,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Tabs,
  Box,
  Tab
  } from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"

function TabPanel(props) {
  const { day, children, value, index, selectedHour, hourHandler, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <List component="nav" aria-label="list schedule hours">
        <ListItem
          button
          selected={selectedHour.hour === "7:00 a 9:00" && selectedHour.day === `${day.dayName} ${day.monthDate}`}
          onClick={(event) => hourHandler(event, "7:00 a 9:00", `${day.dayName} ${day.monthDate}`)}
        >
          <ListItemText primary="7:00 a 9:00" />
        </ListItem>
        <ListItem
          button
          selected={selectedHour.hour === "9:00 a 11:00" && selectedHour.day === `${day.dayName} ${day.monthDate}`}
          onClick={(event) => hourHandler(event, "9:00 a 11:00",`${day.dayName} ${day.monthDate}`)}
        >
          <ListItemText primary="9:00 a 11:00" />
        </ListItem>
      </List>
      )}
    </div>
  );
}

const Schedule= ({ daysList, hourHandler, selectedHour, tabPosition, setTabPosition, nextStep, classes }) => {
  return (
    <Grid
      container
      justify="center"
      direction="column"
      className={classes.container} 
    >
      {/* <Fade in> */}
        <Typography variant="h6">
         2. Selecciona el dia y el rango horario
        </Typography>
        <Spacer height="50px" />
        
<AppBar position="static" color="default">
        <Tabs
          value={tabPosition}
          onChange={setTabPosition}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        {daysList.map( day => (
          <Tab key={day.dayName} label={
          <>
          <Typography variant="body2">{day.dayName}</Typography>
          <Typography variant="caption">{day.monthDate}</Typography>
          </>
          } />
        ))
        }
        </Tabs>
      </AppBar>
      {daysList.map( (day,i) => (
      <TabPanel day={day} value={tabPosition} selectedHour={selectedHour} hourHandler={hourHandler} index={i} />
      ))}
      {/* <TabPanel value={tabPosition} selectedHour={selectedHour} hourHandler={hourHandler} index={1} />
      <TabPanel value={tabPosition} selectedHour={selectedHour} hourHandler={hourHandler} index={2} />
      <TabPanel value={tabPosition} selectedHour={selectedHour} hourHandler={hourHandler} index={3} />
      <TabPanel value={tabPosition} selectedHour={selectedHour} hourHandler={hourHandler} index={4} /> */}
      {/* </Fade> */}
        <Spacer height="50px" />
      <Button variant="contained" color="primary" onClick={nextStep}>
          Confirmar
        </Button>
    </Grid>
  )
}

export default Schedule