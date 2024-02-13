import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {

    const { formulario, handleChange } = useForm<FormData>({
        email: 'asdf',
        nombre: 'asdf',
        edad: 23
    });

    const { edad, email, nombre} = formulario;

    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: ''
    // });

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target;
    //     setFormulario({
    //         ...formulario,
    //         [name]: value
    //     });
    // };

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                    className="form-control"
                    name="email"
                    onChange={ handleChange }
                    type="email"
                    value={ email }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input
                    className="form-control"
                    name="nombre"
                    onChange={ handleChange }
                    type="text"
                    value={ nombre }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input
                    className="form-control"
                    name="nombre"
                    onChange={ handleChange }
                    type="text"
                    value={ edad }
                />
            </div>

            <pre>{ JSON.stringify(formulario) }</pre>
        </form>
    );
};
