
import Galeria from "src/components/Galeria";
import Menu from "src/components/Menu";
import Populares from "src/components/Populares";
import Rodape from "src/components/Rodape";
import styles from "./PaginaInicial.module.scss"
import banner from "./banner.png"
import Cabecalho from "src/components/Cabecalho";

export default function PaginaInicial(){
  return (
    <>
      <Cabecalho/>
      <main>
        <section className={styles.principal}>
          <Menu/>
          <div className={styles.principal__imagem}>
            <h1>A galera mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço"/>
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria/>
          <Populares/>
        </div>
      </main>
      <Rodape/>
    </>
  )
}