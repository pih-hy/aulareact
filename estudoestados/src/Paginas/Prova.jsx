import { useState } from "react";
export default function Prova() 
{

  const [base, setBase] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState();
 

  function calcular() {


      let area,quant ,valor;
      area = (Number(base) * altura)
      quant =area / 2;
      valor = quant*10;
      setResultado( 
  
          <div>
              Area do quadrado = {area}<br></br>
              Quantidade de tinta = {quant} <br></br>
              Valor a pagar = {valor}
          </div>
      );
  
  }
  return (
    <div>
      <h1>Prova</h1>

      <div className="conteudo">

        <h3>area</h3>


        <form>

          <p>
            Digite o valor da base:<br />
            <input type="text" value={base}
            onChange={(e) => setBase (e.target.value)}/>
          </p>

          <p>
            Digite o valor da altura:<br />
            <input type="text" value={altura}
            onChange={(e) => setAltura (e.target.value)} />
          </p>
          <p>
            <input type="button" value="Exercicio 4" 
            onClick={calcular}/>
            <b> <br></br>
            o valor final é {resultado}
            </b>
          </p>
          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}