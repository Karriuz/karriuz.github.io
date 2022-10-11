import { useState, useEffect } from 'react';
import styles from '../ProjectSection/ProjectSection.module.scss'

interface SlideshowProps {
    githubLink: string
    demoLink: string
    slidesSrcArray: {
        src: string
        alt: string
    }[]
}

const Slideshow = ({ slidesSrcArray, githubLink, demoLink }: SlideshowProps) => {
    const [slideIndexOne, setSlideIndexOne] = useState(0)
    const [slideIndexTwo, setSlideIndexTwo] = useState(0)

    useEffect(() => {
        updateOne()
        setTimeout(updateTwo, 3000)
    }, [])

    const updateOne = () => {
        setTimeout(() => {
            setSlideIndexOne(prev => prev + 1 >= slidesSrcArray.length ? 0 : prev + 1)
            updateOne()
        }, 6000)
    }

    const updateTwo = () => {
        setTimeout(() => {
            setSlideIndexTwo(prev => prev + 1 >= slidesSrcArray.length ? 0 : prev + 1)
            updateTwo()
        }, 6000)
    }

    return (
        <div className={styles.slideShowWrapper}>
            <div className={styles.slideInfo}>
                <a href={githubLink} target='_blank' rel='noreferrer'>Github <hr /></a>
                <a href={demoLink} target='_blank' rel='noreferrer'>Live demo <hr /></a>
            </div>
            <img
                className={`${styles.imgCarousel} ${styles.transitionCutOut}`}
                src={slidesSrcArray[slideIndexOne].src}
                alt={slidesSrcArray[slideIndexTwo].alt}
            />
            <img
                className={`${styles.imgCarousel} ${styles.transitionFadeOut}`}
                src={slidesSrcArray[slideIndexTwo].src}
                alt={slidesSrcArray[slideIndexTwo].alt}
            />
        </div>
    );
}

export default Slideshow;