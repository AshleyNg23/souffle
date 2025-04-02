import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";

import useSound from 'use-sound';
import pop_1 from '../sounds/pop_1.mp3';
import pop_2 from '../sounds/pop_2.mp3';
import click from '../sounds/click.mp3';
import ring from '../sounds/ring.mp3'

import * as styles from "../components/index.module.css"


const experience = [
  { title: 'Student Web Developer - UCI OIT', duration: 'Dec 23 - Present', skills: ['Laravel', 'PHP', 'VueJS', 'GitHub'], link: 'https://www.oit.uci.edu/', desc: 'Maintained internal web sites and applications utilized by thousands of UCI staff and students, developed new custom web applications using Laravel, PHP, and Vue Components. Practiced Agile/Scrum development process with Airtable to collaborate with other developers'},
  { title: 'Web Developer - We The Pixies', duration: 'Oct 23 - Present', skills: ['Laravel', 'PHP', 'GitLab'], link: 'https://www.wethepixies.net/', desc: 'Ongoing collaboration with over 20+ staff to re-write Disney’s Pixie Hollow Online game as a passion project. Expanded landing site using Laravel, PHP, and SASS Frameworks Implemented Agile development process using ClickUp to organize tasks with developers and artists. '},
  { title: 'Connected Play Engineer - Mattel Inc.', duration: 'Jun 24 - Aug 24', skills: ['Project Management', 'User Experience', 'Microsoft Excel', 'Miro'], link: 'https://about.mattel.com/', desc: 'Enhanced UI/UX for ongoing Hot Wheel NFT program and collectors website and presented to corresponding stakeholders. Prepared digital assets for delivery and partnered closely with producers to publish digital experiences. Programmed a web-scraper in Python & Selenium to compile entire history of games developed by Mattel'},
  { title: 'Graphics Director - Hack at UCI', duration: 'Apr 23 - Feb 25', skills: ['Figma', 'Krita', 'Slack', 'Graphic Design'], link: 'https://hack.ics.uci.edu/', desc: 'Organized largest Orange County Hackathon hosted for over 500+ students annually. Led a team of other organizers to promote hackathons and plan logistics of events. Developed responsive UI Mockups for quarterly hackathon event sites with Figma and Krita. '},
  { title: 'Historian & Newsletter Chair - Anteaters Sprinkling Happiness', duration: 'Sep 22 - Apr 25', skills: ['HTML/CSS', 'Weebly', 'Graphic Design', 'Marketing'], link: 'https://anteaterssprinklinghappiness.weebly.com/', desc: 'Managed social media and newsletter of over 1000+ members to maintain student retention. Provided branding for the organization’s image and compiled a guide for social media presence. Designed and developed club website using HTML/CSS and Weebly. '},
  { title: 'Graphics Designer - Women in Informational and Computer Sciences', duration: 'Dec 22 - Dec 23', skills: ['Canva', 'Figma', 'Graphic Design'], link: 'https://wics.ics.uci.edu/', desc: 'Collaborated with members to further their technical skills in workshops for Figma and Git and other meetings to support women in the tech industry Created Instagram and Facebook flyers for weekly workshops and networking events'},
];

const skillList = ['C++', 'Python', 'Java', 'JavaScript', 'HTML/CSS', 'React', 'Gatsby', 'Laravel', 'PHP', 'Vue', 'SASS', 'Cypress'];

const IndexPage = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 400)
          }
        }
      }
    }
  `)
  
  const images = data.allFile.nodes;
    const randomIndex = Math.floor(Math.random() * images.length);
    const random_image = getImage(images[randomIndex]);

    const [play] = useSound(pop_1);
    const [play2] = useSound(pop_2);
    const [clickplay] = useSound(click);
    const [ringplay] = useSound(ring);


  return (
    <div>
      <NavBar></NavBar>
      {/* Hero Header */}
      <div className={styles.section}>
        <div className={styles.sectionContainer}>
          <GatsbyImage image={random_image} alt="Random" className={styles.headerImg}/>
          <StaticImage src="../images/avatar.png" alt="bunny holding a dango stick" className={styles.avatarImg}/>
          <div className={styles.headerText}>
            <h1>Ashley Nguyen <a href className={styles.link}>@souffle</a></h1>
            <h3>project manager & web developer</h3>
         </div>
         <div className={styles.heroHeader_footer}>
          <div className={styles.heroHeader_dropdown}>
            <a href="#aboutMeSection" className={styles.nav}><button className={styles.navButton} onMouseEnter={() => play()}>about me</button></a>
            <a href="#experienceSection" className={styles.nav}><button className={styles.navButton} onMouseEnter={() => play()}>experience</button></a>
            <a href="#designSection" className={styles.nav}><button className={styles.navButton} onMouseEnter={() => play()}>designs & projects</button></a>
          </div>
          <div className={styles.heroHeader_links}>
            <a href="https://github.com/AshleyNg23" target="_blank" onMouseEnter={() => play2()} onClick={() => ringplay()}><StaticImage src="../images/square-github-brands.svg" alt="github logo" className={styles.logo}/></a>
            <a href="https://www.linkedin.com/in/ashley-nguyen-7108a5253/" target="_blank" onMouseEnter={() => play2()} onClick={() => ringplay()}><StaticImage src="../images/linkedin-brands.svg" alt="linkedin logo" className={styles.logo}/></a>
          </div>
         </div>
        </div>
      </div>
      {/* About Section */}
      <div className={styles.section}>
        <div className={styles.sectionContainer}>
        <div className={styles.aboutMeHeader} id="aboutMeSection">
          <h3 className={styles.containerHeader}>-- about me</h3>
          <StaticImage src="../images/project/IMG_8692.JPG" alt="bunny resting under a tree drawing" className={styles.aboutImg}/>
        </div>
        <div className={styles.sectionFooter}>
          <div className={styles.containerText}>
              <p>Hi! I’m Ashley, a project manager and a full-stack web developer. I design website mockups, sketch app wireframes, and do frontend and backend web development! My other interests include baking, video games, jfashion, and pink/bunny themes &#128150; I’m currently preparing for my return at Mattel as a TPM!</p>
              <h3>-- my skills</h3>
          <div className={styles.skill_section_tags}>
                  {skillList.map((skill,i) => (
                    <div className={styles.project_tags_item} onMouseEnter={() => play2()}>{skill}</div>
                  ))}
                </div>
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
              <div key={index} className={styles.experienceSection} onMouseEnter={() => play()} onClick={() => ringplay()}>
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
              <StaticImage src="../images/designs/sponsor_deck.png" alt="pink gradient background with artist picture" className={styles.columnImg}/>
            </div>
            <div className={styles.sectionFooter}>
            <div className={styles.containerText}>
                <p>Curious about my creative process? View some of my design projects for websites, apps, and branding. Also view designs ive made for social media and marketing purposes</p>
                  <a href="/designs" className={styles.link} onMouseEnter={() => play()} onClick={() => clickplay()}><p className={styles.viewMore}>view more &rarr;</p></a>
            </div>
          </div>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.aboutMeHeader}>
              <h3 className={styles.containerHeader}>-- projects</h3>
              <StaticImage src="../images/project/decobook.png" alt="green book labeled decobook" className={styles.columnImg}/>
            </div>
            <div className={styles.sectionFooter}>
              <div className={styles.containerText}>
                  <p>Check out some passion projects I’ve worked on to learn new skills and languages, along with team projects I’ve created with peers</p>
                    <a href="/projects" className={styles.link}  onMouseEnter={() => play()} onClick={() => clickplay()}><p className={styles.viewMore}>view more &rarr;</p></a>
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
