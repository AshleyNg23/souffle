import * as React from "react"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.leftNav}>
                <h2><StaticImage src="../images/heart-pixel.svg" alt="Pixel heart" className={styles.logo}/>ashley's website</h2>
            </div>
            <div className={styles.rightNav}>
                <StaticImage src="../images/music-note.svg" alt="Pixel heart" />
            </div>
        </div>
    );
};

export default NavBar
