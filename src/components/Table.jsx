import { useEffect, useState } from 'react'
import {FaTrashAlt, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp} from 'react-icons/fa'
import '../css/Table.css'



const Table = ({listItem}) => {

    const [dataList, setDataList] = useState([])
    console.log(dataList.length)

   
    useEffect(() => {
        setDataList([...dataList, listItem])
    },[listItem])

    function transformReal(coin){
      if (coin != undefined) {
        const toNumber = Number(coin) 
        const real = toNumber.toLocaleString('pt-br',{style:'currency', currency:'BRL'})
        return real
      }
    }

    function deleteItem(array, item){
      const indexItem = array.indexOf(item)
      console.log('indice apagado' + indexItem)
      setDataList(() => array.splice(indexItem, 1))
    }

   

  return (
    <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
            {
              dataList.map((obj) => (
                  <tr key={Math.random()}>
                      <td>{obj.description}</td>
                      <td>{transformReal(obj.value)}</td>
                      <td>{obj.flow}<span>{obj.flow === 'Entrada' && <FaRegArrowAltCircleUp className='svg-entrada'/> }{obj.flow === 'Saída' && <FaRegArrowAltCircleDown className='svg-saída'/>}{obj.flow != undefined && <FaTrashAlt className='delete-icon' onClick={() => deleteItem(dataList, obj)}/>}</span></td>
                  </tr>
                )
              )
            }
        </tbody>
      </table>
  )
}

export default Table