export default function Exercicio1({n1}){
    let quadrado = n1 * n1;
    let cubo = n1 * n1 * n1;
     return(
        <div>
            <p>
                O quadrado do numero {n1} é {quadrado}
                <br/>
                O cubo do numero {n1} é {cubo}
            </p>
        </div>
     );
}