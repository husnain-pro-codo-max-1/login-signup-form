import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Wellcomeform from './components/Wellcomeform'
import { Routes , Route  } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <>

<Routes>

<Route path='/' element= { <Wellcomeform/> } />
<Route path='/signup' element= { <Signup/> } />
<Route path='/login' element= { <Login/> } />
<Route path='/home' element= { <Home/> } />

</Routes>

    </>
  )
}

export default App
