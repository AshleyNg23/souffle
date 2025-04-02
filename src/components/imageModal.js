import * as React from "react"
import * as styles from "../components/index.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useSound from 'use-sound';
import pop from '../sounds/closeclick.mp3';



const ImageModal = ({isOpen, onClose, caption, image, type}) => {
    const [closeplay] = useSound(pop);
    if (!isOpen) return null;
    return (
        <div className={styles.imageModal} onClick={() => { closeplay(); onClose(); }}>
            <div className={`${type === 'Website Mockup' ? styles.imageModalContainerRect : styles.imageModalContainerSquare}`}>
                <GatsbyImage image={getImage(image)} alt={caption} className={styles.modalImage} onClick={() => { closeplay(); onClose(); }} />
                <h2>{caption}</h2>
            </div>
        </div>
    );
};

export default ImageModal
