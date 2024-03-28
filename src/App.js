
import './App.css';
import Purpose from './views/purpose';
import Welcome from './views/welcome';
import  { useState } from 'react';
import useSound from 'use-sound';
import click from './click.mp3';
function App() {
  const [play] = useSound(click);
  const [page, setPage] = useState(0);
  function next() {
    setPage(page+1);
    play();
  }

  const viewList = [
    <Welcome next={next}/>,
    <Purpose next={next}/>
  ]

  return (
    <>
    <div className="restart"><a onClick={()=>{setPage(0)}}href="#">Restart</a></div>
    {viewList[page]}
    </>
  );
}

export default App;
