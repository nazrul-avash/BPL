import React from 'react';

const ButtonBar = ({selectedType,onToggle}) => {
    return (
        <div className='max-w-[1200px] mx-auto flex justify-between mb-5 '>
            <h1>Available Players</h1>
            <div className='flex'>
                <button className='btn'>Available</button>
                <button className='btn'>Selected</button>
            </div>
        </div>
    );
};

export default ButtonBar;