import { useEffect, useState } from "react";
import { FaArrowUp, FaMinus, FaPlus, FaRedo } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.scss";

function App() {
    const [count, setCount] = useState(0);
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const reset = () => setCount(0);
        window.addEventListener("counter-reset", reset);
        return () => window.removeEventListener("counter-reset", reset);
    }, []);

    useEffect(() => {
        const handleScroll = () => setShowGoTop(window.scrollY > 420);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>
                <section className={styles.counterCard} aria-labelledby="counter-title">
                    <span className={styles.eyebrow}>React state example</span>
                    <h1 id="counter-title">Counter App</h1>
                    <p>Update a single value with predictable state changes.</p>
                    <output className={styles.value} aria-live="polite">{count}</output>
                    <div className={styles.controls}>
                        <button type="button" className={styles.subtract} onClick={() => setCount((value) => value - 1)}>
                            <FaMinus aria-hidden="true" /> Subtract
                        </button>
                        <button type="button" className={styles.reset} onClick={() => setCount(0)}>
                            <FaRedo aria-hidden="true" /> Reset
                        </button>
                        <button type="button" className={styles.add} onClick={() => setCount((value) => value + 1)}>
                            <FaPlus aria-hidden="true" /> Add
                        </button>
                    </div>
                </section>
            </main>
            {showGoTop && <button className={styles.goTopButton} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><FaArrowUp /></button>}
            <Footer />
        </div>
    );
}

export default App;
