import {useState} from 'react'
import './css/App.css'
import Header from './components/Header'
import Resume from './components/Resume'
import ResumeItem from './components/ResumeItem'
import Form from './components/Form'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'

function App() {
  
  const [data, setData] = useState({})

  return (
    <div className="App">
      <Header/>
      <Resume>
        <ResumeItem title='Entrada' value={data.flow === 'inflow' ? data.value : ''} icon={<FaRegArrowAltCircleDown/>}/>
        <ResumeItem title='Saída' value={data.flow === 'outflow' ? data.value : ''} icon={<FaRegArrowAltCircleUp/>}/>
        <ResumeItem title='Saldo' value={1000} icon={<FaDollarSign/>}/>
      </Resume>
      <Form sendData={setData}/>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>xxx</td>
            <td>xxxx</td>
            <td>xxxxx</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
