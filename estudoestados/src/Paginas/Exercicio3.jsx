import { useState } from "react";
export default function Exercicio4()
 {
  const[valor, setValor] =useState();
  const [taxa, setTaxa] = useState();
  const[ tempo ,setTempo] = useState();
  const[resultado, setResultado] =useState();

  function calcular ()
  {
    let parcela =  (Number(valor)) + (Number(valor)) * ((Number(taxa))* (Number(taxa))) /100 * (Number(tempo));

    setResultado( parcela);
  }

  
  return (
    <div>
      <h1>Exercicio 4 </h1>

      <div className="conteudo">

        <h3>Parcelas</h3>
        <form>

          <p>
            Digite o valor da prestação:<br />
            <input type="text" value={valor}
            onChange={(e) => setValor (e.target.value)}/>
          </p>
          <p>

            Digite a taxa em juros:<br />
            <input type="text"   value={taxa}
            onChange={(e) => setTaxa (e.target.value)}/>
          </p>
          <p>

            Digite o tempo  (em dias) de atrazo:<br />
            <input type="text"  value={tempo}
            onChange={(e) => setTempo (e.target.value)}/>
          </p>
          <p>
            <input type="button" value="calcular" 
            onClick={calcular}/>
          </p>

        <b>
          sua parcela atualizada é de {resultado}
        </b>
        <br></br>

          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}