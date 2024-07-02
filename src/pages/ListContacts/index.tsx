import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SelectSmall } from "../../components/SelectSmall";
import { CardContact } from "../../components/CardContact";
import { Link } from "react-router-dom";

export function ListContacts() {
  return (
    <div className={styles.container}>
      <Header />
      <Link to="/">
        <img
          src={logoImage}
          className={styles.image}
          alt="Logo Leste Telecom"
        />
      </Link>
      <div className={styles.filterContainer}>
        <form className={styles.filterForm}>
          <SelectSmall>
            <option value="" disabled selected>
              Gender Filter
            </option>
            <option>Masculino</option>
            <option>Feminino</option>
          </SelectSmall>
          <SelectSmall>
            <option value="" disabled selected>
              Language Filter
            </option>
            <option>Português</option>
            <option>Inglês</option>
            <option>Espanhol</option>
          </SelectSmall>
          <SelectSmall>
            <option value="" disabled selected>
              Age Filter
            </option>
            <option>Menor de 18 anos</option>
            <option>18 à 25 anos</option>
            <option>26 à 33 anos</option>
            <option>34 à 41 anos</option>
            <option>42 à 49 anos</option>
            <option>Maior de 50 anos</option>
          </SelectSmall>
          <SelectSmall>
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
          </SelectSmall>
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
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
