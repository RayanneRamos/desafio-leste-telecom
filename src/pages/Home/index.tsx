import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <img src={logoImage} className={styles.image} alt="logo" />
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Listar os contatos</button>
        <button className={styles.button}>Adicionar um novo contato</button>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
