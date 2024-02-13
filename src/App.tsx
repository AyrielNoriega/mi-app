import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';

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

            <h2>customHooks</h2>
            <hr />
            <Formulario />
        </>
    );
}

export default App;
