import React from 'react'

const DayGrid = ( { day, thumbnail, showNotesFunc } ) => {
  return (
    <div 
      style={{
        margin: "0",
        display: "inline-block",
        width: 100/7 + "%",
        border: "1px rgba(0, 0, 0, 0.2) solid",
        boxSizing: "border-box",
        color: "rgba(0, 0, 0, 0.5)",
        padding: "1px 4px 4px 4px",
        // backgroundImage: `url('${require("../assets/placeholders/placeholder_1.jpg")}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        
      }}
      onClick={showNotesFunc}
    >
      {day} 
    </div>
  )
}

export default DayGrid