import { useState } from "react";
import { FaBars, FaRedo, FaTimes } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a className={styles.brand} href="#counter-title" onClick={() => setMenuOpen(false)}>
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Ashish Ranjan logo" />
                    <span>React Counter App</span>
                </a>
                <button type="button" className={styles.menuButton} onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {menuOpen && (
                <div className={styles.menu}>
                    <button type="button" onClick={() => window.dispatchEvent(new Event("counter-reset"))}>
                        <FaRedo /> Reset counter
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
