

import { useState } from 'react';

import Header from './content/header.js';

import './App.css';
const goods = [
  {
    name: "Adidas",
    price: "2000"
  },
  {
    name: "Adidas",
    price: "2000"
  },
  {
    name: "Adidas",
    price: "2000"
  },
  {
    name: "Adidas",
    price: "2000"
  }
]
function App() {
  const [inputValueSearch, setValue] = useState('');
  console.log(inputValueSearch);
  return (
      <div className="App">
        <Header
            onChangeValueUser={setValue}
            inputValueSearch={inputValueSearch}
        />

        <main className="main">
          {
            goods.map((item) =>(
                <div className="shop-item">
                  <p className="shop-item-title">{item.name}</p>
                  <p className="shop-item-price">{item.price}</p>
                </div>
            ))
          }
        </main>
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
  );
}

export default App;