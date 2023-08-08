import { useState } from 'react'
import './App.css'

import { MedicamentosContextProvider } from './context/MedicamentosContext'

import Header from './components/Header/index.jsx'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'

function App() {

  return (
    <>
      <Header></Header>
      <MedicamentosContextProvider>
        <FormularioNovoMedicamento />
      </MedicamentosContextProvider>
    </>
  )
}

export default App
