import './App.css';
import React from 'react';
import Header from './Components/Header/Header'
import Left from './Components/LeftSide/Left';
import Right from './Components/RightSide/Right';

function App() {

  const [data,setData] = React.useState([])
  const [id,setId] = React.useState(0)

  const fetchData = (fullName,age) =>{
    setId(prev=>prev+1)
      setData([...data,{fullName,age,id}])
  }
 const clearSingleEmploye = (id)=>{
   const newData = data.filter(emp=>emp.id !== id)
   setData(newData)
 }
 const clearAll = ()=>{
   setData([]);
 }
  
  return (
    <>
    <Header />
    <div className="App">

      <Left fetchData={fetchData}/>
      <Right data={data} clearOne={clearSingleEmploye} clearAll={clearAll}/>
    </div>
    </>
  );
}

export default App;
