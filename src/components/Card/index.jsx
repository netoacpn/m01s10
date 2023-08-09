import { useContext } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext"
import './style.css'

function CardMedicamento({medicamento}){

  const {FavoritarMedicamento} = useContext(MedicamentosContext)

  return(
    <>
      {/* <div>
        <button onClick={() => FavoritarMedicamento(medicamento.id)}>Favorito: {medicamento.favorito.toString()}</button>        
        <img width={150} src="https://wwyhfaiwse.map.azionedge.net/Custom/Content/Themes/Shared/Imagens/tvg_m.jpg" alt="Foto do Medicamento" />
        <h4>Medicamento: {medicamento.nome}</h4>        
        <h4>Laboratório: {medicamento.laboratorio}</h4>        
        <h4>Preço: R$ {medicamento.preco}</h4>
      </div> */}
      <div className="card">
        <div>
          <button className="btn btn-card" type="submit" onClick={() => FavoritarMedicamento(medicamento.id)}><i className="bi bi-bookmark-heart-fill" ></i></button>
        </div>
        <img src="https://wwyhfaiwse.map.azionedge.net/Custom/Content/Themes/Shared/Imagens/tvg_m.jpg" alt="Foto caixa do remédio" className="card-img-top"/>
        <div className="card-body">
          <h4 className="card-title">Medicamento: {medicamento.nome}</h4>
          <p className="card-text">Laboratório: {medicamento.laboratorio}</p>
          <h5 className="card-price">R$ {medicamento.preco.toFixed(2)}</h5>          
        </div>
      </div>
    </>
  )
}

export default CardMedicamento