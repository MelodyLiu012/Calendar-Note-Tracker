import { useEffect, useState } from 'react'
import Notecard from './Notecard';
import Toolbar from './Toolbar';

const DayNotesView = ( { notesViewState, dayNotes, setEditorState } ) => {

  // wtf is this ??
  const [notes, setNotes] = useState([]); // TODO: make it run setNotes when dayNotes change

  useEffect( () => {
    
  }, []) 

  return (
    <div 
      className='cleanScrollbar'
      style={ notesViewState.visible ? {...notesViewStyle, display: "inline"} : notesViewStyle }
    >
      
      <Toolbar setEditorState={setEditorState}></Toolbar>
      
      <div style={{
        height: "90%",
        maxHeight: "90%",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "4%",
      }}>
        {
          dayNotes.map((note) => (
            <Notecard dayNote={note} setEditorState={setEditorState}/>
          ))
        }
      </div>
      
    </div>
  );
};


const notesViewStyle = {
  display: "none",
  background: "rgba(255, 255, 255, 0.6)",
  minWidth: "95%", 
  height: "100%",
  right: "0%",
  justifyContent: "space-around",
  boxSizing: "border-box",
  gap: "3%",
  position: "relative",
  flexGrow: "2",
}

export default DayNotesView