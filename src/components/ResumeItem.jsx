import '../css/ResumeItem.css'

const ResumeItem = ({title, value, icon}) => {
  return (
    <div className='container-item'>
         <div className='description'>
            <span>{title}</span>
            {icon}
         </div>   
        <p>R$ {value}</p>
    </div>
  )
}

export default ResumeItem