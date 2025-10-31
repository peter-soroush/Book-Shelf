import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>Ahmadreza Soroush | React Course</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Ahmadreza Soroush with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
