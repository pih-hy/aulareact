import Exemplo1 from "./Componentes/Exemplo1"
import Exercicios1 from "./Componentes/Exercicio1"
import Exercicios2 from "./Componentes/Exercicio2"
export default function App()
{ 
  return(
    <div>
      <h1>Exercicios de Componentes </h1>
      
      <h1>Chamada para o Exemplo1 </h1>
      <Exemplo1 numero1={8} numero2={2} />
      <Exemplo1 numero1={10} numero2={22} />
      <Exemplo1 numero1={7.5} numero2={5.8} />
      <Exemplo1 numero1={-58} numero2={65} />

      <hr />
      <h3>Chamada para o Exercício 1 </h3>
      <Exercicios1 fah={100} />
      <Exercicios1 fah={50} />
      <Exercicios1 fah={32} />

<hr />
<h3>Chamadas para o Exercicio 2</h3>
<Exercicios2 peso="80" altura= "1.80"/>
<Exercicios2 peso="60" altura= "1.60"/>
    </div>

    
  )
}
