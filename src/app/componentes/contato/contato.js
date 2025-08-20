import estilos from "./Contato.module.css"
function Contato(){
    return(
        <div id="contato" className={estilos.divContato}>
            <h1>CONTATO</h1>
            <img className={estilos.divImg} src='/mapa.png'/>
            <p>CONTACTA<span>-NOS</span></p>

            <section className={estilos.secaoContato}>
                
                <div className={estilos.linha}>
                    <img src="/maps.png" alt="Mapa" />
                    <div className={estilos.h2P}>
                     <h2>360v2 SARL</h2>
                    <p>V9P2+FQ9, Avenida Combatente da Liberdade de Pátria Bissau, Guiné-Bissau</p>
                    </div>
                </div>

                <div className={estilos.linha}>
                    <img src="/telefono.png" alt="Telefone" />
                    <p>+245 966 061 069 / 956 222 323</p>
                </div>

                <div className={estilos.linha}>
                    <img src="/gmails.png" alt="Email" />
                    <p>info@360v2sarl.gw / 360v2guinebissau@gmail.com</p>
                </div>
            </section>
        </div>
    )
}


export default Contato;