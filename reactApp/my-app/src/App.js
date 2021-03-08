import React, { useState } from 'react';
const App = (props) => {
  // const {name, price} = props;
  //初期値
  // const initState = {
  //   name: '',
  //   price: 1000
  // } 




  //state
  const [state, setState] = useState(props);
  // const [nameItem, setName] = useState(name);
  // const [prices, setPrice] = useState(price);

  const reset = () => {
    // setPrice(price);
    // setName(name);
    setState(props);
  }

  return (
    <>
      <p>現在の{state.name}は{state.price}円です。</p>
      <button onClick={() => setState({...state, price: state.price + 1})} >+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})} >-1</button>
      <button onClick={reset} >Reset</button>
      <input type='text' value={state.name} onChange={(e) => setState({...state, name: e.target.value})}/>
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
} 



export default App
