import { useContext } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext"

function CardMedicamento({medicamento}){

  const {FavoritarMedicamento} = useContext(MedicamentosContext)

  return(
    <>
      <div>
        <button onClick={() => FavoritarMedicamento(medicamento.id)}>Favorito: {medicamento.favorito.toString()}</button>        
        <img width={150} src="https://wwyhfaiwse.map.azionedge.net/Custom/Content/Themes/Shared/Imagens/tvg_m.jpg" alt="Foto do Medicamento" />
        <h4>Medicamento: {medicamento.nome}</h4>        
        <h4>Laboratório: {medicamento.laboratorio}</h4>        
        <h4>Preço: R$ {medicamento.preco}</h4>
      </div>
    </>
  )
}

export default CardMedicamento