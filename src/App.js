import React from 'react'
import Filtering from './components/Filtering'
import Header from './components/Header';
import Countries from './components/Countries';

const App = () => {
  return (
    <div>
      <Header/>
      <Filtering/>
      <Countries/>
    </div>
  )
}

export default App
