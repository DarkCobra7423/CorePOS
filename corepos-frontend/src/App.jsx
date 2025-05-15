import { useState } from 'react'
import './App.css'

import Router from './components/Router'
import Context from './components/Context'

function App() {

  const userInfo = {
    name: "Carlos",
    email: "dark@gmail.com",
    loggedIn: true,
    cartItem: 4
  }

  return (
    <>
      <Context.Provider value={userInfo}>
        <Router />
      </Context.Provider>
    </>
  )
}

export default App
