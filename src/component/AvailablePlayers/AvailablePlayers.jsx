import React, { use } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import Card from '../Card/card';

const AvailablePlayers = ({fetchPlayers}) => {
    const playerData = use(fetchPlayers);

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-3'>
           {
            playerData.map((player)=>{
                 return <Card player={player}></Card> 
            })
           }
        </div>
    );
};

export default AvailablePlayers;