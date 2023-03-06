import { useState, useEffect} from 'react'
import './css/App.css'
import Header from './components/Header'
import Resume from './components/Resume'
import ResumeItem from './components/ResumeItem'
import Form from './components/Form'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'
import Table from './components/Table'

function App() {
  
  const [data, setData] = useState({})
  const [total, setTotal] = useState({
    enterTotal: 0,
    outTotal: 0,
    balance: 0
  })

  useEffect(() => {
    if (data.flow != undefined) {
      if (data.flow === 'Entrada') {
        setTotal({...total, enterTotal: total.enterTotal + Number(data.value)}) 
      }else{
        setTotal({...total, outTotal: total.outTotal + Number(data.value)})
      }
    } 
  }, [data])

  useEffect(() => {
    setTotal({...total, balance: total.enterTotal - total.outTotal})
  },[total.enterTotal, total.outTotal])

 
  return (
    <div className="App">
      <Header/>
      <Resume>
        <ResumeItem title='Entrada' value={ total.enterTotal } icon={<FaRegArrowAltCircleDown/>}/>
        <ResumeItem title='Saída' value={ total.outTotal } icon={<FaRegArrowAltCircleUp/>}/>
        <ResumeItem dClass={total.balance <= 0 ? 'red-balance' : 'green-balance'} title='Saldo' value={ total.balance} icon={<FaDollarSign/>}/>
      </Resume>
      <Form sendData={setData}/>
      <Table listItem={data}/>
    </div>
  )
}

export default App
