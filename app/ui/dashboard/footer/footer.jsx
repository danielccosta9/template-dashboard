import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <p>Daniel C. Costa</p>
      </div>
      <div className={styles.text}>
        <p>© All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
