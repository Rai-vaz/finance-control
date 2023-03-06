import '../css/ResumeItem.css'

const ResumeItem = ({title, value, icon, dClass}) => {

 function transformReal(coin){
  const real = coin.toLocaleString('pt-br',{style:'currency', currency:'BRL'})
  return real
 }

  return (
    <div className={`container-item ${dClass}`}>
         <div className='description'>
            <span>{title}</span>
            {icon}
         </div>   
        <p> {transformReal(value)}</p>
    </div>
  )
}

export default ResumeItem