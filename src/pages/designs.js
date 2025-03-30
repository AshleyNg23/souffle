import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image"

const Designs = () => (
  <div>
      <NavBar></NavBar>
      <div className={styles.pageHeader}>
        <a href="/"><h3>&larr; designs</h3></a>
      </div>
      {/* Projects & Designs */}
      <div className={styles.section}>
        <div className={styles.twoColumnSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.aboutMeHeader}>
              <h3 className={styles.containerHeader}>-- designs</h3>
              <StaticImage src="../images/landscape.png" alt="bunny resting under a tree drawing" className={styles.columnImg}/>
            </div>
            <div className={styles.sectionFooter}>
            <div className={styles.containerText}>
                <p>I'm a Third year Software Engineering student at UC Irvine and 
                  I'm passionate about software development and learning about project management!!</p>
            </div>
          </div>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.aboutMeHeader}>
              <h3 className={styles.containerHeader}>-- projects</h3>
              <StaticImage src="../images/landscape.png" alt="bunny resting under a tree drawing" className={styles.columnImg}/>
            </div>
            <div className={styles.sectionFooter}>
              <div className={styles.containerText}>
                  <p>I'm a Third year Software Engineering student at UC Irvine and 
                    I'm passionate about software development and learning about project management!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.moving_background}></div>
      <div className={styles.moving_background_right}></div>
      <Footer></Footer>
    </div>
)

export default Designs
