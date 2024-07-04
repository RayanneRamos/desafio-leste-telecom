import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.png";
import { Footer } from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";

export function ShowStatistics() {
  const navigate = useNavigate();

  function handleGoBackListContatcs() {
    navigate("/listcontact");
  }

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
      <h1 className={styles.title}>Estatísticas</h1>
      <div className={styles.main}>
        <div className={styles.genderStatisticsContainer}>
          <div className={styles.titleContainer}>
            <strong className={styles.subtitle}>
              Estatísticas por gêneros
            </strong>
          </div>
          <table className={styles.tableGender}>
            <tr className={styles.tableHeader}>
              <th>Gêneros</th>
              <th>Números</th>
            </tr>
            <tr className={styles.tableColumn}>
              <td>Masculino</td>
              <td>20</td>
            </tr>
            <tr className={styles.tableColumn}>
              <td>Feminino</td>
              <td>20</td>
            </tr>
          </table>
        </div>
        <div className={styles.languageStatisticsContainer}>
          <div className={styles.titleContainer}>
            <strong className={styles.subtitle}>
              Estatísticas por idiomas
            </strong>
          </div>
          <table className={styles.tableLanguage}>
            <tr className={styles.tableHeader}>
              <th>Idiomas</th>
              <th>Números</th>
            </tr>
            <tr className={styles.tableColumn}>
              <td>Português</td>
              <td>20</td>
            </tr>
            <tr className={styles.tableColumn}>
              <td>Inglês</td>
              <td>20</td>
            </tr>
            <tr className={styles.tableColumn}>
              <td>Espanhol</td>
              <td>20</td>
            </tr>
            <tr className={styles.tableColumn}>
              <td>Francês</td>
              <td>20</td>
            </tr>
            <tr className={styles.tableColumn}>
              <td>Alemão</td>
              <td>20</td>
            </tr>
          </table>
        </div>
      </div>
      <button
        className={styles.buttonGoBack}
        onClick={handleGoBackListContatcs}
      >
        voltar para as listas de contatos
      </button>
      <Footer />
    </div>
  );
}
