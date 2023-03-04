import {useState} from 'react'
import '../css/Form.css';

function Form({sendData}) {

  const [valuesForm, setValuesForm] = useState(
    {
      description: '',
      value: '',
      flow: ''
    }
  )


  function createObject(event, key) {
    setValuesForm({...valuesForm, [key]: event.target.value})
    
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendData(valuesForm)
    setValuesForm({})
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
            type='radio' 
            id='inflow' 
            name='flow' 
            value='inflow'
            onChange={(e) => createObject(e, 'flow')}
          />
          <label htmlFor="inflow">Entrada</label>
          <input 
            type='radio' 
            id='outflow' 
            name='flow' 
            value='outflow'
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