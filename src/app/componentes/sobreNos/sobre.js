
import Image from 'next/image';
import estilos from './Sobre.module.css'
export default function SobreNos(){
    return(
        <div id='sobre' className={estilos.divSobre}>
            <h3>SOBRE NÓS</h3>
            <Image className={estilos.sobreImagem} src="/colecao.png" alt='colecao' width={500} height={500}/>
            <p>Temos aqui coleções dos livros muito bom para você que deseja ter uma vida saudável e loga.
                Livros tais como <span>Alimentação sem carne, Cozinha da Dieta Antiinflamatória, Alimentação
                    Desintoxicante para Ativar o Sistema Imunológico etc...</span> qualquer informação
                     ou enteressado pode entrar em contato connosco através de email ou telefone em baixo. </p>
        </div>
    )
}  
