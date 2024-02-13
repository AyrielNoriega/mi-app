import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';

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
        </>
    );
}

export default App;
