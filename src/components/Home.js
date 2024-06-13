import React, {useState} from 'react'


export default function Home() {
  const [userName, setUserName]= useState('')
  const [password, setPassword]= useState('')
  function submit(){
    console.log(userName, password)
    setUserName('')
    setPassword('')
  }
  return (
    <div>
       <p><input value={userName} placeholder='Enter name' onChange={(e)=>{
        setUserName(e.target.value)
      }}/></p>
      <p>
      <input value={password} placeholder='Enter password' onChange={(e)=>{
        setPassword(e.target.value)
      }}/></p>
      <p><button onClick={submit}>Submit</button></p>
    </div>
  )
}
