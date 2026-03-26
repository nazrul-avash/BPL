
import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import AvailablePlayers from './component/AvailablePlayers/AvailablePlayers';
import ButtonBar from './component/ButtonBar/ButtonBar';
import SelectedPlayers from './component/SelectedPlayers/SelectedPlayers';
const fetchData = async () =>{
    const res = await fetch('/players.json');
    return res.json();
  }

function App() {
    const [coin, setCoin] =useState(50000000000); 
    const fetchPlayers = fetchData();
    const [selectedType,setSelectedType] = useState("available");
    const [selectedPlayers,setSelectedPlayers] = useState([]);
    
    function handleToggle (value){
      
      setSelectedType(value);
    }
    return (
    <>
    <NavBar coin = {coin} ></NavBar>
    <ButtonBar selectedType={selectedType} onToggle ={handleToggle}></ButtonBar>
    <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
     {
      (selectedType === "available"?( <AvailablePlayers fetchPlayers = {fetchPlayers} coin={coin} setCoin = {setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></AvailablePlayers>):(<SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>))
     }
      
    </Suspense>
    </>
  )
}

export default App
