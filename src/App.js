import './App.css';
import React from 'react';

function App() {

  const simple =[
    {
    id:1,
      name: "Jai",
    designation: "Software Engineer"
  },
    {
    id:2,
      name: "Balaji",
    designation: "Software Engineer"
  },
    {
    id:3,
      name: "Raj",
    designation: "Software Engineer"
  },
    {
    id:4,
      name: "Kalai",
    designation: "Software Engineer"
  },
    {
    id:5,
      name: "Chelvan",
    designation: "Software Engineer"
  },
]

  return (
    <div className="App">
        {
          simple.length &&
          simple
          .slice(0,3)
          .map((user)=>{
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.name}</strong>
                </p>
                <p>{user.designation}</p>
              </div>
            );
          })
        }
        <hr className='paddlr'/>
        {
          simple.length &&
          simple
          .filter((user)=>user.id === 4 || user.id === 5)
          .map((user)=>{
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.name}</strong>
                </p>
                <p>{user.designation}</p>
              </div>
            );
          })
        }
    </div>
  );
}

export default App;
