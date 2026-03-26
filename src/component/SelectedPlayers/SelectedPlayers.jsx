import React from 'react';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers}) => {
   function handleDelete(player){
        const filteredPlayers = selectedPlayers.filter((el) => player.name!==el.name);
        setSelectedPlayers(filteredPlayers);
   }
   
    return (
        <div>
            {
            selectedPlayers.map((player)=>{
              
                 return (<div className="card w-96 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">{player.name}</h2>
                        <p>{player.price}</p>
                        <div className="justify-end card-actions">
                        <button className="btn btn-primary" onClick={()=>handleDelete(player)}>Delete</button>
                        </div>
                    </div>
                    </div>)
            })
           }
        </div>
    );
};

export default SelectedPlayers;