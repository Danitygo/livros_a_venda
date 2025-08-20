import Image from 'next/image';
import Link from 'next/link';
import estilos from './page.module.css'
import Cabecalho from './componentes/cabecalho/cabecalhos';
import VisaoGeral from './componentes/visaoGeral/visao';
import Secao from './componentes/secao/secao';
import Contato from './componentes/contato/contato';


export default function Home() {
  return (
    <div className={styles.page}>
      <Cabecalho/>
      <VisaoGeral/>
      <Secao/>
      <SobreNos/>
      <Contato/>
    </div>
  );
}
