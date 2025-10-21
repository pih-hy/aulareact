import { useState } from "react";
export default function Exercicio9()
 {
  const[valor, setValor] =useState();
  const [taxa, setTaxa] = useState();
  const [tempo, setTempo] = useState();
  const[resultado, setResultado] =useState();

  function calcular ()
  {
    let  mon= ((Number(valor)) * 1 + taxa * tempo) ;
    
setResultado(mon
);
  }

  
  return (
    <div>
      <h1>Exercicio 9 </h1>

      <div className="conteudo">

        <h3>Nota</h3>
        <form>

          <p>
           Valor:<br />
            <input type="text" value={valor}
            onChange={(e) => setValor (e.target.value)}/>
          </p>

          <p>
           Taxa:<br />
            <input type="text" value={taxa}
            onChange={(e) => setTaxa (e.target.value)}/>
          </p>
          <p>

            Tempo:<br />
            <input type="text"   value={tempo}
            onChange={(e) => setTempo (e.target.value)}/>
          </p>
          
          <p>
            <input type="button" value="calcular" 
            onClick={calcular}/>
          </p>

        <b>
        seu montante  é {resultado}
        </b>
        <br></br>

          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}