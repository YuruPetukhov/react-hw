import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const header = (
  <header>Hello my first app</header>

)
const nav = (
  <li className='nav_main'>About Start Cancel</li>
  
 
)
const footer = (
  <footer>Hello my first footer</footer>
)
interface IHeaderProps{
appTitle: string,
color: string,


}
interface INav{

color: string
}
interface IMain{
  login:boolean
}
const Main = ({login}: IMain) =>{
  return (
    <main>{
      login ? "You can see this content" : "Go away"}
    </main>
  );
}
const Nav = ({color}:INav)=>{
  return(
    <li style={{
      color:color
      
    }}>*About <br /> *Start <br />  *Cancel</li>
  )
}
const Header = ({appTitle,color}: IHeaderProps) => {
return (
 <header style={{
  color:color,
 
  
 }}>
   Hello my {
   appTitle  === "first" ? "first": "second"} app </header>)};

function App() {
  const [login, setLogin]= useState(false);
  return (
    <div className="App">
   < Header appTitle={'first'} color={'red'}  />
   <Nav color={'red'}/>
   <Main login = {login}/>
   < Header appTitle={'second'} color={'green'}  />
      
      <button onClick={()=> setLogin (!login)}>Login</button>
      <input type="text" />
      <br />
      <button onClick={()=> setLogin (!login)}>Password</button>
      
      <input type="password" />
      
          </div>
  );
}

export default App;
