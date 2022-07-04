import {React, useState} from 'react'
import Notecard from './Notecard';

const DayNotesView = () => {
  const [visible, setVisible] = useState(true);
  
  const toggleVisibility = () => {
    if (visible) {
      setVisible(false);
    } 
    else {
      setVisible(true);
    }
  }

  const [notes, setNotes] = useState([
    {
      index: 0,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      index: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      index: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      index: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      index: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]);

  return (
    <div style={ visible ? {...notesViewStyle, display: "inline"} : notesViewStyle }>
      <div style={{ // thumbnail container
        width: "100%",
        display: "block",
        border: "2px solid white",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.6)"
      }}>
        <img 
          src={ require('../assets/sunglasses_cat.jpg') } 
          style={{
            width: "100%",
          }}
        />
        <div style={{
          textAlign: "center",
          // backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "3px",
          fontSize: "1.05em",
        }}>
          Caption Here
        </div>
      </div>
      
      {/*secondary files list below*/}
      { 
        notes.map((note) => (
          <div style={{
            border: "2px solid white",
            borderRadius: "10px",
            height: "20%",
            marginTop: "4%",
            width: "100%",
            overflow: "hidden",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}>
              <Notecard text={note.text}/>
          </div>
        ))
      }
    </div>
  )
}


const notesViewStyle = {
  // backgroundColor: "rgba(255, 255, 255, 0.6)",
  background: "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5))",
  width: "40vw", 
  height: "100vh",
  maxWidth: "600px",
  position: "absolute",
  display: "none",
  right: "0%",
  justifyContent: "space-around",
  padding: "2%",
  boxSizing: "border-box",
  borderLeft: "2px white solid",
  gap: "3%",
  overflowY: "auto",
}

export default DayNotesView