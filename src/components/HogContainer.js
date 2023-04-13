import React from 'react'
import HogTile from './HogTile';


function HogContainer({ hogsData }) {
  
  const renderHogTiles = hogsData.map((hog) => {
    return (
        <HogTile
            key={hog.name} 
            name={hog.name} 
            image={hog.image} 
            weight={hog.weight} 
            greased={hog.greased} 
            specialty={hog.specialty} 
            highestMedal={hog['highest medal achieved']} 
        />
    );
  });

  return (
    <div className='porkers'>
        {renderHogTiles}
    </div>
  )
}

export default HogContainer