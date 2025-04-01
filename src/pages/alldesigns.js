import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect, useRef } from "react";
import  NavBar  from "../components/navbar";
import Footer from "../components/footer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import ImageModal from "../components/imageModal";

import * as styles from "../components/index.module.css"

const AllDesigns = () => {
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
      { title: 'IrvineHacks 2025 Website', src: data.irvinehacks25.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.irvinehacksZoom.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/mQ2RQLUeSMXCIlNlNqDRj3/IrvineHacks-2025-(Copy)?m=auto&t=ghVooozU6fA0uxbk-1'},
      { title: 'ZotHacks 2023 Website', src: data.zh.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.zh_zoom.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/SpqLXRgSGA9NtBWxWPqkTq/Club-Website-Redesign-(Copy)?m=auto&t=ghVooozU6fA0uxbk-1'},
      { title: 'Hack at UCI Club Site', src: data.club_redesign.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.club_redesign_zoom.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/SpqLXRgSGA9NtBWxWPqkTq/Club-Website-Redesign-(Copy)?m=auto&t=ghVooozU6fA0uxbk-1'},
      { title: 'Spotify App Redesign', src: data.sponsorDeck.childImageSharp.gatsbyImageData, tag: 'Mobile App Design', zoom: data.spotifyZoom.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/oIW8qbBbdEW65Q44e3MpA8/Matcha-Website-Mockup-(Copy)?node-id=0-1&t=RuvXvA97PazlEX8l-1'},
      { title: 'HackNights Graphic', src: data.hackNights.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.hackNights.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/yDqGQhK4htRXaYR6A7UjjK/HackNights-API-(Copy)?m=auto&t=WaiqJDrwcFrxDFdH-1'},
      { title: 'Hack Study Session', src: data.studySesh.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.studySesh.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/MSlkyRQzssRy4GF7fhDK8Z/Study-Session-(Copy)?t=WaiqJDrwcFrxDFdH-1'},
      { title: 'Survive ICS Graphic', src: data.surviveICS.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.surviveICS.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/E1lX1GhiLQcQu8B6pPQapp/How-to-survive-ICS-(Copy)?m=auto&t=WaiqJDrwcFrxDFdH-1'},
      { title: 'WICS Figma Workshop', src: data.WICS.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.WICS.childImageSharp.gatsbyImageData, link: 'https://www.figma.com/design/3xyU2KmW7gpcZ30nDcJgoL/WICS-Figma-Workshop?m=auto&t=WaiqJDrwcFrxDFdH-1'},
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
      {/* Hero Header */}
      <div className={styles.pageHeader}>
              <a href="/designs" className={styles.link}><h3>&larr; all designs</h3></a>
        </div>
        <div className={styles.gallery}> 
            {designs.map((design, index) => (
                <div className={styles.gallery_item}
                key={index} 
                onClick={() => openModal(design.title, design.zoom, design.tag)}>
                    <GatsbyImage image={getImage(design.src)} alt={design.title} className={styles.designImg}/>
                </div>
            ))}
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
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default AllDesigns
