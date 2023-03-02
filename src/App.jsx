import './css/App.css'
import Header from './components/Header'
import Resume from './components/Resume'
import ResumeItem from './components/ResumeItem'
import Form from './components/Form'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'

function App() {

  return (
    <div className="App">
      <Header/>
      <Resume>
        <ResumeItem title='Entrada' value={5902} icon={<FaRegArrowAltCircleDown/>}/>
        <ResumeItem title='Saída' value={2500} icon={<FaRegArrowAltCircleUp/>}/>
        <ResumeItem title='Saldo' value={1000} icon={<FaDollarSign/>}/>
      </Resume>
      <Form/>
    </div>
  )
}

export default App
