import"./App.css";
export default function App()
{
    const centralizado={textAlign :"center"};
    const destaque ={
    textAlign:"center",
    border :"2px solid magenta",
    color:"black",
    padding :"10px"
}

    return (
    
        <div>
            <h1>Estudo CSS</h1>
            <p>
                O css (<i>cacasding Style sheets</i>) é uma linguagem
                utilizada para estilizae <b>página web</b>, e será
                ulilizada dentro ou fora do HTML.
            </p>
            <p>
                Na aula de hoje, vamos estudae e entender como apliccar estilo CSS em componentes do React.
            </p>
            <p>Utilizando o CSS podemosdefinir</p>
            <ul>
                <li> Definir cor para o texto, para o fundo do elemento </li>
                <li>Fontes e tamanhosde letras</li>
                <li>Posicionamentos,bordas,sombras,ect...</li>
                <li>Efeitos visuais e animaçâo</li>
            </ul>
            <p>O HTML diz o que deve aparecer na pagina , em quanto o CSS  diz como deve aparecer</p>

            <p
                className="centro">
                    Agust D
            </p>

            <p style={centralizado}>
                <img src="suga.png" alt="" />
            </p>
            <h3 style={destaque}>Fim de aula</h3>
        </div>
    );
}