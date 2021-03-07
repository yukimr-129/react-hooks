import React, { useState } from 'react';
const App = (props) => {
  const {name, price} = props;
  //初期値
  // const initState = {
  //   name: '',
  //   price: 1000
  // } 




  //state
  const [nameItem, setName] = useState(name);
  const [prices, setPrice] = useState(price);

  const reset = () => {
    setPrice(price);
    setName(name);
  }

  return (
    <>
      <p>現在の{nameItem}は{prices}円です。</p>
      <button onClick={() => setPrice(prices + 1)} >+1</button>
      <button onClick={() => setPrice(prices - 1)} >-1</button>
      <button onClick={reset} >Reset</button>
      <input type='text' value={nameItem} onChange={(e) => setName(e.target.value)}/>
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
} 



export default App
