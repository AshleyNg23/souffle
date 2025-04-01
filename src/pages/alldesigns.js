import * as React from "react"
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
        patient_safety: file(relativePath: { eq: "designs/alldesigns/patient_safety_movie_ash.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          study_sesh: file(relativePath: { eq: "designs/alldesigns/study_sesh_ash.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          org_spotlight: file(relativePath: { eq: "designs/alldesigns/org_spotlight.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          org_spotlight_zoom: file(relativePath: { eq: "designs/alldesigns/org_spotlight_zoom.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          info_sesh: file(relativePath: { eq: "designs/alldesigns/info_sesh.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          vreal: file(relativePath: { eq: "designs/alldesigns/vreal.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          irisHacks: file(relativePath: { eq: "designs/alldesigns/iris_hacks.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          atomics: file(relativePath: { eq: "designs/alldesigns/general_atomics.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
           mobile_toys: file(relativePath: { eq: "designs/alldesigns/mobile_toys_sq.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          mobile_toys_zoom: file(relativePath: { eq: "designs/alldesigns/mobile_toys.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          v1_port: file(relativePath: { eq: "designs/alldesigns/v1_port.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
           v1_port_zoom: file(relativePath: { eq: "designs/alldesigns/v1_port_zoom.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
           v2_port: file(relativePath: { eq: "designs/alldesigns/v2_port.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
           v2_port_zoom: file(relativePath: { eq: "designs/alldesigns/v2_port_zoom.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          gig_getter: file(relativePath: { eq: "designs/alldesigns/gigGetter.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
          gig_getter_zoom: file(relativePath: { eq: "designs/alldesigns/gigGetter_zoom.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
  }`);
    const designs = [
      { title: 'The Pitch Movie Screening Graphic', src: data.patient_safety.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.patient_safety.childImageSharp.gatsbyImageData, },
      { title: 'HackNights Study Session', src: data.study_sesh.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.study_sesh.childImageSharp.gatsbyImageData},
      { title: 'Hack Organizer Spotlight', src: data.org_spotlight.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.org_spotlight_zoom.childImageSharp.gatsbyImageData},
      { title: 'Hack Club Info Session', src: data.info_sesh.childImageSharp.gatsbyImageData, tag: 'Mobile App Design', zoom: data.info_sesh.childImageSharp.gatsbyImageData},
      { title: 'VReal Graphic', src: data.vreal.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.vreal.childImageSharp.gatsbyImageData},
      { title: 'Iris Hacks', src: data.irisHacks.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.irisHacks.childImageSharp.gatsbyImageData},
      { title: 'General Atomics x WICS', src: data.atomics.childImageSharp.gatsbyImageData, tag: 'Social Media Graphic', zoom: data.atomics.childImageSharp.gatsbyImageData},
      { title: 'Mobile Toys App', src: data.mobile_toys.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.mobile_toys_zoom.childImageSharp.gatsbyImageData},
      { title: 'GIGetter App', src: data.gig_getter.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.gig_getter_zoom.childImageSharp.gatsbyImageData},
      { title: 'Version 1 Portfolio', src: data.v1_port.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.v1_port_zoom.childImageSharp.gatsbyImageData},
      { title: 'Version 2 Portfolio', src: data.v2_port.childImageSharp.gatsbyImageData, tag: 'Website Mockup', zoom: data.v2_port_zoom.childImageSharp.gatsbyImageData},
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
