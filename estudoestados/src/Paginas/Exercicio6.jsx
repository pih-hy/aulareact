import { useState } from "react";
export default function Exercicio6()
 {
  const[quant, setQuant] =useState();
  const [preco, setPreco] = useState();

  const[resultado, setResultado] =useState();

  function calcular ()
  {
    let sub , desconto , valor;
    desconto = sub * 10/100;
    valor = sub - desconto;
    setResultado( 

        <div>
            Quantidade = {quant}<br></br>
            Preço = {preco} <br></br>
            Valor a pagar = {valor}
        </div>
    );
  }

  
  return (
    <div>
      <h1>Exercicio 6 </h1>

      <div className="conteudo">

        <h3>Produto</h3>
        <form>

          <p>
            Digite a quantidade:<br />
            <input type="text" value={quant}
            onChange={(e) => setQuant (e.target.value)}/>
          </p>
          <p>

            Digite o preço:<br />
            <input type="text"   value={preco}
            onChange={(e) => setPreco (e.target.value)}/>
          </p>
          
          <p>
            <input type="button" value="calcular" 
            onClick={calcular}/>
          </p>

        <b>
         o valor final é {resultado}
        </b>
        <br></br>

          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}