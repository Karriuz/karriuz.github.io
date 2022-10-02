import { useState, useEffect } from 'react';
import styles from '../ProjectSection/ProjectSection.module.scss'

interface SlideshowProps {
    slidesSrcArray: string[]
}

const Slideshow = ({ slidesSrcArray }: SlideshowProps) => {
    const [slideIndexOne, setSlideIndexOne] = useState(0)
    const [slideIndexTwo, setSlideIndexTwo] = useState(0)



    useEffect(() => {
        updateOne()
        setTimeout(updateTwo, 4000)
    }, [])

    const updateOne = () => {
        setTimeout(() => {
            setSlideIndexOne(prev => prev + 1 >= slidesSrcArray.length ? 0 : prev + 1)
            updateOne()
        }, 8000)
    }

    const updateTwo = () => {
        setTimeout(() => {
            setSlideIndexTwo(prev => prev + 1 >= slidesSrcArray.length ? 0 : prev + 1)
            updateTwo()
        }, 8000)
    }

    return (
        <div className={styles.slideShowWrapper}>
            <img
                className={`${styles.transitionCutOut} ${styles.imgCarousel}`}
                src={slidesSrcArray[slideIndexOne]}
                alt=""
            />
            <img className={`${styles.transitionFadeOut} ${styles.imgCarousel}`}
                src={slidesSrcArray[slideIndexTwo]}
                alt=''
            />
        </div>
    );
}

export default Slideshow;