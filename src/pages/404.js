import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";
import * as styles from "../components/index.module.css"

const NotFoundPage = () => (
  <div>
    <NavBar></NavBar>
    <div className={styles.pageHeader}>
            <a href="/" className={styles.link}><h3>Page not found!</h3></a>
          </div>
    <div className={styles.moving_background}></div>
      <div className={styles.moving_background_right}></div>
      <Footer></Footer>
  </div>
)

export default NotFoundPage
