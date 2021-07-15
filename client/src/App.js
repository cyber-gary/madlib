import { Router } from '@reach/router';
import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MadLib from './components/MadLib';
import AddPost from './components/AddPost'


function App() {

const [passedMessage, setPassedMessage] = useState("")
const [user, setUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Login path = '/' user= {user} setUser={setUser} />
        <Dashboard path ='/user/:username' passedMessage={passedMessage} setPassedMessage={setPassedMessage} user= {user} setUser={setUser}/>
        <MadLib path = '/play' passedMessage={passedMessage} setPassedMessage={setPassedMessage} user= {user} setUser={setUser}/>
        <AddPost path = '/:username/new' user= {user} setUser={setUser}/>
      </Router>
    </div>
  );
}

export default App;
