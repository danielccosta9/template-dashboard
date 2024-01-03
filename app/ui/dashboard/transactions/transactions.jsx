import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Últimas Transações</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Data</td>
            <td>Valor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Daniel Costa
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendente
              </span>
            </td>
            <td>02/01/2024</td>
            <td>R$ 2.467</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Daniel Costa
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Aprovado
              </span>
            </td>
            <td>02/01/2024</td>
            <td>R$ 2.467</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Daniel Costa
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelado
              </span>
            </td>
            <td>02/01/2024</td>
            <td>R$ 2.467</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Daniel Costa
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendente
              </span>
            </td>
            <td>02/01/2024</td>
            <td>R$ 2.467</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
