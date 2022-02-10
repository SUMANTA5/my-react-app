import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode, setmode] = useState('light')

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode ('dark')
      document.body.style.background = '#154360'
    }else{
      setmode ('light') 
      document.body.style.background = 'white'
    }
    
  }
  return (
    <>
    <Navbar title ="TextUtils" abutText="Abut us" mode ={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForm heading = "Enter the text" mode = {mode}/> 
    </div>
    </>
  );
}

export default App;
