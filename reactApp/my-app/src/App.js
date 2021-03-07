import React, { useState } from 'react';
const App = () => {
  const [count, setCount] = useState(0);

  const handliPulsClick = () => {
    setCount(count + 1);
  }

  const handliMinusClick = () => {
    setCount(count - 1);
  }

  const handliPulsClick2  = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  const handliMinusClick2  = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  const resetClick = () => {
    setCount((prevCount) => {
      prevCount = 0;
      return prevCount;
    });
  }

  const twoClick = () => {
    setCount(count * 2)
  }

  const division = () => {
    setCount((prevCount) => {
      if(prevCount % 3 === 0){
        return prevCount / 3;
      }else{
        return prevCount;
      }
    })
  }

  return (
    <>
      <div>
        Count:{count}
      </div>
      <div>
        <button onClick={handliPulsClick}>+1</button>
        <button onClick={handliMinusClick}>-1</button>
      </div>
      <div>
        <button onClick={handliPulsClick2}>+1</button>
        <button onClick={handliMinusClick2}>-1</button>
      </div>
      <div>
        <button onClick={resetClick}>Reset</button>
        <button onClick={twoClick}>*2</button>
        <button onClick={division}>3の倍数の時３で割る</button>
      </div>
    </>
  );
}

export default App
