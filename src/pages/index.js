import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect, useRef } from "react";
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";

import * as styles from "../components/index.module.css"


const experience = [
  { title: 'Student Web Developer - UCI OIT', duration: 'Dec 23 - Present', skills: ['Laravel', 'PHP', 'VueJS', 'GitHub'], link: 'https://www.oit.uci.edu/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},
  { title: 'Web Developer - We The Pixies', duration: 'Oct 23 - Present', skills: ['Laravel', 'PHP', 'GitLab'], link: 'https://www.wethepixies.net/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},
  { title: 'Connected Play Engineer - Mattel Inc.', duration: 'Jun 24 - Aug 24', skills: ['Project Management', 'User Experience', 'Microsoft Excel', 'Miro'], link: 'https://about.mattel.com/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},
  { title: 'Graphics Director - Hack at UCI', duration: 'Apr 23 - Feb 25', skills: ['Figma', 'Krita', 'Slack', 'Graphic Design'], link: 'https://hack.ics.uci.edu/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},
  { title: 'Historian & Newsletter Chair - Anteaters Sprinkling Happiness', duration: 'Sep 22 - Apr 25', skills: ['HTML/CSS', 'Weebly', 'Graphic Design', 'Marketing'], link: 'https://anteaterssprinklinghappiness.weebly.com/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},
  { title: 'Graphics Designer - Women in Informational and Computer Sciences', duration: 'Dec 22 - Dec 23', skills: ['Canva', 'Figma', 'Graphic Design'], link: 'https://wics.ics.uci.edu/', desc: 'Created graphics for social media and to promote workshops to help students practice their technical skills such as using Git, Figma, and networking events'},
];

const IndexPage = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NavBar></NavBar>
      {/* Hero Header */}
      <div className={styles.section}>
        <div className={styles.sectionContainer}>
          <StaticImage src="../images/landscape.png" alt="bunny resting under a tree drawing" className={styles.headerImg}/>
          <StaticImage src="../images/avatar.png" alt="bunny holding a dango stick" className={styles.avatarImg}/>
          <div className={styles.headerText}>
            <h1>Ashley Nguyen <a href className={styles.link}>@souffle</a></h1>
            <h3>project manager & web developer</h3>
         </div>
         <div className={styles.heroHeader_footer}>
          <div className={styles.heroHeader_dropdown}>
            <a href="#aboutMeSection" className={styles.nav}><button className={styles.navButton}>about me</button></a>
            <a href="#experienceSection" className={styles.nav}><button className={styles.navButton}>experience</button></a>
            <a href="#designSection" className={styles.nav}><button className={styles.navButton}>designs & projects</button></a>
          </div>
          <div className={styles.heroHeader_links}>
            <a href="https://github.com/AshleyNg23" target="_blank"><StaticImage src="../images/square-github-brands.svg" alt="github logo" className={styles.logo}/></a>
            <a href="https://www.linkedin.com/in/ashley-nguyen-7108a5253/" target="_blank"><StaticImage src="../images/linkedin-brands.svg" alt="linkedin logo" className={styles.logo}/></a>
          </div>
         </div>
        </div>
      </div>
      {/* About Section */}
      <div className={styles.section}>
        <div className={styles.sectionContainer}>
        <div className={styles.aboutMeHeader} id="aboutMeSection">
          <h3 className={styles.containerHeader}>-- about me</h3>
          <StaticImage src="../images/landscape.png" alt="bunny resting under a tree drawing" className={styles.aboutImg}/>
        </div>
        <div className={styles.sectionFooter}>
          <div className={styles.containerText}>
              <p>I'm a Third year Software Engineering student at UC Irvine and 
                I'm passionate about software development and learning about project management!!</p>
          </div>
        </div>
        </div>
      </div>
      {/*Experience Section */}
      <div className={styles.section}> 
        <div className={styles.sectionContainer}>
        <div className={styles.aboutMeHeader} id="experienceSection">
          <h3 className={styles.containerHeader}>-- experience</h3>
        </div>
        <div className={styles.sectionFooter}>
          {experience.map((exp, index) => (
            <a href={exp.link} target="_blank">
              <div key={index} className={styles.experienceSection}>
            <p className={styles.containerText}><b>-- {exp.duration}</b></p>
            <div className={styles.experienceSection_right}>
              <p className={styles.experienceSection_desc}><b>{exp.title}</b><StaticImage src="../images/link.svg" alt="new page icon" className={styles.link_button}/></p>
              <p>{exp.desc}</p>
                <div className={styles.experienceSection_tags}>
                  {exp.skills.map((skill,i) => (
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
      {/* Projects & Designs */}
      <div className={styles.section}>
        <div className={styles.twoColumnSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.aboutMeHeader}id="designSection">
              <h3 className={styles.containerHeader}>-- designs</h3>
              <StaticImage src="../images/landscape.png" alt="bunny resting under a tree drawing" className={styles.columnImg}/>
            </div>
            <div className={styles.sectionFooter}>
            <div className={styles.containerText}>
                <p>I'm a Third year Software Engineering student at UC Irvine and 
                  I'm passionate about software development and learning about project management!!</p>
                  <a href="/designs" className={styles.link}><p className={styles.viewMore}>view more &rarr;</p></a>
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
                    <a href="/projects" className={styles.link}><p className={styles.viewMore}>view more &rarr;</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pageHeader}>
              <a className={styles.link} onClick={scrollToTop}><h3>&uarr; back to top</h3></a>
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

export default IndexPage
