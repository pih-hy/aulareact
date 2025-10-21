import { useState } from "react";
export default function Exercicio8()
 {
  const[peso, setPeso] =useState();
  const [altura, setAltura] = useState();
  const[resultado, setResultado] =useState();

  function calcular ()
  {
    let  imc= ((Number(peso)) / altura * altura)/3 ;
    
setResultado(imc
);
  }

  
  return (
    <div>
      <h1> </h1>

      <div className="conteudo">

        <h3>Nota</h3>
        <form>

          <p>
           Peso :<br />
            <input type="text" value={peso}
            onChange={(e) => setPeso (e.target.value)}/>
          </p>

          <p>
          altura:<br />
            <input type="text" value={altura}
            onChange={(e) => setAltura (e.target.value)}/>
          </p>
          
          <p>
            <input type="button" value="calcular" 
            onClick={calcular}/>
          </p>

        <b>
        seu imc é {resultado}
        </b>
        <br></br>

          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}