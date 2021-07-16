import React, {useState} from 'react';

const EjemploDeEstado = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        setNumero(numero + 1);
    }

    return ( 
        <div style={{backgroundColor:'yellowgreen'}}>
            <h4>Componente 4. Ejemplo con definición de estado</h4>

            <h3>Muestra incremento de valor... {numero} </h3> 

            <button onClick={aumentar} >Aumentar en 1</button>
        </div>
     );
}
 
export default EjemploDeEstado;