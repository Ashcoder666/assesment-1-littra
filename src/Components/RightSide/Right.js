import React from 'react'
import './right.css'

const Right = ({data}) => {
  return (
    <div className="right-body">

      <div className="box">
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
           <span><button>CLEAR</button></span>
         </div> 
       ))}
       </div>
            
       <div className="clear-all-div">
          <button>CLEAR ALL</button>
       </div>

      </div>
      
    </div>
  )
}

export default Right
