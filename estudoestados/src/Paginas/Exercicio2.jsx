import { useState } from "react";
export default function Exercicio2()
{
  const[numero, setNumero] =useState(0);
  const[resultado, setResultado] =useState();

  function calcular ()
  {
    let celsius = ((Number(numero) - 32 ) * 5) /9;

    setResultado(" a temperatura é " + celsius);
  }

    return (
        <div>
            <h1>Exercicio 2 </h1>
    
      <div className="conteudo">
        
        <h3>temperatura</h3>

        
        <form>
          <p>
            Digite a temperatura em graus Fahrenheit <br />
            <input type="text" value={numero}
            onChange={(e) => setNumero (e.target.value)} />
          </p>
          <p>
            <input type="button" value="calcular"
            onClick={calcular} />
          </p>
          <b>
          
            <br></br>
            resultado {resultado}
          </b>
          <br></br>

          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}