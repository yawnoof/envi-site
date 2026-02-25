"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FocusCards from "@/components/FocusCards";
import CustomCursor from "@/components/CustomCursor";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RuPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className={styles.main}>
        <Hero title="Будь ENVI" />

        {/* About Section */}
        <section id="about" className={`${styles.textSection} ${styles.aboutSection}`}>
          <div className="container">
            <motion.div
              className={styles.aboutGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { staggerChildren: 0.2, duration: 1.2, ease: "easeOut" } },
                hidden: { opacity: 0, y: 60, filter: "blur(10px)" }
              }}
            >
              <div className={styles.aboutHeader}>
                <div className={styles.overlineWrapper}>
                  <motion.div
                    variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: "circOut" } } }}
                    className={styles.horizontalMark}
                  />
                  <motion.span
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } } }}
                    className={styles.overline}
                  >
                    Введение
                  </motion.span>
                </div>
                <motion.h2
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className={styles.hugeTitle}
                >
                  О ENVI
                </motion.h2>
              </div>

              <div className={styles.aboutContent}>
                <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} className={styles.leadParagraph}>
                  ENVI — премиальная компания по импорту и дистрибуции, расположенная в Таллинне, Эстония.
                </motion.p>

                <motion.div
                  className={styles.contentDivider}
                  variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1, ease: "circOut" } } }}
                />

                <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} className={styles.bodyText}>
                  Мы открываем эксклюзивный доступ к исключительным международным брендам в сфере гурмэ-продуктов, изысканных вин и спиртных напитков, а также профессиональной косметики. ENVI выстраивает долгосрочные стратегические партнёрства с дальновидными производителями, обеспечивая плавный выход на рынки Балтии и Европы: от логистики и таможенного оформления до премиального маркетинга и развития каналов продаж.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} className={styles.bodyText}>
                  Из Таллинна — динамичного европейского центра — мы гарантируем высочайшие стандарты качества, эксклюзивности и точности.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        <Marquee />

        <FocusCards />

        {/* Official Partnership Section */}
        <section id="partners" className={`${styles.textSection} ${styles.editorialPartnership}`}>
          <div className="container">
            <div className={styles.editorialGrid}>
              <motion.div
                className={styles.editorialImageWrapper}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { scale: 0.95, opacity: 0, filter: "blur(10px)" },
                  visible: { scale: 1, opacity: 1, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } }
                }}
              >
                <Image src="/images/Histomer professional_Logotype_Primary version_White.png" alt="Histomer Partnership Logo" fill className={styles.editorialImg} />
              </motion.div>

              <motion.div
                className={styles.editorialContent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { staggerChildren: 0.25, duration: 1.4, ease: "easeOut", delayChildren: 0.4 } }
                }}
              >
                <div className={styles.overlineWrapper}>
                  <motion.div
                    variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: "circOut" } } }}
                    className={styles.horizontalMark}
                  />
                  <motion.span variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } } }} className={styles.label}>
                    Официальное Партнерство
                  </motion.span>
                </div>
                <motion.h2
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } } }}
                  className={styles.hugeTitle}
                >
                  Histomer<br />Professional
                </motion.h2>
                <motion.div
                  variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: "circOut" } } }}
                  className={styles.contentDivider}
                />
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className={styles.leadParagraph}>
                  Итальянское дермокосметическое превосходство, подкреплённое более чем 40-летними научными исследованиями.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className={styles.bodyText}>
                  Инновационные формулы регенерируют, балансируют и восстанавливают кожу с помощью растительных стволовых клеток и биостимуляции кожи. Идеально для профессионалов — передовые процедуры, которые преображают даже чувствительную и повреждённую кожу, возвращая ей здоровое и сияющее состояние.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
