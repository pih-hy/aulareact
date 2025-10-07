import { useState } from "react";
export default function Exercicio4() 
{

  const [base, setBase] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState();


  function calcular() {
    let triangulo = (Number(altura))
    setResultado (triangulo);
  }
  return (
    <div>
      <h1>Exercicio 4 </h1>

      <div className="conteudo">

        <h3>Medidas</h3>


        <form>

          <p>
            Digite o valor da base:<br />
            <input type="text" />
          </p>

          <p>
            Digite o valor da altura:<br />
            <input type="text" />
          </p>
          <p>
            <input type="button" value="Exercicio 4" />
          </p>
          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}