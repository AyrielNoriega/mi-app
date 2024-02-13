import { ChangeEvent, useState } from 'react';


 

// export const useForm = <T extends Object> (initialState: T) => {
export function useForm<T> (initialState: T) {

    const [formulario, setFormulario] = useState(initialState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    return {
        formulario,
        handleChange,
        ...formulario
    };
}
