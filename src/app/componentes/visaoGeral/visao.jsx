
import estilos from './VisaoGeral.module.css'

function VisaoGeral(){
    return(
        <div id='apresentacao' className={estilos.divGeral}>
             <h1>Regime Alimentar Apropriado</h1>
            <img src="/capa.png" title="foto de frutas e legumes"/>
           
                <h2>O Regime Original Escolhido </h2>
                <img src="/quent.png"/>
                <p>Eu aconselharia a todos a pôr alguma coisa quente no estômago, cada manhã pelo menos. Podeis fazer isto sem muito labor.
                     Podeis fazer mingau de farinha integral. </p>
         
        </div>
    )
}

export default VisaoGeral;