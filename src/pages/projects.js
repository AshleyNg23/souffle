import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import * as styles from "../components/index.module.css"
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";

import useSound from 'use-sound';
import pop_1 from '../sounds/pop_1.mp3';
import pop_2 from '../sounds/pop_2.mp3';
import click from '../sounds/click.mp3';
import ring from '../sounds/ring.mp3';

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
    { title: 'GIGetter', date: '2025', software: ['React Native', 'Expo', 'Supabase', 'FastAPI', 'Google Gemini'], src: data.gigGetter.childImageSharp.gatsbyImageData, tag: 'Project Manager', desc: 'A gig-finding application for new grads or freelancers that offers reliable contact jobs so individuals can gain experience in any specific skill set while growing their professional career. Partnered with Tata Consultancy Services, GIGetter aims to help workers build their resume with small gigs and projects while also building up financial support for the future, and helping clients connect with skilled workers quickly.', link: 'https://github.com/RyanEurich/ZOTalia-Backend'},
    { title: 'We the Pixies Site', date: '2022-Present', software: ['Laravel', 'PHP', 'Vue', 'MySQL'], src: data.wtp.childImageSharp.gatsbyImageData, tag: 'Web Developer', desc: 'Ongoing passion project to re-write Disney’s Pixie Hollow Online Game, paired with a landing site to help new fairies and users interact with our staff and learn more about our efforts as a whole. The landing site includes user, post, and player ban management for the game itself. ', link: 'https://www.wethepixies.net/'},
    { title: 'Decobook', date: '2024', software: ['React', 'JS'], src: data.decobook.childImageSharp.gatsbyImageData, tag: 'Web Developer', desc: 'An application that helps with utilizing stickers and organizing collections of photos or prints. Similar to a sticker book, Decobook acts as a digital book where you can organize and “place” your stickers in a way without having to physically commit to placement on the real object or book. Decobook allows for multiple digital items, such as water bottles, laptop cases, and more. ', link: 'https://github.com/AshleyNg23/decobook'},
    { title: 'Hello Sweet Days Select', date: '2023', software: ['Python', 'Selenium', 'HTML/CSS'], src: data.hsd.childImageSharp.gatsbyImageData, tag: 'Programmer', desc: 'An online website that allows for Hello Sweet Days players to easily keep track of items that they are looking for, and to save items to trade. With this tool, it can also easily export saved lists into a copy-paste format to streamline trading in-game without needing to manually type item names out. Data for this application was found using a built webscraper that uses Selenium and Python to find items online. ', link: 'https://github.com/AshleyNg23/decobook'},
  ];


  const projectClick = (link) => {
    window.open(link, '_blank');
  };

    const [play] = useSound(pop_1);
    const [play2] = useSound(pop_2);
    const [clickplay] = useSound(click);
    const [ringplay] = useSound(ring);

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
                <div className={styles.projectContainer} onMouseEnter={() => play()} onClick={() => {projectClick(projects[index].link); ringplay()}}>
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
                                              <div className={styles.project_tags_item} onMouseEnter={() => play2()}>{s}</div>
                                            ))}
                                          </div>
                    </div>
                  </div>
              </div>
              <div className={styles.projectContainer} onMouseEnter={() => play()} onClick={() => {projectClick(projects[index + 1].link); ringplay()}}>
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
                                          <div className={styles.project_tags_item} onMouseEnter={() => play2()}>{s}</div>
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