import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import userImage from "../../assets/user.png";
import editSVG from "../../assets/edit.svg";
import deleteSVG from "../../assets/delete.svg";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonSmall } from "../../components/ButtonSmall";

export function ListContacts() {
  return (
    <div className={styles.container}>
      <Header />
      <img src={logoImage} className={styles.image} alt="Logo Leste Telecom" />
      <div className={styles.filterContainer}>
        <form className={styles.filterForm}>
          <select className={styles.selectFilter}>
            <option value="" disabled selected>
              Gender Filter
            </option>
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
          <select className={styles.selectFilter}>
            <option value="" disabled selected>
              Language Filter
            </option>
            <option>Português</option>
            <option>Inglês</option>
            <option>Espanhol</option>
          </select>
          <select className={styles.selectFilter}>
            <option value="" disabled selected>
              Age Filter
            </option>
            <option>Menor de 18 anos</option>
            <option>18 à 25 anos</option>
            <option>26 à 33 anos</option>
            <option>34 à 41 anos</option>
            <option>42 à 49 anos</option>
            <option>Maior de 50 anos</option>
          </select>
          <select className={styles.selectFilter}>
            <option value="" disabled selected>
              Birthday Filter
            </option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </form>
      </div>
      <div className={styles.counterContainer}>
        <div className={styles.infoDetails}>
          <span className={styles.titleInfo}>Gender Counter:</span>
          <span className={styles.numberInfo}>28</span>
        </div>
        <div className={styles.infoDetails}>
          <span className={styles.titleInfo}>Language Counter:</span>
          <span className={styles.numberInfo}>28</span>
        </div>
      </div>
      <div className={styles.main}>
        <h1 className={styles.titlePage}>Listar os contatos</h1>
        <div className={styles.listContactContainer}>
          <div className={styles.cardContainer}>
            <img src={userImage} alt="profile" className={styles.imageCard} />
            <strong className={styles.cardName}>John Doe</strong>
            <span className={styles.cardEmail}>johndoe@example.com</span>
            <span className={styles.cardBirthday}>21/09/1997</span>
            <span className={styles.cardGender}>Masculino</span>
            <span className={styles.cardLanguage}>Português</span>
            <div className={styles.buttonCardContainer}>
              <ButtonSmall type="button" variant="edit">
                <img
                  src={editSVG}
                  alt="edit icon"
                  className={styles.imageButton}
                />
                Editar
              </ButtonSmall>
              <ButtonSmall type="button" variant="cancel">
                <img
                  src={deleteSVG}
                  alt="delete icon"
                  className={styles.imageButton}
                />
                Remover
              </ButtonSmall>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
