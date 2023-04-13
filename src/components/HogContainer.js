import React, { useState } from 'react'
import HogTile from './HogTile';
import Filter from './Filter';


function HogContainer({ hogsData }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All")

  function onOptionSelect(option) {
    setSelectedCategory(option);
  }

  const greasedHogs = hogsData.filter((hog) => {
    if (selectedCategory === "All") {
        return true;
    } else if (selectedCategory === "Greased") {
        return hog.greased;
    } else {
        return !hog.greased;
    }
  })
    
  const renderHogTiles = greasedHogs.map((hog) => {
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
    <div>
        <Filter onOptionSelect={onOptionSelect} />
        <div className='porkers'>{renderHogTiles}</div>
    </div>
  )
}

export default HogContainer