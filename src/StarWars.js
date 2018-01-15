// import React, { Component } from 'react';
// import './App.css';

// class StarWars extends Component {

//     componentDidMount() {
        
//         fetch('https://swapi.co/api/people/').then((response) => response.json()).then((finalResponse) => {
//             console.log("finalResponse", finalResponse)

//             let userName = finalResponse.results.map((uname) => {
//                 return uname.name
//             })

//             let password = finalResponse.results.map((byear) => {
//                 return byear.birth_year
//             })

//             console.log("name",userName)
//             console.log("password",password)
//         })

//     }

//     render() {
    
//     return (
//       <div className="App">
//        <h1 className="App-title">Welcome to star wars </h1>
     
//       </div>
//     );
//   }
// }

// export default StarWars;
