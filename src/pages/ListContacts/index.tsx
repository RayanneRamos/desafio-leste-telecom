import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SelectSmall } from "../../components/SelectSmall";
import { CardContact } from "../../components/CardContact";
import { Link } from "react-router-dom";
import { LANGUAGES } from "../../utils/languages";
import { MONTHS } from "../../utils/months";
import { AGES } from "../../utils/ages";

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
            {LANGUAGES.map((language) => {
              return (
                <option id={language.id} value={language.language}>
                  {language.language}
                </option>
              );
            })}
          </SelectSmall>
          <SelectSmall>
            <option value="" disabled selected>
              Age Filter
            </option>
            {AGES.map((age) => {
              return (
                <option id={age.id} value={age.age}>
                  {age.age}
                </option>
              );
            })}
          </SelectSmall>
          <SelectSmall>
            <option value="" disabled selected>
              Birthday Filter
            </option>
            {MONTHS.map((month) => {
              return (
                <option id={month.id} value={month.month}>
                  {month.month}
                </option>
              );
            })}
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
