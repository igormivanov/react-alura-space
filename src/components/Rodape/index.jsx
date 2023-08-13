import React from "react";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import styles from "./Rodape.module.scss"

export default function Rodape(){
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="https://www.facebook.com/AluraCursos">
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a href="/">
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a href="/">
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Alura</p>
    </footer>
  )
}