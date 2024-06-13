import React, { useState } from 'react'
import Displaycars from './Displaycars'

export default function Car() {
    const [Cars, setCars] = useState([
        {
            name: "RangeRover",
            price: 210000000,
            description: "One of the most expensive car" ,
            image: "https://domcar.com.cy/upload/live/1673785160_172.jpeg"
        },

        {
            name: "Lambargine",
            price: 2100000000,
            description: "Most expensive and stylish car",
            image: "https://domcar.com.cy/upload/live/1673785160_329.jpeg"
            
        },

        {
            name: "Toyota Corolla",
            price: 190000000,
            description: "It means that the car has the optimal balance of price. ",
            image: "https://domcar.com.cy/upload/live/1673785160_172.jpeg"
        },
        {
            name: "Ford F-Series",
            price: 8900000,
            description: "In 2021, 851 thousand units of the F-Series were sold.",
            image: "https://domcar.com.cy/upload/live/1673785160_329.jpeg"
        },
    ])
    return (
        <div>
            <Displaycars carDetails={Cars}/>
        </div>
    )
}
