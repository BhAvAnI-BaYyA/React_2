import {useState} from 'react'
// import Student from './Student'
// import List from './List'
// import './List.css'
// import Input from './Input'
// import Car from './Car'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from'./components/Navigation'

function App(){
  const [studentName, setStudentName] = useState('Vishu')
  const [age, setAge] = useState(23)
  return(
    <div>
      {/* <p>Hello World!</p>
      <p>Name is:{studentName} and his age is:{age}</p>
       <Student name="Sai" rollno="21"/>
       <Student name="Bhavani" rollno="19"/>
       <Student name="Kavya" rollno="18"/>  */}
       {/* <Input/>
       <List/> 
       <Car/>*/
       
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>

       }
       
    </div>
  )
}
export default App