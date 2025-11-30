import { Link } from "@tanstack/react-router";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";
import * as styles from "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <button
          onClick={() => setIsOpen(true)}
          className={styles.menuButton}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className={styles.title}>
          <Link to="/">
            <img
              src="/tanstack-word-logo-white.svg"
              alt="TanStack Logo"
              className={styles.logo}
            />
          </Link>
        </h1>
      </header>

      <aside className={`${styles.aside} ${isOpen ? styles.asideOpen : ""}`}>
        <div className={styles.asideHeader}>
          <h2 className={styles.asideTitle}>Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.closeButton}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className={styles.nav}>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={styles.link}
            activeProps={{
              className: `${styles.link} ${styles.activeLink}`,
            }}
          >
            <Home size={20} />
            <span className={styles.linkText}>Home</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
