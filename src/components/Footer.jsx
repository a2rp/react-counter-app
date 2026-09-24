import { createElement } from "react";
import { FaCodepen, FaCoffee, FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiPatreon } from "react-icons/si";
import styles from "./Footer.module.scss";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FaGlobe],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FaEnvelope],
    ["Support", "https://a2rp-donation-page.netlify.app/", FaGlobe],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FaCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", SiPatreon],
];

const Footer = () => (
    <footer className={styles.footer}>
        <p>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p>
        <nav className={styles.links} aria-label="Social and support links">
            {links.map(([label, href, icon]) => (
                <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} aria-label={label} title={label}>
                    {createElement(icon, { "aria-hidden": true })}
                </a>
            ))}
        </nav>
    </footer>
);

export default Footer;
