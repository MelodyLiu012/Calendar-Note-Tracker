import React from 'react'
import Calendar from './Calendar'
import MonthYearLabel from './MonthYearLabel'

const CalendarView = ({ onSearchClicked }) => {

  return (
    <div style={{ 
      padding: "0.5vw 2vw 2vw 2vw",
      width: "85vw", 
      height: "100vh",
      boxSizing: "border-box", // prevent padding from increasing div size
      }}
    >
      <MonthYearLabel month="January" year="2022" onSearchClicked={onSearchClicked} />
      <Calendar />
    </div>
  )
}

export default CalendarView