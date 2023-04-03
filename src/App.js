import React from 'react';
import {categories} from './data/categories';
import './App.css';

function App() {

  
  

  return (
    <div className="App">
    <ul>
      {
          categories.map((category) => (
            <li kew={category.id}>{category.name}</li>
          ))
        }
      
    </ul>

  </div>
  );
}

export default App;
