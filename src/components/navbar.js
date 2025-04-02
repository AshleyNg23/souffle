import * as React from "react"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.leftNav}>
                <a href="/"><h2 className={styles.navText}><StaticImage src="../images/heart-pixel.svg" alt="Pixel heart" className={styles.logo}/>ashley's website</h2></a>
            </div>
        </div>
    );
};

export default NavBar
