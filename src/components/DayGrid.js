import React from 'react'

const DayGrid = ( { day, showNotesFunc } ) => {
  return (
    <div 
      style={{
        margin: "0",
        display: "inline-block",
        width: 100/7 + "%",
        border: "1px rgba(0, 0, 0, 0.2) solid",
        boxSizing: "border-box",
        color: "rgba(0, 0, 0, 0.5)",
        padding: "1px 4px 4px 4px"
      }}
      onClick={showNotesFunc}
    >
      {day}
    </div>
  )
}

export default DayGrid