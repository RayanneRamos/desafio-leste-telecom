import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { InputLarge } from "../../components/InputLarge";
import { InputSmall } from "../../components/InputSmall";
import { SelectMedium } from "../../components/SelectMedium";
import { LANGUAGES } from "../../utils/languages";
import { ButtonLarge } from "../../components/ButtonLarge";
import { useState } from "react";

export function EditForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <div className={styles.container}>
      <Header />
      <Link to="/">
        <img
          src={logoImage}
          alt="Logo Leste Telecom"
          className={styles.image}
        />
      </Link>
      <h1 className={styles.title}>Editar o contato</h1>
      <form className={styles.formContainer}>
        <div className={styles.formFirstLine}>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Nome:</label>
            <InputLarge
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Sobrenome:</label>
            <InputLarge
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.formSecondLine}>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Email:</label>
            <InputLarge
              type="text"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles.inputPrimaryContainer}>
            <label className={styles.label}>Foto:</label>
            <InputLarge
              type="text"
              placeholder="https://github.com/RayanneRamos.png"
              value={photo}
              onChange={(event) => setPhoto(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.formThirdLine}>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Aniversário:</label>
            <InputSmall
              type="date"
              placeholder="21/09/1997"
              value={birthday}
              onChange={(event) => setBirthday(event.target.value)}
            />
          </div>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Gênero:</label>
            <SelectMedium
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="" disabled selected>
                Selecionar o gênero
              </option>
              <option>Masculino</option>
              <option>Feminino</option>
            </SelectMedium>
          </div>
          <div className={styles.inputSecondaryContainer}>
            <label className={styles.label}>Idioma:</label>
            <SelectMedium
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="" disabled selected>
                Selecionar o idioma
              </option>
              {LANGUAGES.map((language) => {
                return (
                  <option id={language.id} value={language.language}>
                    {language.language}
                  </option>
                );
              })}
            </SelectMedium>
          </div>
        </div>
        <div className={styles.buttonFormContainer}>
          <ButtonLarge title="Salvar" variant="confirm" />
          <ButtonLarge title="Cancelar" variant="cancel" />
        </div>
      </form>
    </div>
  );
}
