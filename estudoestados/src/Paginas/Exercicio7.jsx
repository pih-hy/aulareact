import { useState } from "react";
export default function Exercicio7()
 {
  const[nota1, setNota1] =useState();
  const [nota2, setNota2] = useState();
  const [nota3, setNota3] = useState();
  const[resultado, setResultado] =useState();

  function calcular ()
  {
    let  notaF= ((Number(nota1)) * nota2 * nota3)/3 ;
    
setResultado(notaF
);
  }

  
  return (
    <div>
      <h1>Exercicio 7 </h1>

      <div className="conteudo">

        <h3>Nota</h3>
        <form>

          <p>
           nota 1:<br />
            <input type="text" value={nota1}
            onChange={(e) => setNota1 (e.target.value)}/>
          </p>

          <p>
           nota 2:<br />
            <input type="text" value={nota2}
            onChange={(e) => setNota2 (e.target.value)}/>
          </p>
          <p>

            nota 3:<br />
            <input type="text"   value={nota3}
            onChange={(e) => setNota3 (e.target.value)}/>
          </p>
          
          <p>
            <input type="button" value="calcular" 
            onClick={calcular}/>
          </p>

        <b>
        sua nota final é {resultado}
        </b>
        <br></br>

          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}