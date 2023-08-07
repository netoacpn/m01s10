import { useEffect, useState } from "react"

function FormularioNovoMedicamento(){

  const [nome, setNome] = useState("")
  const [laboratorio, setLaboratorio] = useState("")
  const [preco, setPreco] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    //Chamda da função de cadastro
  }

  return(
    <>
      <h2>Formulário de cadastro de medicamentos</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do Medicamento</label>
        <input type="text" placeholder="Digite o nome do medicamento" value={nome} onChange={(e) => setNome(e.target.value)}/>      
        <label>Nome do Laboratório</label>        
        <input type="text" placeholder="Nome do Laboratório" value={laboratorio} onChange={(e) => setLaboratorio(e.target.value)}/>
        <label>Preço do Medicamento</label>
        <input type="number" placeholder="Preço do produto" value={preco} onChange={(e) => setPreco(e.target.value)}/>    
        <button type="submit">Adicionar Novo Medicamento</button>
      </form>
    </>
  )
}

export default FormularioNovoMedicamento