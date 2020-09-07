import React from "react"

import {
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core"
import { Spacer } from "../../common/StyledElements"

function TabPanel({
  day,
  children,
  value,
  index,
  selectedHour,
  hourHandler,
  availableHours,
  hoursMap,
  scheduleList,
  ...other
}) {
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
          {Object.entries(availableHours).map(availableHour => (
            <ListItem
              button
              selected={
                selectedHour.hour === availableHour[0] &&
                selectedHour.day === `${day.dayName} ${day.monthDate}`
              }
              disabled={
                !availableHour[1] ||
                scheduleList.find(
                  el =>
                    el.schedule.day === `${day.dayName} ${day.monthDate}` &&
                    el.schedule.hour === availableHour[0]
                )
              }
              onClick={event =>
                hourHandler(
                  event,
                  availableHour[0],
                  `${day.dayName} ${day.monthDate}`
                )
              }
            >
              <ListItemText
                primary={
                  hoursMap.find(hour => hour.value === availableHour[0])
                    .nameToShow
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

const Schedule = ({
  daysList,
  hourHandler,
  selectedHour,
  tabPosition,
  setTabPosition,
  nextStep,
  availableHours,
  hoursMap,
  classes,
  scheduleList
}) => {
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
          {daysList.map(day => (
            <Tab
              key={day.dayName}
              label={
                <>
                  <Typography variant="body2">{day.dayName}</Typography>
                  <Typography variant="caption">{day.monthDate}</Typography>
                </>
              }
            />
          ))}
        </Tabs>
      </AppBar>
      {daysList.map((day, i) => (
        <TabPanel
          hoursMap={hoursMap}
          day={day}
          value={tabPosition}
          availableHours={availableHours}
          selectedHour={selectedHour}
          hourHandler={hourHandler}
          scheduleList={scheduleList}
          index={i}
        />
      ))}
      {/* </Fade> */}
      <Spacer height="50px" />
      <Button variant="contained" color="primary" onClick={nextStep}>
        Confirmar
      </Button>
    </Grid>
  )
}

export default Schedule
