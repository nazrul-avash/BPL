import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = (player) => {
    console.log(player);
    return (
        <>
                  <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img
      src={player.player.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser />{player.player.name}</h2>
    <div className='flex justify-between gap-4 items-center'>
        
        <h1 className='flex items-center gap-2'><FaFlag/>{player.player.country}</h1>
        <button className='btn'>{player.player.role}</button>
    </div>
    <div className="divider"></div>
    <h1>Rating</h1>
    <div className='flex justify-between'>
        <h1>Left-Hand-Bat</h1>
        <h1>{player.player.rating}</h1>
    </div>
    <div className="card-actions  flex justify-between">
        <div className='flex gap-2'>
            <p>Price:$</p>
            <span>{player.player.price}</span>
        </div>
      <button className="btn btn-primary">Choose Player</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Card;