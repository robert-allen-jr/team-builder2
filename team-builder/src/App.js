import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import Form from './components/Form'
import List from './components/List'


function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  
  // useEffect(() => {
  //   setTeamMembers([...teamMembers, member])
  // }, [])

  console.log(teamMembers)

  return (
    <div className="App">
      <Form setTeamMembers={setTeamMembers} teamMembers={teamMembers}/>
      <List teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
