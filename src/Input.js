import React,{useState} from 'react'

export default function Input() {
    const [UserName, setUserName]=useState('')
    const [Password, setPassword]=useState('')
    function submit(){
        console.log(UserName, Password)
        
    }
  return (
    <div>
      <p><input placeholder='Enter name' onChange={(e)=>{
        setUserName(e.target.value)
      }}/>
      <input placeholder='Enter password' onChange={(e)=>{
       setPassword(e.target.value)
      }}/>
      </p>
      <p><button onClick={submit}>Submit</button></p>
      
    </div>
  )
}
