import styles from "./styles.module.scss";
import editSVG from "../../assets/edit.svg";
import deleteSVG from "../../assets/delete.svg";
import { ButtonSmall } from "../../components/ButtonSmall";
import { ListContactProps } from "../../pages/ListContacts";

interface CardContactProps {
  data: ListContactProps;
}

export function CardContact({ data }: CardContactProps) {
  return (
    <div className={styles.cardContainer}>
      <img src={data.photo} alt={data.name} className={styles.imageCard} />
      <strong className={styles.cardName}>
        {data.name} {data.sobrenome}
      </strong>
      <span className={styles.cardEmail}>{data.email}</span>
      <span className={styles.cardBirthday}>{data.birthDay}</span>
      <span className={styles.cardGender}>{data.gender}</span>
      <span className={styles.cardLanguage}>{data.language}</span>
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
