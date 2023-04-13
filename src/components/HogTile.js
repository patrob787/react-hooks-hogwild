import React, { useState } from 'react'

function HogTile({ name, image, weight, greased, specialty, highestMedal }) {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked);
    };

    return (
        <div onClick={handleClick} className="pigTile">
            <h3>{name}</h3>
            <img width={250} src={image} />

            { isClicked ? (
                    <div>
                        <p>Weight: {weight}</p>
                        <p>Specialty: {specialty}</p>
                        <p>{greased ? 'Greased' : 'Not Greased'}</p>
                        <p>Highest Medal Achieved: {highestMedal}</p>
                    </div>
                ) : null }

            
        </div>
    )
}

export default HogTile