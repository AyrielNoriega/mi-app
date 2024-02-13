import { useState } from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const onIncrement = ( numero: number = 1 ):void => {
        setCounter( counter + numero );
    };

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <p>valor: { counter }</p>
            <button
                className="btn btn-outline-primary mt-2"
                onClick={ () => onIncrement() }
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary mt-2"
                onClick={ () => onIncrement(2) }
            >
                +2
            </button>
        </div>
    );
};
