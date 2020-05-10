import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";


// ReactDOM.render(
//   <React.StrictMode>
//     <h1>Hello React!</h1>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const element = (...);
// If there are multiple tags and need line wraped, just use the parentheses - ().
// function clock(){
//     const element = (
//       <div>
//         <h1>Hello World!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     )

//     ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(clock, 1000);

ReactDOM.render(<App />, document.getElementById("root"));
