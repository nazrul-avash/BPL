
import { Suspense } from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import AvailablePlayers from './component/AvailablePlayers/AvailablePlayers';
const fetchData = async () =>{
    const res = await fetch('/players.json');
    return res.json();
  }

function App() {
    const fetchPlayers = fetchData();
    return (
    <>
    <NavBar></NavBar>
    <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
      <AvailablePlayers fetchPlayers = {fetchPlayers}></AvailablePlayers>
    </Suspense>
    </>
  )
}

export default App
