import { useState } from 'react';
import './App.css';
import CalendarView from './components/CalendarView';
import DayNotesView from './components/DayNotesView';
import MonthSelectView from './components/MonthSelectView';


function App() {
  const [date, setDate] = useState();

  return (
    <div className="App" >
      <MonthSelectView />
      <CalendarView />
      <DayNotesView /*pass in a day/month/year*/ />
    </div>
  );
}

export default App;
