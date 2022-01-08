import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [foodName, setFoodName] = useState('');
  const [days, setDays] = useState(0);

  const [foodList, setFoodList] = useState([]);

  useEffect(()=> {
    Axios.get('http://localhost:3001/read').then((response) =>{
      setFoodList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {foodName: foodName, days: days,});
  }

  return (
    <div className="App">
      <h1>CRUD with Mern</h1>
      <label>Food Name:</label>
      <input type="text" onChange={(e) => {setFoodName(e.target.value)}} />
      <label>Days Since You Ate It:</label>
      <input type="number" onChange={(e) => {setDays(e.target.value)}} />
      <button onClick={addToList}>Add To List</button>
      <hr />
      <h1>Food List</h1>
      {foodList.map((val, key) => {
        return <div key={key}><h1>{val.foodName}</h1><h1>{val.daysSinceIAte}</h1></div>
      })}
    </div>
  );
}

export default App;
