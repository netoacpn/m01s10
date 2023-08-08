import { useContext, useEffect, useState } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext"

function FormularioNovoMedicamento(){

  const {AdicionarMedicamento} = useContext(MedicamentosContext)

  const [nome, setNome] = useState("")
  const [laboratorio, setLaboratorio] = useState("")
  const [preco, setPreco] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    AdicionarMedicamento(nome, laboratorio, preco)
  }

  return(
    <>
      <h2>Formulário de cadastro de medicamentos</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o nome do medicamento" value={nome} onChange={(e) => setNome(e.target.value)}/>              
        <input type="text" placeholder="Nome do Laboratório" value={laboratorio} onChange={(e) => setLaboratorio(e.target.value)}/>
        <input type="number" placeholder="Preço do produto" value={preco} onChange={(e) => setPreco(Number(e.target.value))}/>    
        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

export default FormularioNovoMedicamento