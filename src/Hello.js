// import React from 'react';

// function Hello(firstName) {
//     return (<p> This is a para in Hello tag : name {firstName}</p>
//     );
//   }

// export default Hello;


import React from 'react';
import './Hello.css'

function Hello({firstName}) {
  return <p className="myname" >This is para in Hello Tag name : {firstName}
   <br/> Contact me @ <strong>hamzaaaaahsultan@gmail.com</strong>
    <br/> Have a nice day
  </p>
}

export default Hello;