import React, {useState} from 'react'

const Counts = (props) => {

  const [number, setNumber] = useState(props.number);


  const Increment = () => {
    setNumber(number + 1);
  };

  const Decrement = () => {
    setNumber((number - 1) < 0 ? 0 : number - 1);
  };

  return (
        <>
            <h1>Function Component, State-Based Counting: {number}</h1>
            <span className='CounterIcon' onClick={Increment}>+</span>
            <span className='CounterIcon' onClick={Decrement}>-</span>
        </>
  )
}

export default Counts