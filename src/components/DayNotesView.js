import { useEffect, useState } from 'react'
import Notecard from './Notecard';
import AddNoteBtn from './AddNoteBtn';

const DayNotesView = ( { dayNotes, setEditorState } ) => {
  const [visible, setVisible] = useState(true);
  
  const toggleVisibility = () => {
    setVisible(!visible);
  }

  // wtf is this ??
  const [notes, setNotes] = useState([]); // TODO: make it run setNotes when dayNotes change

  useEffect( () => {
    // setNotes(dayNotes);
  }, []) 

  return (
    <div 
      className='cleanScrollbar'
      style={ visible ? {...notesViewStyle, display: "inline"} : notesViewStyle }>
      
      {/* Add note button */}
      <AddNoteBtn></AddNoteBtn>
      

      <div style={{ // thumbnail container
        width: "100%",
        display: "block",
        border: "2px solid lightgray",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        maxHeight: "60%"
      }}>
        <img 
          src={ require('../assets/sunglasses_cat.jpg') } 
          style={{
            width: "100%",
          }}
        />
        <div style={{
          textAlign: "center",
          backgroundColor: "rgba(150, 150, 150, 0.8)",
          padding: "3px",
          fontSize: "1.05em",
          borderTop: "2px solid lightgray",
          color: "white",
          // fontWeight: "bold"
        }}>
          Thumbnail Title Here
        </div>
      </div>
      
      {
        dayNotes.map((note) => (
          <Notecard dayNote={note} setEditorState={setEditorState}/>
        ))
      }
    </div>
  );
};


const notesViewStyle = {
  // backgroundColor: "rgba(255, 255, 255, 0.6)",
  background: "rgba(255, 255, 255, 0.6)",
  width: "39vw", 
  height: "100vh",
  display: "none",
  right: "0%",
  justifyContent: "space-around",
  padding: "2%",
  // paddingTop: "7%",
  boxSizing: "border-box",
  borderLeft: "2px lightgray solid",
  gap: "3%",
  overflowY: "auto",
  overflowX: "hidden",
  position: "relative"
}

export default DayNotesView