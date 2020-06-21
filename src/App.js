// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Hello from './Hello';
// function App({name , age}) {
//     return (
//       <div>Hello from App.js updated {name} Age = {age -2}
//       <br/> 
//       <Hello firstName={name}></Hello>
//       </div>
//     );
//   }

// export default App;


import React from 'react';
import './App.css';
import Hello from './Hello';
import './Hello.css'

function App({name, age}) {
  return  <div align ="center">
    <h1 className="myname2">Hello World By Ameer Hamza</h1>
    <h2 className="myname2">Creating First React App</h2>
    
    <p className="myname1"> Hello from App.js
        <br/> I am <strong>{name} </strong> <br/> I am this old <strong>{age-10}</strong>
        </p>
      <br/>
      <Hello firstName={name}></Hello>

          {/* Hello from App.js updated {name} Age = {age - 5}
          //<br/>
         // <Hello firstName={name} ></Hello> */}
        </div>
}

export default App;