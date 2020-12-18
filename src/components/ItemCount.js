import React, { useState } from 'react';

function ItemCount () {

    const [counter, setCounter] = useState(0);

    return (
        <div>
        <p>{counter}</p>  
        <button onClick={() => setCounter(counter + 1)}> Añadir al carrito </button>
        <button onClick={() => setCounter(counter - 1)}> Eliminar del carrito </button>
        </div>
    );
}

export default ItemCount


