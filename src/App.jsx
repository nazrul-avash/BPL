
import { Suspense } from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import AvailablePlayers from './component/AvailablePlayers/AvailablePlayers';
import ButtonBar from './component/ButtonBar/ButtonBar';
const fetchData = async () =>{
    const res = await fetch('/players.json');
    return res.json();
  }

function App() {
    const fetchPlayers = fetchData();
    const [selectedType,setSelectedType] = useState("available");
    function handleToggle (value){
        setSelectedType(value);
    }
    return (
    <>
    <NavBar ></NavBar>
    <ButtonBar type={selectedType} onToggle ={handleToggle}></ButtonBar>
    <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
      <AvailablePlayers fetchPlayers = {fetchPlayers}></AvailablePlayers>
    </Suspense>
    </>
  )
}

export default App
