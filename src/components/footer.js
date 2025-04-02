import * as React from "react"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

import useSound from 'use-sound';
import pop_1 from '../sounds/pop_1.mp3';
import ring from '../sounds/ring.mp3'

const Footer = () => {

    const [play] = useSound(pop_1);
    const [ringplay] = useSound(ring);

    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>
                <h3>made with &lt;3 in 
                <a href="https://react.dev/" target="_blank" className={styles.link} onMouseEnter={() => play()} onClick={() => ringplay()}> React</a> and <a href="https://www.gatsbyjs.com/" target="_blank" className={styles.link} onMouseEnter={() => play()} onClick={() => ringplay()}>Gatsby</a>, designed with <a href="https://www.figma.com/" target="_blank" className={styles.link} onMouseEnter={() => play()} onClick={() => ringplay()}>Figma</a>, coded in <a href="https://code.visualstudio.com/" target="_blank" className={styles.link} onMouseEnter={() => play()} onClick={() => ringplay()}>Visual Studio Code</a></h3>
            </div>
        </div>
    );
};

export default Footer
