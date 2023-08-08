import { useContext, useState } from 'react'
import './App.css'

import { MedicamentosContext } from './context/MedicamentosContext'

import Header from './components/Header/index.jsx'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'
import CardMedicamento from './components/Card'

function App() {

  const {listaMedicamentos} = useContext(MedicamentosContext)

  return (
    <>
      <Header></Header>
      <FormularioNovoMedicamento />
        {listaMedicamentos.map(medicamento => (
          <CardMedicamento key={medicamento.id} medicamento={medicamento} />
      ))}
    </>
  )
}

export default App
