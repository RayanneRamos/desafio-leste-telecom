import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonLarge } from "../../components/ButtonLarge";

export function NewContact() {
  return (
    <div className={styles.container}>
      <Header />
      <img src={logoImage} className={styles.image} alt="Logo" />
      <h1 className={styles.title}>Adicionar um novo contato</h1>
      <form className={styles.formContainer}>
        <div className={styles.formFirstLine}>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Nome:</label>
            <input
              className={styles.inputPrimary}
              type="text"
              placeholder="John"
            />
          </div>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Sobrenome:</label>
            <input
              className={styles.inputPrimary}
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className={styles.formSecondLine}>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Email:</label>
            <input
              className={styles.inputPrimary}
              type="text"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Foto:</label>
            <input
              className={styles.inputPrimary}
              type="text"
              placeholder="https://github.com/RayanneRamos.png"
            />
          </div>
        </div>
        <div className={styles.formThirdLine}>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Aniversário:</label>
            <input
              className={styles.inputSecondary}
              type="date"
              placeholder="21/09/1997"
            />
          </div>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Gênero:</label>
            <select className={styles.inputSecondary}>
              <option value="" disabled selected>
                Selecionar o gênero
              </option>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
          </div>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Idioma:</label>
            <select className={styles.inputSecondary}>
              <option value="" disabled selected>
                Selecionar o idioma
              </option>
              <option>Português</option>
              <option>Inglês</option>
              <option>Espanhol</option>
            </select>
          </div>
        </div>
        <div className={styles.buttonFormContainer}>
          <ButtonLarge title="Adicionar" />
          <ButtonLarge title="Cancelar" variant="cancel" />
        </div>
      </form>
      <Footer />
    </div>
  );
}
