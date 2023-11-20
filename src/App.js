//import React from 'react'
//import Header from './Components/Header'
//import Footer from './Components/Footer'
//import Body from './Components/Body'

//const App = () => {
 // return (
  //  <div>
  //    <Header/>
  //    <Footer/>
    //  <Body/>
    //</div>
 // )
//}

//export default App

import React from 'react'
import Navagation from './Navigation/Navigation'


import Home from './Components/Home'
import Contact from './Components/Contact'
import ToDoList from './Components/ToDoList'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
const App = () => {
 return (
   <div>
     <Router>
   <div>
  <Navagation/>
   </div>
   <Routes>
           <Route path='/' element={<Home/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/todolist' element={<ToDoList/>}/>
  </Routes>
   </Router>
   </div>
 )
}

export default App
