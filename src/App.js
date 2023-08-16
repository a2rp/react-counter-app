import './App.css';
import { useState } from "react";

import styles from "./App.module.scss";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div class={styles.container}>
                <div className={styles.text}>{count}</div>
                <div className={styles.controls}>
                    <div className={styles.subtract} onClick={(event) => setCount(count => count - 1)}>subtract</div>
                    <div className={styles.reset} onClick={(event) => setCount(count => 0)}>reset</div>
                    <div className={styles.add} onClick={(event) => setCount(count => count + 1)}>add</div>
                </div>
            </div>
        </div>
    );
}

export default App;
