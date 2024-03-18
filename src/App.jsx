import React from 'react'
import Banner from './components/Banner'
import cartContext from "./context/cartContext"
import Header from './components/Header';
import Location from './components/Location';

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Location />
    </>
  )
}

export default App
