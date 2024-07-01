import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonLarge } from "../../components/ButtonLarge";

export function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <img src={logoImage} className={styles.image} alt="logo" />
      <div className={styles.buttonContainer}>
        <ButtonLarge title="Listar os contatos" variant="confirm" />
        <ButtonLarge title="Adicionar um novo contato" variant="confirm" />
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}
