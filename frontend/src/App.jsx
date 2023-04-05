import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowseRouter, Link, Route, Routes} from 'react-router-dom'

// import { CreatePost, Home } from './pages'

import { CreatePost, Home } from './pages'

function App() {
  

  return (
    <BrowseRouter>

<header>

<Link to="/">

</Link>

<Link to="/CreatePost">

</Link>

</header>

<main>

<Routes>

<Route path="/" element={<Home />} />



</Routes>

</main>

</BrowseRouter >
  )
}

export default App
