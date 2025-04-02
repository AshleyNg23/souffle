import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";

import * as styles from "../components/index.module.css"

import useSound from 'use-sound';
import pop_1 from '../sounds/pop_1.mp3';
import click from '../sounds/click.mp3';

const projects = [
  { title: 'Anteaters Sprinkling Happiness Club Site', duration: '2022', skills: ['HTML/CSS', 'Weebly', 'Mailchimp'], link: 'https://anteaterssprinklinghappiness.weebly.com/', desc: 'Club website using HTML/CSS hosted on Weebly to host information about our club, board members, and gallery of various club photos'},
  { title: 'Optimized Search Engine', duration: '2024', skills: ['Python', 'Hash Indexing', 'SEO'], link: 'https://github.com/AshleyNg23/search-engine', desc: 'Optimized Search Engine built using SimHash, includes tag weight, and tf-idf ranking. Is able to query 1000+ results in under 0.05ms '},
  { title: 'UCI Web Crawler', duration: '2024', skills: ['Python', 'Selenium'], link: 'https://github.com/AshleyNg23/uci-webcrawler', desc: 'Web Crawler built with python built to crawl the uci domain'},
  { title: 'Spotify Browser', duration: '2024', skills: ['Spotify API', 'React', 'HTML/CSS'], link: 'https://github.com/AshleyNg23/spotify-browser ', desc: 'A website that utilizes the Spotify API that tracks the users’ top songs and allows for users to search for songs and artists'},
  { title: 'Anime Showcase', duration: '2024', skills: ['HTML/CSS', 'Bootstrap'], link: 'https://github.com/AshleyNg23/website_practice ', desc: 'Website made to showcase 3 Anime TV Shows and to practice using Bootstrap'},
  { title: 'Portfolio Site V3', duration: '2024', skills: ['React', 'HTML/CSS'], link: 'https://about.mattel.com/', desc: 'Personal Portfolio built in 2024 using React'},
  { title: 'Portfolio Site V2', duration: '2023', skills: ['HTML/CSS'], link: 'https://github.com/AshleyNg23/portfolio_v2 ', desc: 'Personal Portfolio built in 2023 using HTML/CSS'},
  { title: 'Portfolio Site V1', duration: '2023', skills: ['HTML/CSS'], link: 'https://github.com/AshleyNg23/portfolio_v1 ', desc: 'Personal Portfolio built in 2023 using basic HTML'},
];

const AllProjects = () => {

    const [play] = useSound(pop_1);
    const [clickplay] = useSound(click);

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
              <div key={index} className={styles.experienceSection} onMouseEnter={() => play()} onClick={() => clickplay()}>
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

export default AllProjects
