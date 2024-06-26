
import './App.css';
import Purpose from './views/purpose';
import Welcome from './views/welcome';
import  { useState } from 'react';
import useSound from 'use-sound';
import click from './click.mp3';
import CallNurse from './views/callNurse';
import ring from './ring.mp3';
import BMI from './views/bmi';
import Symptoms from './views/symptoms';
import Result from './views/results';
import Ready from './views/ready';
function App() {
  const [play] = useSound(click);
  const [diag, setDiag] = useState("No diagnosis given.");
  const [phone, {stop}] = useSound(ring);
  const [page, setPage] = useState(1);
  function next() {
    setPage(page+1);
    play();
  }
  function restart() {
    setPage(1);
    stop();
  }
  const viewList = [
    
    <CallNurse/>,
    <Welcome next={next}/>,
    <Purpose next={next}/>,
    <BMI next={next}/>,
    <Symptoms next={next} setDiag={setDiag}/>,
    <Result next={next}  diag={diag} />,
    <Ready />
  ]

  return (
    <>
    <div className="restart"><button onClick={()=>{restart()}}href="#">Restart</button></div>
    <div className="callNurse"><button onClick={()=>{setPage(0); phone();}}>Call Nurse</button></div>
    {viewList[page]}
    </>
  );
}

export default App;
