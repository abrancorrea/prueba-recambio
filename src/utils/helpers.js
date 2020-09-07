import { makeStyles } from "@material-ui/styles"

export const days = () => {
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

export const hoursArray = () => [
  { value: "sevenToNine", nameToShow: "7:00 a 9:00" },
  { value: "nineToEleven", nameToShow: "9:00 a 11:00" },
  { value: "elevenToThirteen", nameToShow: "11:00 a 13:00" },
  { value: "thirteenToFifteen", nameToShow: "13:00 a 15:00" },
  { value: "fifteenToSeventenn", nameToShow: "15:00 a 17:00" },
  { value: "seventeenToNineteen", nameToShow: "17:00 a 19:00" },
  { value: "nineteenToTwentyone", nameToShow: "19:00 a 21:00" },
]

export const dataInitialState = {
  dni: "",
  phone: "",
  schedule: { day: null, hour: null },
}

export const styles = makeStyles(() => ({
  container: {
    padding: "25px",
  },
}))
