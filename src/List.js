
import React, { useState } from 'react'

export default function List() {
    const [employees, setEmployees] = useState([
        {
            name: "Shreya",
            age: 21,
            id: 11,
            gender: "female"
        },

        {
            name: "Pravalika",
            age: 21,
            id: 22,
            gender: "female"
        },

        {
            name: "Karthik",
            age: 20,
            id: 33,
            gender: "male"
        },
    ])
    return (
        <div className='employee-container'>
            {
                employees.map((emp) => (
                    <div className='employee' key={emp.id}>
                        <p>Name:{emp.name}</p>
                        <p>Age:{emp.age}</p>
                        <p>Gender:{emp.gender}</p>
                        <p>Id:{emp.id}</p>
                    </div>
                ))
            }
        </div>
    )
}
