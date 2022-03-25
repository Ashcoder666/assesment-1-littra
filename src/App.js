import './App.css';
import React from 'react';
import Header from './Components/Header/Header'
import Left from './Components/LeftSide/Left';
import Right from './Components/RightSide/Right';

function App() {

  const [data,setData] = React.useState([])

  const fetchData = (fullName,age) =>{
      setData([...data,{fullName,age}])
  }
  console.log(data)
  
  return (
    <>
    <Header />
    <div className="App">

      <Left fetchData={fetchData}/>
      <Right data={data}/>
    </div>
    </>
  );
}

export default App;
