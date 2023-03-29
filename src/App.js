import React from 'react';
import category from './data/categories.json';
import './App.css';

function App() {
  return (
    <div className="App">
      {console.log(category)}
    <ul>
      {
         category.map((category) => (
          <li key={category.category.id}>{category.category.name}</li>
         ))

  
      }
      
    </ul>

  </div>
  );
}

export default App;
