import React from 'react'
import Calendar from './Calendar'
import MonthYearLabel from './MonthYearLabel'

const CalendarView = ({ date, setDate }) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div style={{ 
      padding: "0.5% 2% 2% 2%",
      width: "88%", 
      maxWidth: "65vw",
      height: "100vh",
      boxSizing: "border-box", // prevent padding from increasing div size
      display: "flex",
      flexDirection: "column",

      }}
    >
      <MonthYearLabel month={months[date.getMonth()]} year={date.getFullYear()} setDate={setDate}/>
      <Calendar date={date} setDate={setDate}/>
    </div>
  )
}

export default CalendarView