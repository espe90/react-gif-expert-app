import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { Hijo } from './Hijo';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        (num) => {
            setValor(c=> c+num);
        },
        [setValor]
    )

    useEffect(() => {
        
    }, [incrementar])

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}