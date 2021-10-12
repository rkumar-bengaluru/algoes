import React, { useState } from 'react';

const App = (props) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => ++prev);
    }
    const decrement = () => {
        setCounter((prev) => --prev);
    }

    return (
        <div>
            <h1>{props.message}</h1>
            <h2 data-testid="counter">{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default App;