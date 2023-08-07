import { useState } from 'react'
import './App.css'

import { MedicamentosContextProvider } from './context/MedicamentosContext'

import Header from './components/Header/index.jsx'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'

function App() {

  return (
    <MedicamentosContextProvider>
      <Header></Header>
      <FormularioNovoMedicamento />
    </MedicamentosContextProvider>
  )
}

export default App
