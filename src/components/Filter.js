import React from 'react'

function Filter({ onOptionSelect }) {
  
  function handleSelect(e) {
    onOptionSelect(e.target.value)
  }  

  return (
    <div>
        <select onChange={handleSelect} >
            <option value="All">All</option>
            <option value="Greased">Greased</option>
            <option value="Not Greased">Not Greased</option>
        </select>
    </div>
  )
}

export default Filter