import { useEffect, useState, useRef } from 'react';

import './App.css';
import CalendarView from './components/calendar/CalendarView';
import DayNotesView from './components/notes-view/DayNotesView';
import MonthSelectView from './components/calendar/MonthSelectView';
import NoteEditor from './components/notes-view/NoteEditor';
import HideButton from './components/notes-view/HideButton';


const App = () => {

  useEffect ( () => {
    callBackendAPI()
      .then(res =>console.log(res.express)) // then() runs when callBackendAPI finishes
      .catch(err => console.log("Error from retrieving response: " + err));
  }, []);

  // fetching the GET route from the Express server which matches the GET route from code
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error("Error from calling API: " + body.message) 
    }
    return body;
  };


  const [date, setDate] = useState(new Date()); // current date selected
                                                // new Date() initializes with today's date
  const [dayNotes, setDayNotes] = useState([ // debug only. fetch note from server in production
    { 
      index: 0, // first object in notes list is always thumbnail
      title: "Title 0",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    { 
      index: 1, 
      title: "Title 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    { 
      index: 2, 
      title: "Title 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    { 
      index: 3, 
      title: "Title 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
  ]);
  // const [selectedNoteIndex, setSelectedNoteIndex] = useState(1);
  // const [isNoteClicked, setIsNoteClicked] = useState(true); // TODO: should default to false, only true for debug
  
  /*
   * Object representing note editor state
   * Always in the following format:
   *  isNoteSelected: boolean
   *  selectedIndex: number (default to 0)
   */
  const [editorState, setEditorState] = useState({ 
    visible: false,
    selectedIndex: 1
  })

  const [notesViewState, setNotesViewState] = useState({
    visible: true,
  })

  const [calendarClass, setCalendarClass] = useState("calendarContainer");
  const [notesClass, setNotesClass] = useState("notesContainer");

  useEffect(() => {
    if (notesViewState.visible) {
      setNotesClass("notesContainer");

      if (editorState.visible) {
        setCalendarClass("calendarContainerNone");
      } 
      else {
        setCalendarClass("calendarContainer");
      }
    }
    else {
      setCalendarClass("calendarContainer");
      setNotesClass("notesContainerNone");
    }

  }, [notesViewState, editorState])

  return (
    <div className="App" >

      <div className={calendarClass}>
        <MonthSelectView />
        <CalendarView date={date} setDate={setDate}/>
      </div>

      <div className={notesClass}>
        <HideButton 
          viewState={notesViewState} 
          setViewState={setNotesViewState}
        />
        <DayNotesView 
          dayNotes={dayNotes} 
          setEditorState={setEditorState}
          notesViewState={notesViewState}
        />
      </div>
        
      <NoteEditor note={dayNotes[editorState.selectedIndex]} setEditorState={setEditorState} editorState={editorState}/> {/*TODO: function to get index of note of current date*/}

      {/*debug only*/}
      {/* 
        <button style={{width: "100px", height: "30px"}}
        onClick={()=> {console.log(getIsNoteClicked())}}></button> */}
      
    </div>
  );
}

export default App;
