import { useState } from 'react';

interface User {
    uid: string;
    name: string;
}

// const tempUser:User = {
//     uid: 'ABC1',
//     name: 'name temp'
// };

export const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'asdf1',
            name: 'Ayriel'
        });
    };

    return (
        <div className="mt-5">
            <h4>Usuario</h4>
            <button onClick={ login } className="btn btn-outline-primary">
                Login
            </button>
            {
                (!user)
                    ? <pre>No hay usuario</pre>
                    : <pre>{ JSON.stringify( user ) }</pre>
            }
        </div>
    );
};
