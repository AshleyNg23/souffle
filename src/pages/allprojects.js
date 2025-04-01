import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";

import * as styles from "../components/index.module.css"


const projects = [
  { title: 'Anteaters Sprinkling Happiness Club Site', duration: '2022', skills: ['HTML/CSS', 'Weebly', 'Mailchimp'], link: 'https://anteaterssprinklinghappiness.weebly.com/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},
  { title: 'Optimized Search Engine', duration: '2023', skills: ['Python', 'Hash Indexing', 'SEO'], link: 'https://www.wethepixies.net/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},
  { title: 'Portfolio Site V2', duration: '2024', skills: ['React', 'HTML/CSS'], link: 'https://about.mattel.com/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},
  { title: 'Portfolio Site V1', duration: '2023', skills: ['HTML/CSS'], link: 'https://about.mattel.com/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},

];

const AllProjects = () => {

  return (
    <div>
      <NavBar></NavBar>
      <div className={styles.pageHeader}>
                    <a href="/projects" className={styles.link}><h3>&larr; all projects</h3></a>
              </div>
      {/*projects Section */}
      <div className={styles.section}> 
        <div className={styles.sectionContainer}>
        <div className={styles.sectionFooter}>
          {projects.map((proj, index) => (
            <a href={proj.link} target="_blank">
              <div key={index} className={styles.experienceSection}>
            <p className={styles.containerText}><b>-- {proj.duration}</b></p>
            <div className={styles.experienceSection_right}>
              <p className={styles.experienceSection_desc}><b>{proj.title}</b><StaticImage src="../images/link.svg" alt="new page icon" className={styles.link_button}/></p>
              <p>{proj.desc}</p>
                <div className={styles.experienceSection_tags}>
                  {proj.skills.map((skill,i) => (
                    <div className={styles.experienceSection_tags_item}>{skill}</div>
                  ))}
                </div>
            </div>
          </div>
            </a>
          ))}
        </div>
        </div>
      </div>
      <div className={styles.moving_background}></div>
      <div className={styles.moving_background_right}></div>
      <Footer></Footer>
    </div>
    
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default AllProjects
