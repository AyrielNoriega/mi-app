import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';

function App() {

    return (
        <>
            <h1 className="read-the-docs">
                React + TypeScript
            </h1>
            <Counter />

            <Usuario />
            <hr />

            <h2>useEffect - useRef</h2>
            <hr />

            <TimerPadre />

            <h2>useReducer</h2>
            <hr />
            <ContadorRed />
        </>
    );
}

export default App;
