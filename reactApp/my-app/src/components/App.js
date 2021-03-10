import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index';
import Events from './Events';
import EventForm from './EventForm'
import AppContext from '../contexts/AppContext'
import events from '../reducers/events';

console.log(AppContext);
const App = () => {
  const initialState = {
    events: [],
    oparationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        
        <Events />
      </div>
    </AppContext.Provider>
  );
} 

export default App
