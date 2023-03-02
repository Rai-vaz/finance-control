import '../css/Form.css';

function Form() {
  return (
    <div className='container-form'>
      <div className='box-inputs'>
        <label htmlFor='descrição'>Descrição</label>
        <input type='text' id='descrição'/>
      </div>
      <div className='box-inputs'>
        <label htmlFor="valor">Valor</label>
        <input type='number' id='valor'/>
      </div>
      <div className='container-radio'>
        <input type='radio' id='entrada' name='fluxo'/>
        <label htmlFor="entrada">Entrada</label>
        <input type='radio' id='saída' name='fluxo'/>
        <label htmlFor='saída'>Saída</label>
      </div>
      <div className='container-button'>
        <input type='submit' value='ADICIONAR'/>
      </div>
    </div>
  );
};

export default Form;