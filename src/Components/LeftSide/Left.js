import React,{useState} from 'react'
import './left.css'

const Left = ({fetchData}) => {
  const [fullName,setFullName] = useState('')
  const [age,setAge] = useState('')
  return (
    <div className="left-body">

    <div className="box">

      <div className="left-inputs">
        
        <div>
        <label>Full Name</label>
      <input type="text" value={fullName} required onChange={(e)=>{setFullName(e.target.value)}}/>
        </div>

        <div>
        <label>Age</label>
      <input type="number" value={age} required onChange={(e)=>{setAge(e.target.value)}} />
        </div>
     
      </div>

      <div className="left-buttons">

        <button onClick={()=>{
          fetchData(fullName,age)
        }} className="save-button btn" >Save</button>
        <button onClick={()=>{
          setFullName('')
          setAge('')
        }} className="clear-button btn" >Clear</button>

      </div>

      </div>



    </div>
  )
}

export default Left
