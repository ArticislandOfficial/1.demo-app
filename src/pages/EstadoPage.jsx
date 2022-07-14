import React, {useState} from 'react'

const EstadoPage = () => {
    ///variable de estado 
    const [contador, setCounter] = useState(0);
    const aumnetarContador = () =>{
        setCounter(contador+1);
    };
    const decrementarContador = ()=>{
        setCounter(contador-1);
    }


  return (
    <>
      <header>
        <h1>Pagina de contador</h1>
      </header>
      <main>
        <article>
          <h2>Contador:{contador}</h2>
          <button type="button" onClick={aumnetarContador}>+</button>
          <button type="button" onClick={decrementarContador}>-</button>
|||        </article>
      </main>
    </>
  );
}

export default EstadoPage