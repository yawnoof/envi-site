"use client";

import { motion } from "framer-motion";
import styles from "./Marquee.module.css";

const categories = ["Gourmet Products", "Fine Wines", "Professional Cosmetics"];

export default function Marquee() {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat}
                        className={styles.item}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, delay: i * 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className={styles.itemText}>{cat}</span>
                        {i < categories.length - 1 && <span className={styles.separator}>·</span>}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
