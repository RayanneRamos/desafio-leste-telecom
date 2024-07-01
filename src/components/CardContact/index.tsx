import styles from "./styles.module.scss";
import userImage from "../../assets/user.png";
import editSVG from "../../assets/edit.svg";
import deleteSVG from "../../assets/delete.svg";
import { ButtonSmall } from "../../components/ButtonSmall";

export function CardContact() {
  return (
    <div className={styles.cardContainer}>
      <img src={userImage} alt="profile" className={styles.imageCard} />
      <strong className={styles.cardName}>John Doe</strong>
      <span className={styles.cardEmail}>johndoe@example.com</span>
      <span className={styles.cardBirthday}>21/09/1997</span>
      <span className={styles.cardGender}>Masculino</span>
      <span className={styles.cardLanguage}>Português</span>
      <div className={styles.buttonCardContainer}>
        <ButtonSmall type="button" variant="edit">
          <img src={editSVG} alt="edit icon" className={styles.imageButton} />
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
  );
}
