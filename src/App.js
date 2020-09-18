
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//    constructor(props) {
//       super() //since we are extending class Table so we have to use super in order to override Component class constructor
//       this.state = { //state is by default an object
//          students: [
//             { id: 1, name: 'Srija', age: 26, email: 'srija@email.com' },
//             { id: 2, name: 'Ram', age: 30, email: 'ram@email.com' },
//             { id: 3, name: 'xoxo', age: 16, email: 'xoxo@email.com' },
//             { id: 4, name: 'zzz', age: 25, email: 'zzz@email.com' }
//          ]
//       }
//    }

//    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
//     return this.state.students.map((student, index) => {
//       const { id, name, age, email } = student //destructuring
//       return (
//          <tr key={id}>
//             <td>{id}</td>
//             <td>{name}</td>
//             <td>{age}</td>
//             <td>{email}</td>
//          </tr>
//       )
//    })
// }
// ReactDOM.render(
//     <App />,
//      document.getElementById("root")
//    )

// export default App;




import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
//import table from 'react-bootstrap/Table'


//  function App() {
//   return (
//     <div>
//   < table>
  
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Name</th>
//         <th> City</th>
//         <th> Gender </th>
//         </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>1</td>
//         <td>Srija</td>
//         <td> LA </td>
//         <td> Female </td>
//       </tr>

//       <tr>
//         <td>2</td>
//         <td>Ram</td>
//         <td>SFO</td>
//         <td>Male</td>
       
//       </tr>

//       <tr>
//         <td>3</td>
//         <td>Xoxo</td>
//         <td>CA</td>
//         <td>Male</td>
       
//       </tr>
//       </tbody>
   
// </table>
// </div>
   
//    )
//  }

//  ReactDOM.render(
//   <App />,
//    document.getElementById("root")
//  )

//  export default App;



 // let names = [{nam: "srija", age: "25"}, {}]


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> Hello Srija!</h1>
//         <p>HI</p>
        
        
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  constructor(props) {
       super() 
       this.state = { 
           students: [
              { id: 1, name: 'Srija', age: 26, email: 'srija@email.com' },
              { id: 2, name: 'Ram', age: 30, email: 'ram@email.com' },
               { id: 3, name: 'xoxo', age: 16, email: 'xoxo@email.com' },
              { id: 4, name: 'zzz', age: 25, email: 'zzz@email.com' }
          ]
        }
     }
  
      renderTableData() { 
       return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{student.id}</td>
               <td>{student.name}</td>
               <td>{student.age}</td>
               <td>{student.email}</td>
            </tr>
         )
      })
   }
   render(){
     return(
       <div>
         <h1 id='title'> React Table</h1>
        <table id='student'>
          <tbody>
            {
            this.renderTableData()
            }
        </tbody>
      </table>      
    </div>
     )
   }

}


// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// )
    
export default App;
 