import styles from "./Footer.module.css";
import Image from "next/image";
import MagneticWrapper from "./MagneticWrapper";
import { usePathname } from "next/navigation";

const translations: Record<string, any> = {
    en: {
        headline: "Ready to escape the ordinary?",
        paragraph: "We’re open to visionary partnerships in premium categories.\nLeave your email and we will contact you shortly regarding partnership opportunities.",
        placeholder: "Your business email",
        button: "Request Partnership Contact",
        contactText: "Contact",
        social: "Social",
        company: "Company",
        location: "Tallinn, Estonia"
    },
    ru: {
        headline: "Готовы вырваться из обыденности?",
        paragraph: "Мы открыты к дальновидным партнёрствам в премиальных категориях. Оставьте свой email — и мы свяжемся с вами в ближайшее время по вопросам партнёрства.",
        placeholder: "Ваш рабочий email",
        button: "Запросить партнёрство",
        contactText: "Контакты",
        social: "Соцсети",
        company: "Компания",
        location: "Таллинн, Эстония"
    },
    et: {
        headline: "Valmis tavalisest välja murdma?",
        paragraph: "Oleme avatud visionäärsetele partnerlussuhetele premium-kategooriates. Jätke oma e-posti aadress ja võtame teiega peagi ühendust seoses partnerlusvõimalustega.",
        placeholder: "Teie äri e-post",
        button: "Taotle partnerlust",
        contactText: "Kontakt",
        social: "Sotsiaalmeedia",
        company: "Ettevõte",
        location: "Tallinn, Eesti"
    }
};

export default function Footer() {
    const pathname = usePathname();
    const currentLang = pathname?.split("/")[1] || "en";
    const t = translations[currentLang] || translations.en;

    return (
        <footer id="contact" className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.header}>
                        <h2>{t.headline}</h2>
                        <p className={styles.subtitle}>
                            {t.paragraph}
                        </p>
                        <form className={styles.form}>
                            <input type="email" placeholder={t.placeholder} className={`${styles.input} interactive`} />
                            <MagneticWrapper><button type="button" className={`${styles.submitBtn} interactive`}>{t.button}</button></MagneticWrapper>
                        </form>
                    </div>

                    <div className={styles.contactGrid}>
                        <div className={styles.contactCol}>
                            <h4>{t.contactText}</h4>
                            <MagneticWrapper className={styles.linkWrapper}><a href="mailto:info@envi.ee" className={`interactive ${styles.link}`}>info@envi.ee</a></MagneticWrapper>
                            <MagneticWrapper className={styles.linkWrapper}><a href="tel:+37256077441" className={`interactive ${styles.link}`}>+372 560 77 441</a></MagneticWrapper>
                        </div>

                        <div className={styles.contactCol}>
                            <h4>{t.social}</h4>
                            <div className={styles.socialIcons}>
                                <MagneticWrapper className={styles.linkWrapper}>
                                    <a href="https://t.me/enviluxe" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Telegram">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.452 8.528L15.632 17.106C15.495 17.733 15.118 17.886 14.596 17.592L11.733 15.483L10.354 16.81C10.201 16.963 10.076 17.088 9.771 17.088L9.975 14.167L15.297 9.362C15.529 9.156 15.247 9.04 14.938 9.246L8.358 13.385L5.534 12.503C4.918 12.311 4.908 11.888 5.663 11.593L16.696 7.341C17.206 7.151 17.652 7.456 17.452 8.528Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </MagneticWrapper>
                                <MagneticWrapper className={styles.linkWrapper}>
                                    <a href="https://wa.me/37256077441" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="WhatsApp">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0C5.373 0 0 5.373 0 12C0 14.135 0.559 16.14 1.542 17.888L0 24L6.25 22.368C7.942 23.407 9.919 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM18.066 16.836C17.818 17.536 16.836 18.118 16.036 18.282C15.491 18.396 14.733 18.494 11.895 17.318C8.258 15.811 5.922 12.086 5.758 11.868C5.594 11.65 4.417 10.086 4.417 8.471C4.417 6.857 5.235 6.071 5.562 5.744C5.848 5.46 6.275 5.341 6.685 5.341C6.816 5.341 6.931 5.346 7.034 5.351C7.362 5.367 7.525 5.388 7.743 5.912C8.016 6.567 8.682 8.192 8.764 8.356C8.846 8.52 8.955 8.738 8.846 8.956C8.737 9.174 8.628 9.278 8.464 9.463C8.301 9.648 8.143 9.796 7.974 9.998C7.821 10.155 7.652 10.325 7.838 10.641C8.023 10.957 8.672 12.016 9.633 12.872C10.875 13.978 11.873 14.332 12.227 14.479C12.5 14.593 12.833 14.566 13.029 14.354C13.28 14.081 13.585 13.623 13.896 13.171C14.114 12.855 14.408 12.817 14.692 12.926C14.975 13.035 16.48 13.777 16.78 13.93C17.08 14.082 17.276 14.158 17.347 14.278C17.418 14.398 17.418 15.014 17.172 15.714L18.066 16.836Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </MagneticWrapper>
                            </div>
                        </div>

                        <div className={styles.contactCol}>
                            <h4>{t.company}</h4>
                            <p className={styles.text}>Enviluxe OÜ</p>
                            <p className={styles.text}>Reg. nr.: 14476580</p>
                            <p className={styles.text}>VAT nr.: EE102882977</p>
                            <p className={styles.text}>{t.location}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>ENVI © 2026</p>
                </div>
            </div>
        </footer>
    );
}
