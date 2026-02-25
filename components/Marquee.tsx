"use client";

import { motion } from "framer-motion";
import styles from "./Marquee.module.css";

import { usePathname } from "next/navigation";

const categories: Record<string, string[]> = {
    en: ["Gourmet Products", "Fine Wines", "Professional Cosmetics"],
    ru: ["Гурмэ-продукты", "Изысканные вина и спиртные напитки", "Профессиональная косметика"],
    et: ["Gurmeétooted", "Peenvein ja kanged joogid", "Professionaalne kosmeetika"]
};

export default function Marquee() {
    const pathname = usePathname();
    const currentLang = pathname?.split("/")[1] || "en";
    const currentCategories = categories[currentLang] || categories.en;

    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                {currentCategories.map((cat, i) => (
                    <motion.div
                        key={cat}
                        className={styles.item}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, delay: i * 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className={styles.itemText}>{cat}</span>
                        {i < currentCategories.length - 1 && <span className={styles.separator}>·</span>}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
