//import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
   </Router>
  )
}

export default App