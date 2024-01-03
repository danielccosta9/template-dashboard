import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Avalie Agora</span>
          <h3 className={styles.title}>
            Quer aprender a usar a nova versão do admin dashboard?
          </h3>
          <span className={styles.subtitle}>Levará apenas 4 minutos</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Assistir
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Em breve</span>
          <h3 className={styles.title}>
            Novas ações de servidor estarão disponíveis, a pré-renderização
            parcial está chegando!
          </h3>
          <span className={styles.subtitle}>Melhore a sua produtividade</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Ler +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
