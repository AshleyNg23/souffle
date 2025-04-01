import * as React from "react"
import * as styles from "../components/index.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const imageModal = ({isOpen, onClose, caption, image, type}) => {
    if (!isOpen) return null;
    return (
        <div className={styles.imageModal} onClick={onClose}>
            <div className={`${type === 'Website Mockup' ? styles.imageModalContainerRect : styles.imageModalContainerSquare}`}>
                <GatsbyImage image={getImage(image)} alt={caption} className={styles.modalImage} />
                <h2>{caption}</h2>
            </div>
        </div>
    );
};

export default imageModal
