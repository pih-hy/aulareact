import { useState } from "react";
export default function Exemplo2() {

  const[numero1, setNumero1]= useState(22);
  const[numero2, setNumero2]= useState(5);
  const[resultado, setResultado]= useState();
  const[nome, setNome]= useState();

  function somar()
  {
let n1, n2, soma, nome1;
n1 = Number(numero1);
n2 = Number(numero2);
nome1 = Number(nome);
soma = (n1+n2)/2;

setResultado("A soma dos números " + soma);
setNome("seu nome é " + nome1);
  }
  return (
    <div>
      <h1>Exemplo 2</h1>
      <div className="conteudo">
        <h3>Calculo</h3>
        <p>
          O obejetivo será receber o nome do aluno,suas 3 notas e calcular a média.</p>
        <form>
          <p>
            Nome do Aluno <br />
            <input type="text" value={nome}
            onChange={ (e) => setNome(e.target.value) } /> 
          </p>

          <p>
            Nota 1 <br />
            <input type="text" value={numero1}
    onChange={ (e) => setNumero1(e.target.value) } /> 
          </p>
          <p>
            Nota 2 <br />
            <input type="text" value={numero2}
    onChange={ (e) => setNumero2(e.target.value) } />
          </p>

          <p>
            <input type="button" value="Calcular"onClick={somar} />
          </p>
          <p>
    seu nome = {nome} <br />
    Numero 1 = {numero1} <br />
    Numero 2 = {numero2} <br />
    {resultado}
    </p>
          <a href="/">Voltar</a>
        </form>

      </div>
 
      
    </div>
  );
}
