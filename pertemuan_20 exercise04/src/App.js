// import './App.css';
// import Headerr from './Components/Headerr';
// import Hellow from './Components/Hellow';
// import Content from './Components/Content';
// import axios from "axios";


// function App() {
//   return( 
//     <>
//   
//   <Headerr />
//   <Hellow />
//   <Content />
//
//   </>
//   );
// }
// export default App;
// 
  
import React from 'react';
import './App.css';
const sortByPower = (a, b) => {
  return b.power - a.power;
}
const List = props => {
  return (<>
    <h1>React People!</h1>
      <ul className="list">
        {props.data.sort(sortByPower).map((person) => (
          <li key={person.name} className="list-item">
            <div className="list-item-image-container">
              <img src={person.thumbnail} />
            </div>
            <span className="list-item-name">
              {person.name} ( Power:{' '}
            <span className="list-item-power">{person.power}</span> )
          </span>
        </li>
      ))}
    </ul>
  </>
  );
}
const App = () => {
  const human = [
    {
      name: 'Krillin',
      thumbnail:'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',
      power: 10
    },  
    {
      name: 'Bulma',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',
      power: 3
    },
    {
      name: 'Chi-chi',
      thumbnail:'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',
      power: 30
    }
  ];
  return (
    <div className="App">
      <List data={human} />
    </div>
  );
}
export default App;

/*
Pertemuan 23 no class
*/

/*
//PERTEMUAN 24
class App extends Component{
 
  state = {
    users: [],
  };
 
  componentDidMount() {
  // fetch('https://jsonplaceholder.typicode.com/users')
  //.then((response) => response.json())
  //.then((json) => this.setState({users:json}));
  
 
  //axios
  //.get("https://jsonplaceholder.typicode.com/users");
  //.then((response) =>this.setState({users: response.data}));
   
}  
  render (){
    return( 
    <>
      {this.state.users.map((item) =>{
        return(
        <Card
          name={item.name}
          username={item.username}
          email = {item.email}
          phone= {item.phone}
        />
        );
    })}
    </> 
    );  
  }
}
  export default App;
*/ 