import { useState } from 'react'
import './App.css'

import Header from './components/Header/index.jsx'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'

function App() {

  return (
    <>
      <Header></Header>
      <FormularioNovoMedicamento />
    </>
  )
}

export default App
