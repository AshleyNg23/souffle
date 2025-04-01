import * as React from "react"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>
                <h3>made with &lt;3 in 
                <a href="https://react.dev/" target="_blank" className={styles.link}> React</a> and <a href="https://www.gatsbyjs.com/" target="_blank" className={styles.link}>Gatsby</a>, designed with <a href="https://www.figma.com/" target="_blank" className={styles.link}>Figma</a>, coded in <a href="https://code.visualstudio.com/" target="_blank" className={styles.link}>Visual Studio Code</a></h3>
            </div>
        </div>
    );
};

export default Footer
