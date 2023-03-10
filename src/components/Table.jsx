import { useEffect, useState } from 'react'
import {FaTrashAlt, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp} from 'react-icons/fa'
import '../css/Table.css'



const Table = ({listItem, setTotal, total}) => {

    const [dataList, setDataList] = useState([])
   
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
     
      const newArray =  array.filter(function(obj) {
        return obj.description !== item.description
      }) 

      setTotal(item.flow === 'Entrada' ? {...total, enterTotal: total.enterTotal - Number(item.value), balance: total.balance - Number(item.value)} : {...total, outTotal: total.outTotal - Number(item.value), balance: total.balance + Number(item.value)} )

      setDataList(newArray)
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