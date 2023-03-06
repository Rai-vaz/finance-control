import {useState} from 'react'
import '../css/Form.css';

function Form({sendData}) {
  const radios = document.getElementsByClassName('input-radio')

  const [valuesForm, setValuesForm] = useState(
    {
      description: '',
      value: '',
      flow: '',
    }
  )


  function createObject(event, key) {  
    setValuesForm({...valuesForm, [key]: event.target.value})
    
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendData(valuesForm)
    setValuesForm({})
    for (let index = 0; index < radios.length; index++) {
      radios[index].checked = false
    }
  }

  return (
    <div className='container-form'>
      <form onSubmit={handleSubmit}>
        <div className='box-inputs'>
          <label htmlFor='description'>Descrição</label>
          <input
            type='text'
            id='description'
            required
            value={valuesForm.description || ''}
            onChange={(e) => createObject(e, 'description')}
          />
        </div>
        <div className='box-inputs'>
          <label htmlFor="value">Valor</label>
          <input 
            type='number' 
            id='value'
            value={valuesForm.value || ''}
            required
            onChange={(e) => createObject(e, 'value')}
          />
        </div>
        <div className='container-radio'>
          <input 
            className='input-radio'
            type='radio' 
            id='inflow' 
            name='flow' 
            value='Entrada'
            required
            onChange={(e) => createObject(e, 'flow')}
          />
          <label htmlFor="inflow">Entrada</label>
          <input 
            className='input-radio'
            type='radio' 
            id='outflow' 
            name='flow' 
            value='Saída'
            required
            onChange={(e) => createObject(e, 'flow')}
          />
          <label htmlFor='outflow'>Saída</label>
        </div>
        <div className='container-button'>
          <input type='submit' value='ADICIONAR'/>
        </div>
      </form>
    </div>
  );
};

export default Form; 