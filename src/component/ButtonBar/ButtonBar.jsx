import React from 'react';

const ButtonBar = ({selectedType,onToggle}) => {
     console.log(selectedType);
    return (
        <div className='max-w-[1200px] mx-auto flex justify-between mb-5 '>
            <h1>Available Players</h1>
            <div className='flex'>
               
                <button className={`btn ${selectedType ==="available"?"bg-blue-300":"bg-red-500"}`} onClick={()=>onToggle("available")}>Available</button>
                <button className={`btn ${selectedType ==="selected"?"bg-blue-300":"bg-white"}`} onClick={()=>onToggle("selected")}>Selected</button>
            </div>
        </div>
    );
};

export default ButtonBar;