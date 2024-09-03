
import { useEffect, useState } from 'react';
import './App.css';
import BasicTable from './BasicTable';

function App() {
  const [users, setData] = useState([]);
  const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users", {
      method:"GET"
    }).then((response)=>{
      if(!response.ok){
        throw Error("network Error")
      }else{
        return response.json();
      }
    }).then((data) =>{
      console.log(data)
      setData(data)
      setLoading(false)
    }).catch((err)=>{
      setError(err.message);
      setLoading(false)
    })
   },[])
  return (
    <div>
      <header className="App-header">
       <h1> Fetch Users From API</h1>
      </header>
      {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <BasicTable data = {users} />
            )}
      
    </div>
  );
}

export default App;
