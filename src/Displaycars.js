import React from 'react'

export default function Displaycars(props) {
  return (
    <div className='car-container'>
            {
                props.carDetails.map((Cars) => (
                    <div className='carsDetails' >
                        <p>Name:{Cars.name}</p>
                        <p>Price:{Cars.price}</p>
                        <p>description:{Cars.description}</p>
                        <img src={Cars.image} alt={Cars.name}/>
                    </div>
                ))
            }
        </div>
  )
}
