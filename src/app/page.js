import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import VisaoGeral from "./componentes/visaoGeral/visao";
import Secao from "./componentes/secao/secao";
import Contato from "./componentes/contato/contato";
import Cabecalho from "./componentes/cabeclho/cabecalho";
import SobreNos from "./componentes/sobreNos/sobre";

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
