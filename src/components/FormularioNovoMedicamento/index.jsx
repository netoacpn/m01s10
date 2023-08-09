import { useContext, useState } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext"
import "./style.css"

function FormularioNovoMedicamento(){

  const {AdicionarMedicamento} = useContext(MedicamentosContext)

  const [nome, setNome] = useState("")
  const [laboratorio, setLaboratorio] = useState("")
  const [preco, setPreco] = useState((0).toFixed(2))

  const handleSubmit = (e) => {
    e.preventDefault()

    AdicionarMedicamento(nome, laboratorio, preco)
    setNome("")
    setLaboratorio("")
    setPreco((0).toFixed(2))
  }

  return(
    <>
      <div className="div-title">
        <h2 className="title">Formulário de cadastro de medicamentos</h2>
      </div>
      <div className="div-form">
        <form className="input-form" onSubmit={handleSubmit}>
          <input className="form-control" type="text" placeholder="Digite o nome do medicamento" value={nome} onChange={(e) => setNome(e.target.value)}/>              
          <input className="form-control" type="text" placeholder="Nome do Laboratório" value={laboratorio} onChange={(e) => setLaboratorio(e.target.value)}/>
          <input className="form-control" type="number" value={preco} onChange={(e) => setPreco(Number(e.target.value))}/>    
          <button className="btn btn-primary" type="submit">Cadastrar</button>
        </form>
      </div>

    </>
  )
}

export default FormularioNovoMedicamento