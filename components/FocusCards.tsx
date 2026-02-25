"use client";

import { motion } from "framer-motion";
import styles from "./FocusCards.module.css";
import pageStyles from "@/app/page.module.css";
import Image from "next/image";

import { usePathname } from "next/navigation";

const localizedContent: Record<string, any> = {
    en: {
        title: "Our Focus",
        intro: "Three directions define ENVI: gourmet experiences of unparalleled quality, fine wine & spirits that embody timeless refinement, and cosmetics crafted for transformative results.",
        categories: [
            {
                id: "gourmet",
                label: "Category",
                title: "Gourmet Products",
                description: "We curate exceptional gourmet products from the world’s rarest and finest origins — rare ingredients, exquisite flavors, and timeless indulgence for the most discerning palates.",
                image: "/images/7d226198-69a8-47ec-9b0f-4991a32c5f74.webp"
            },
            {
                id: "spirits",
                label: "Category",
                title: "Fine Wines & Spirits",
                description: "We present fine wines and premium spirits that represent the pinnacle of craftsmanship and heritage. Rare champagnes with delicate bubbles and timeless elegance, alongside aged single malts.",
                image: "/images/strong-hard-alcoholic-drinks-spirits-liqueurs-d-2026-01-09-09-52-38-utc.webp"
            },
            {
                id: "cosmetics",
                label: "Category",
                title: "Professional Cosmetics",
                description: "We present professional cosmetics of the highest caliber — advanced, science-backed formulations that deliver visible transformation and timeless beauty.",
                image: "/images/histomer_products.png"
            }
        ]
    },
    ru: {
        title: "Наш фокус",
        intro: "Три направления определяют ENVI: гурмэ-опыт непревзойдённого качества, изысканные вина и спиртные напитки, воплощающие вневременную утончённость, и косметика, созданная для преображающих результатов.",
        categories: [
            {
                id: "gourmet",
                label: "Категория",
                title: "Гурмэ-продукты",
                description: "Мы отбираем исключительные гурмэ-продукты из самых редких и лучших источников мира — редкие ингредиенты, изысканные вкусы и вневременное удовольствие для самых взыскательных гурманов.",
                image: "/images/7d226198-69a8-47ec-9b0f-4991a32c5f74.webp"
            },
            {
                id: "spirits",
                label: "Категория",
                title: "Изысканные вина и спиртные напитки",
                description: "Мы представляем изысканные вина и премиальные спиртные напитки, олицетворяющие вершину мастерства и наследия. Редкие шампанские с нежными пузырьками и вневременной элегантностью — наряду с выдержанными односолодовыми виски.",
                image: "/images/strong-hard-alcoholic-drinks-spirits-liqueurs-d-2026-01-09-09-52-38-utc.webp"
            },
            {
                id: "cosmetics",
                label: "Категория",
                title: "Профессиональная косметика",
                description: "Мы представляем профессиональную косметику высочайшего класса — передовые, научно обоснованные формулы, обеспечивающие видимое преображение и вневременную красоту.",
                image: "/images/histomer_products.png"
            }
        ]
    },
    et: {
        title: "Meie fookus",
        intro: "Kolm suunda määratlevad ENVI: võrratu kvaliteediga gurmeékogemused, aegutud elegantsi kehastav peenvein ja kanged joogid ning transformatiivseid tulemusi pakkuv kosmeetika.",
        categories: [
            {
                id: "gourmet",
                label: "Kategooria",
                title: "Gurmeétooted",
                description: "Valime erakordseid gurmeétooteid maailma haruldasematest ja parimatest allikatest — haruldased koostisosad, peenomaised maitsed ja ajatu nauding kõige nõudlikumatele gurmaanidele.",
                image: "/images/7d226198-69a8-47ec-9b0f-4991a32c5f74.webp"
            },
            {
                id: "spirits",
                label: "Kategooria",
                title: "Peenvein ja kanged joogid",
                description: "Esitleme peenveine ja premium-kangeid jooke, mis esindavad meisterlikkuse ja pärandi tippu. Haruldased šampanjad õrnade mullidega ja ajatu elegantsusega, koos laagerdunud single malt viskidega.",
                image: "/images/strong-hard-alcoholic-drinks-spirits-liqueurs-d-2026-01-09-09-52-38-utc.webp"
            },
            {
                id: "cosmetics",
                label: "Kategooria",
                title: "Professionaalne kosmeetika",
                description: "Esitleme kõrgeima taseme professionaalset kosmeetikat — täiustatud, teaduspõhised formulatsioonid, mis pakuvad nähtavat transformatsiooni ja ajatut ilu.",
                image: "/images/histomer_products.png"
            }
        ]
    }
};

export default function FocusCards() {
    const pathname = usePathname();
    const currentLang = pathname?.split("/")[1] || "en";
    const content = localizedContent[currentLang] || localizedContent.en;

    return (
        <section id="focus" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={`${pageStyles.aboutHeader} ${styles.header}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: "easeOut" } }
                    }}
                >
                    <div className={pageStyles.overlineWrapper}>
                        <motion.div
                            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: "circOut" } } }}
                            className={pageStyles.horizontalMark}
                        />
                        <motion.span
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } } }}
                            className={pageStyles.overline}
                        >
                            {content.title}
                        </motion.span>
                    </div>
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } } }}
                        className={pageStyles.hugeTitle}
                    >
                        {content.title}
                    </motion.h2>
                    <p className={styles.intro} style={{ marginTop: "40px", maxWidth: "700px" }}>
                        {content.intro}
                    </p>
                </motion.div>

                <div className={styles.list}>
                    {content.categories.map((cat: any, index: number) => (
                        <motion.div
                            key={cat.id}
                            className={styles.row}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } }
                            }}
                        >
                            <div className={styles.imageCol}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className={styles.image}
                                    />
                                    <div className={styles.imageOverlay} />
                                </div>
                            </div>
                            <div className={styles.textCol}>
                                <h3 className={styles.cardTitle}>{cat.title}</h3>
                                <p className={styles.cardBody}>{cat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
