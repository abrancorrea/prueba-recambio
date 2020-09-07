import React from "react"
import PropTypes from "prop-types"

import { Typography, Grid, Button, List, ListItem, ListItemText, AppBar, Tabs, Tab, Fade } from "@material-ui/core"
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
    <div role="tabpanel" hidden={value !== index} id={`tab-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
        <List component="nav" aria-label="list schedule hours">
          {Object.entries(availableHours).map(availableHour => (
            <ListItem
              button
              selected={
                selectedHour.hour === availableHour[0] && selectedHour.day === `${day.dayName} ${day.monthDate}`
              }
              disabled={
                !availableHour[1] ||
                scheduleList.find(
                  el => el.schedule.day === `${day.dayName} ${day.monthDate}` && el.schedule.hour === availableHour[0]
                )
              }
              onClick={event => hourHandler(event, availableHour[0], `${day.dayName} ${day.monthDate}`)}
            >
              <ListItemText primary={hoursMap.find(hour => hour.value === availableHour[0]).nameToShow} />
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
  scheduleList,
}) => {
  return (
    <Fade in timeout={400}>
      <Grid container justify="center" direction="column" className={classes.container}>
        <Typography variant="h6">2. Selecciona el dia y el rango horario</Typography>
        <Spacer height="50px" />

        <AppBar position="static" color="default">
          <Tabs
            value={tabPosition}
            onChange={setTabPosition}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
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
        <Spacer height="50px" />
        <Button variant="contained" color="primary" onClick={nextStep}>
          Confirmar
        </Button>
      </Grid>
    </Fade>
  )
}
Schedule.propTypes = {
  daysList: PropTypes.array.isRequired,
  hourHandler: PropTypes.func.isRequired,
  selectedHour: PropTypes.object.isRequired,
  tabPosition: PropTypes.number.isRequired,
  setTabPosition: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  availableHours: PropTypes.array.isRequired,
  hoursMap: PropTypes.array.isRequired,
  classes: PropTypes.any.isRequired,
  scheduleList: PropTypes.array.isRequired,
}

export default Schedule
