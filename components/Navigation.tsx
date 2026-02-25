"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./Navigation.module.css";
import MagneticWrapper from "./MagneticWrapper";

const LANGUAGES = ["ET", "RU", "EN"];

const translations: Record<string, any> = {
    en: {
        about: "About ENVI",
        focus: "Our Focus",
        partners: "Partnership",
        contact: "Contact",
        menu: "MENU",
        close: "CLOSE"
    },
    ru: {
        about: "О ENVI",
        focus: "Наш фокус",
        partners: "Партнёрство",
        contact: "Контакты",
        menu: "МЕНЮ",
        close: "ЗАКРЫТЬ"
    },
    et: {
        about: "ENVI kohta",
        focus: "Meie fookus",
        partners: "Partnerlus",
        contact: "Kontakt",
        menu: "MENÜÜ",
        close: "SULGE"
    }
};

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    // Derive the active language from the Next.js router pathname
    const currentLang = pathname.split("/")[1] || "en";
    const activeLang = currentLang.toUpperCase();

    const switchLanguage = (langCode: string) => {
        const newLang = langCode.toLowerCase();
        // Keep the user on the current section by preserving the hash
        const hash = window.location.hash;
        router.push(`/${newLang}${hash}`);
        setMobileMenuOpen(false);
    };

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1200; // ms for slower, luxurious scroll
            let start: number | null = null;

            const animation = (currentTime: number) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);

                // easeInOutCubic
                const ease = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                window.scrollTo(0, startPosition + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                } else {
                    setMobileMenuOpen(false);
                }
            };

            requestAnimationFrame(animation);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
                <div className={styles.container}>
                    <Link href={`/${currentLang.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className={styles.logoLink}>
                        <Image
                            src="/images/ENVI.webp"
                            alt="ENVI Logo"
                            width={100}
                            height={30}
                            className={styles.logo}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className={styles.desktopNav}>
                        <div className={styles.menuItems}>
                            <MagneticWrapper><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={styles.menuItem}>{translations[currentLang]?.about || translations.en.about}</a></MagneticWrapper>
                            <MagneticWrapper><a href="#focus" onClick={(e) => scrollToSection(e, 'focus')} className={styles.menuItem}>{translations[currentLang]?.focus || translations.en.focus}</a></MagneticWrapper>
                            <MagneticWrapper><a href="#partners" onClick={(e) => scrollToSection(e, 'partners')} className={styles.menuItem}>{translations[currentLang]?.partners || translations.en.partners}</a></MagneticWrapper>
                            <MagneticWrapper><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={styles.menuItem}>{translations[currentLang]?.contact || translations.en.contact}</a></MagneticWrapper>
                        </div>

                        <div className={styles.langSwitch}>
                            {LANGUAGES.map((lang, index) => (
                                <span key={lang} className={styles.langGroup}>
                                    <MagneticWrapper>
                                        <button
                                            className={`${styles.langBtn} ${activeLang === lang ? styles.langActive : ""}`}
                                            onClick={() => switchLanguage(lang)}
                                        >
                                            {lang}
                                        </button>
                                    </MagneticWrapper>
                                    {index < LANGUAGES.length - 1 && <span className={styles.langSep}>|</span>}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? translations[currentLang]?.close || translations.en.close : translations[currentLang]?.menu || translations.en.menu}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                className={styles.mobileMenu}
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : "-100%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.mobileMenuItems}>
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{translations[currentLang]?.about || translations.en.about}</a>
                    <a href="#focus" onClick={(e) => scrollToSection(e, 'focus')}>{translations[currentLang]?.focus || translations.en.focus}</a>
                    <a href="#partners" onClick={(e) => scrollToSection(e, 'partners')}>{translations[currentLang]?.partners || translations.en.partners}</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{translations[currentLang]?.contact || translations.en.contact}</a>

                    <div className={styles.mobileLang}>
                        {LANGUAGES.map((lang, index) => (
                            <span key={lang}>
                                <button
                                    className={`${styles.langBtn} ${activeLang === lang ? styles.langActive : ""}`}
                                    onClick={() => switchLanguage(lang)}
                                >
                                    {lang}
                                </button>
                                {index < LANGUAGES.length - 1 && <span className={styles.langSep}>|</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}
