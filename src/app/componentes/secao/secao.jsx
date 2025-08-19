import Image from 'next/image'
import estilos from './Secao.module.css'
function Secao(){
    return(
        <div id='informacao' className={estilos.divDesen}>
            <h3>A lei de saúde</h3>
            <p>Se estimais vossa vida, deveis comer alimentos simples, preparados da maneira mais simples,
                 e fazer mais exercícios físicos. </p>
            <p>Cada membro da família necessita dos benefícios da reforma de saúde. Mas o uso de drogas
                 deve ser definitivamente abandonado;</p>
            <section>
                <ul className={estilos.ul}>
                    <li><Image className={estilos.imgDesen} src="/instag.png" alt='instagram' width={45} height={30}/></li>
                    <li><Image className={estilos.imgDesen}  src="/gmail.png" alt='gmail' width={45} height={30}/></li>
                    <li><Image className={estilos.imgDesen}  src="/facebook.png" alt='facebook' width={45} height={30}/></li>
                    <li><Image className={estilos.imgDesen}  src="/tel.png" alt='telefone' width={45} height={30}/></li>
                </ul>
            </section>
        </div>
    )
}

export default Secao;