import { useState } from "react";
export default function Exercicio5()
 {
  const[lado, setLado] =useState();
  const[resultado, setResultado] =useState();

  function calcular ()
  {
    let quadrado = (Number(lado))*lado;
    setResultado( quadrado);
  }

  
  return (
    <div>
      <h1>Exercicio 5 </h1>

      <div className="conteudo">

        <h3>Quadrado</h3>
        <form>

          <p>
            Digite o valor do lado do quadrado:<br />
            <input type="text" value={lado}
            onChange={(e) => setLado (e.target.value)}/>
          </p>
          
          <p>
            <input type="button" value="calcular" 
            onClick={calcular}/>
          </p>

        <b>
          a area do quadrado é {resultado}
        </b>
        <br></br>

          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}