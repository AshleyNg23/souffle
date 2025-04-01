import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react";

import * as styles from "../components/index.module.css"
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";
import ImageModal from "../components/imageModal";
import { StaticImage } from "gatsby-plugin-image"

const Designs = () => {
  const data = useStaticQuery(graphql`
    query {
      hackNights: file(relativePath: { eq: "designs/hacknights_api_ash.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      irvinehacks25: file(relativePath: { eq: "designs/irvinehacks25.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      irvinehacksZoom: file(relativePath: { eq: "designs/irvinehacks_zoom.PNG" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      zh: file(relativePath: { eq: "designs/zothacks.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
        zh_zoom: file(relativePath: { eq: "designs/zothacks_zoom.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      sponsorDeck: file(relativePath: { eq: "designs/sponsor_deck.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      spotifyZoom: file(relativePath: { eq: "designs/spotify_zoom.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      club_redesign: file(relativePath: { eq: "designs/redesign_club.PNG" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
        club_redesign_zoom: file(relativePath: { eq: "designs/clubsite_zoom.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      studySesh: file(relativePath: { eq: "designs/study_session_ash.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      surviveICS: file(relativePath: { eq: "designs/surviveICS_ig_ash.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      WICS: file(relativePath: { eq: "designs/WICS X Design Figma.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);
  const designs = [
    { title: 'IrvineHacks 2025 Website', desc: 'Hack at UCI - 2025', software: 'Figma', src: data.irvinehacks25.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.irvinehacksZoom.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/mQ2RQLUeSMXCIlNlNqDRj3/IrvineHacks-2025-(Copy)?m=auto&t=ghVooozU6fA0uxbk-1'},
    { title: 'ZotHacks 2023 Website', desc: 'Hack at UCI - 2023', software: 'Figma', src: data.zh.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.zh_zoom.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/SpqLXRgSGA9NtBWxWPqkTq/Club-Website-Redesign-(Copy)?m=auto&t=ghVooozU6fA0uxbk-1'},
    { title: 'Hack at UCI Club Site', desc: 'Hack at UCI - 2024', software: 'Figma', src: data.club_redesign.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.club_redesign_zoom.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/SpqLXRgSGA9NtBWxWPqkTq/Club-Website-Redesign-(Copy)?m=auto&t=ghVooozU6fA0uxbk-1'},
    { title: 'Spotify App Redesign', desc: 'Project Management - 2023', software: 'Figma', src: data.sponsorDeck.childImageSharp.gatsbyImageData, tag: 'Mobile App Design', zoom: data.spotifyZoom.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/oIW8qbBbdEW65Q44e3MpA8/Matcha-Website-Mockup-(Copy)?node-id=0-1&t=RuvXvA97PazlEX8l-1'},
    { title: 'HackNights Graphic', desc: 'Hack at UCI - 2024', software: 'Figma', src: data.hackNights.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.hackNights.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/yDqGQhK4htRXaYR6A7UjjK/HackNights-API-(Copy)?m=auto&t=WaiqJDrwcFrxDFdH-1'},
    { title: 'Hack Study Session', desc: 'Hack at UCI - 2024', software: 'Figma', src: data.studySesh.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.studySesh.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/MSlkyRQzssRy4GF7fhDK8Z/Study-Session-(Copy)?t=WaiqJDrwcFrxDFdH-1'},
    { title: 'Survive ICS Graphic', desc: 'Hack at UCI - 2023', software: 'Figma', src: data.surviveICS.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.surviveICS.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/E1lX1GhiLQcQu8B6pPQapp/How-to-survive-ICS-(Copy)?m=auto&t=WaiqJDrwcFrxDFdH-1'},
    { title: 'WICS Figma Workshop', desc: 'Women in Informational and Computer Sciences - 2023', software: 'Figma', src: data.WICS.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.WICS.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/3xyU2KmW7gpcZ30nDcJgoL/WICS-Figma-Workshop?m=auto&t=WaiqJDrwcFrxDFdH-1'},
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    caption: "",
    image: null,
    type: "",
  });

  const openModal = (caption, image, type) => {
    setModalContent({ caption, image, type});
    setIsModalOpen(true);
  };

  return (
<div>
      <NavBar></NavBar>
      <div className={styles.pageHeader}>
        <a href="/" className={styles.link}><h3>&larr; designs</h3></a>
      </div>
      {/* Projects & Designs */}
      {designs.map((_, index) => {
        if (index % 2 === 0 && designs[index + 1]) {
          return (
            <div key={index}className={styles.section}>
        <div className={styles.twoColumnSection}>
          <div className={styles.designContainer}>
            <div className={styles.aboutMeHeader}>
              <h3 className={styles.containerHeader}>-- {designs[index].title}</h3>
              <div onClick={() => openModal(designs[index].title, designs[index].zoom, designs[index].tag)}><GatsbyImage image={getImage(designs[index].src)} alt="bunny resting under a tree drawing" className={styles.designImg}/></div>
            </div>
            <div className={styles.sectionFooter}>
            <div className={styles.designText}>
                <p><b>{designs[index].desc}</b></p>
                  <p>{designs[index].tag}</p>
                  <p>{designs[index].software}<a href={designs[index].link} target="_blank"><StaticImage src="../images/link.svg" alt="new page icon" className={styles.link_button}/></a></p>
            </div>
          </div>
          </div>
          <div className={styles.designContainer}>
            <div className={styles.aboutMeHeader}>
              <h3 className={styles.containerHeader}>-- {designs[index + 1].title}</h3>
              <div onClick={() => openModal(designs[index + 1].title, designs[index + 1].zoom, designs[index + 1].tag)}><GatsbyImage image={getImage(designs[index + 1].src)} alt="bunny resting under a tree drawing" className={styles.designImg}/></div>
            </div>
            <div className={styles.sectionFooter}>
            <div className={styles.designText}>
                <p><b>{designs[index + 1].desc}</b></p>
                  <p>{designs[index + 1].tag}</p>
                  <p>{designs[index + 1].software}<a href={designs[index + 1].link} target="_blank"><StaticImage src="../images/link.svg" alt="new page icon" className={styles.link_button}/></a></p>
            </div>
          </div>
          </div>
        </div>
      </div>
          );
        }})
      };
      <div className={styles.pageHeader}>
              <a href="/alldesigns" className={styles.link}><h3>more designs &rarr;</h3></a>
            </div>
      <ImageModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          caption={modalContent.caption} 
          image={modalContent.image}
          type={modalContent.type}
      />
      <div className={styles.moving_background}></div>
      <div className={styles.moving_background_right}></div>
      <Footer></Footer>
    </div>
  );
}

export default Designs

