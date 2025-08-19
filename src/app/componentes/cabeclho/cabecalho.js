<<<<<<< HEAD

import Image from 'next/image'
import estilos from './Cabe.module.css'
import Link from 'next/link'

function Cabecalho(){
    return(
            <header className={estilos.cabeca}>
            <Image className={estilos.imgCabeca} src='/ali.png' alt='livros' title="alimentacao saudavel" width={40} height={40}/>
            
            <nav className={estilos.linksCabeca}>
            <Link className={estilos.linksCabeca} href="#apresentacao">Apresentação</Link>
            <Link className={estilos.linksCabeca} href="#informacao">Informação</Link>
            <Link className={estilos.linksCabeca} href="#sobre">Sobre</Link>
            <Link className={estilos.linksCabeca} href="#contato">Contato</Link>
            </nav>
        </header>
    )
}

=======

import Image from 'next/image'
import estilos from './Cabe.module.css'
import Link from 'next/link'

function Cabecalho(){
    return(
            <header className={estilos.cabeca}>
            <Image className={estilos.imgCabeca} src='/ali.png' alt='livros' title="alimentacao saudavel" width={40} height={40}/>
            
            <nav className={estilos.linksCabeca}>
            <Link className={estilos.linksCabeca} href="#apresentacao">Apresentação</Link>
            <Link className={estilos.linksCabeca} href="#informacao">Informação</Link>
            <Link className={estilos.linksCabeca} href="#sobre">Sobre</Link>
            <Link className={estilos.linksCabeca} href="#contato">Contato</Link>
            </nav>
        </header>
    )
}

>>>>>>> 06b06dd36dfe8e17efac91552ed5c0c7918ea744
export default Cabecalho