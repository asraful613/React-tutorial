import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      
      <h1>Vite + React</h1>
      <Device name="laptop" price="55"></Device>
      <Device name="phone" price="2000"></Device>
      <Device name="watch" price="800"></Device>
      <Person grade="7" score="99"></Person>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props){
  // console.log(props);
  return <h2>this device:{props.name} price: {props.price}</h2>
}
function Person(){
  const age=25;
  const money=20;
  const person={name:'asraful',age:20}
  return <h3>I am a {person.name} with age:{age+money}</h3>
}

const {grade,score}={grade:'7',score:'99'};
function Student(props){
  console.log(props);
  return(
    <div>
      <h3>I am a student my grade: {grade}</h3>
    </div>
  )
}

function Developer(){
  const developerStyle={
    margin:'20px',
    padding:'20px',
    border:'1px solid black',
    borderRadius:'10px'
  }
  return(
    <div style={developerStyle}>
      <h5>Asraful</h5>
      <p>Coding:</p>
    </div>
  )
}
export default App
