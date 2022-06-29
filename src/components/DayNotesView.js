import {React, useState} from 'react'

const DayNotesView = () => {
  const [visible, setVisible] = useState(false);
  
  const toggleVisibility = () => {
    if (visible) {
      setVisible(false);
    } 
    else {
      setVisible(true);
    }
  }

  return (
    <div style={ visible ? {...notesViewStyle, display: "block"} : notesViewStyle }>
      DayNotesView
    </div>
  )
}

const notesViewStyle = {
  // backgroundColor: "green",
  width: "40vw", 
  height: "100vh",
  borderLeft: "0.1em solid darkgray",
  position: "absolute",
  justifySelf: "flex-end",
  display: "none"
}

export default DayNotesView