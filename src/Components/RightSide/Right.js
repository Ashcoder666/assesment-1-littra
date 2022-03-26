import React from 'react'
import './right.css'

const Right = ({data,clearOne,clearAll}) => {
  return (
    <div className="right-body">

      <div className="box2">
        <h1 style={{textAlign: 'center', fontFamily:'Helvetica'}} >Users</h1>

       <div>
       <div className="data-header" >
         <span>Full Name</span>
         <span>Age</span>
       </div>
       {data.map(item=>(
         <div className="data-body" key={item.fullName} >
           <span  >{item.fullName}</span>
           <span  >{item.age}</span>
           <span><button onClick={()=>{clearOne(item.fullName)}} >CLEAR</button></span>
         </div> 
       ))}
       </div>
            
       <div className="clear-all-div">
          <button onClick={()=>clearAll()} >CLEAR ALL</button>
       </div>

      </div>
      
    </div>
  )
}

export default Right
