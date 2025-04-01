import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import * as styles from "../components/index.module.css"
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      gigGetter: file(relativePath: { eq: "project/gigGetter.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      wtp: file(relativePath: { eq: "project/WeThePixies.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      decobook: file(relativePath: { eq: "project/decobook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      hsd: file(relativePath: { eq: "project/hsdSelect.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
  }
  `);
  const projects = [
    { title: 'GIGetter', date: '2025', software: ['React Native', 'Expo', 'Supabase', 'FastAPI', 'Google Gemini'], src: data.gigGetter.childImageSharp.gatsbyImageData, tag: 'Project Manager', desc: 'Yap yap', link: 'https://github.com/RyanEurich/ZOTalia-Backend'},
    { title: 'We the Pixies Site', date: '2022-Present', software: ['Laravel', 'PHP', 'Vue', 'MySQL'], src: data.wtp.childImageSharp.gatsbyImageData, tag: 'Web Developer', desc: 'Yap yap', link: 'https://www.wethepixies.net/'},
    { title: 'Decobook', date: '2024', software: ['React', 'JS'], src: data.decobook.childImageSharp.gatsbyImageData, tag: 'Web Developer', desc: 'Yap yap', link: 'https://github.com/AshleyNg23/decobook'},
    { title: 'Hello Sweet Days Select', date: '2023', software: ['Python', 'Selenium', 'HTML/CSS'], src: data.hsd.childImageSharp.gatsbyImageData, tag: 'Programmer', desc: 'Yap yap', link: 'https://github.com/AshleyNg23/decobook'},
  ];


  const projectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
<div>
      <NavBar></NavBar>
      <div className={styles.pageHeader}>
        <a href="/" className={styles.link}><h3>&larr; projects</h3></a>
      </div>
      {/* Projects & projects */}
      {projects.map((_, index) => {
        if (index % 2 === 0 && projects[index + 1]) {
          return (
            <div key={index} className={styles.section}>
              <div className={styles.twoColumnSection}>
                <div className={styles.projectContainer} onClick={() => projectClick(projects[index].link)}>
                  <div className={styles.aboutMeHeader}>
                    <h3 className={styles.containerHeader}>-- {projects[index].title}</h3>
                    <GatsbyImage image={getImage(projects[index].src)} alt="bunny resting under a tree drawing" className={styles.projectImg}/>
                  </div>
                  <div className={styles.sectionFooter}>
                    <div className={styles.designText}>
                        <p><b>{projects[index].date}</b></p>
                          <p>{projects[index].tag}</p>
                          <p>{projects[index].desc}</p>
                          <div className={styles.project_tags}>
                                            {projects[index].software.map((s,i) => (
                                              <div className={styles.project_tags_item}>{s}</div>
                                            ))}
                                          </div>
                    </div>
                  </div>
              </div>
              <div className={styles.projectContainer} onClick={() => projectClick(projects[index + 1].link)}>
              <div className={styles.aboutMeHeader}>
                <h3 className={styles.containerHeader}>-- {projects[index + 1].title}</h3>
                <GatsbyImage image={getImage(projects[index + 1].src)} alt="bunny resting under a tree drawing" className={styles.projectImg}/>
              </div>
              <div className={styles.sectionFooter}>
                <div className={styles.designText}>
                    <p><b>{projects[index + 1].date}</b></p>
                      <p>{projects[index + 1].tag}</p>
                      <p>{projects[index + 1].desc}</p>
                      <div className={styles.project_tags}>
                                        {projects[index + 1].software.map((s,i) => (
                                          <div className={styles.project_tags_item}>{s}</div>
                                        ))}
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          );
        }})
      };
      <div className={styles.pageHeader}>
        <a href="/allprojects" className={styles.link}><h3>more projects &rarr;</h3></a>
      </div>
      <div className={styles.moving_background}></div>
      <div className={styles.moving_background_right}></div>
      <Footer></Footer>
    </div>
  );
}

export default Projects