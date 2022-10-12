import { Fade } from 'react-slideshow-image';
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

    return (
        <div className={styles.slideShowWrapper}>
            <div className={styles.slideInfo}>
                <a href={githubLink} target='_blank' rel='noreferrer'>Github <hr /></a>
                <a href={demoLink} target='_blank' rel='noreferrer'>Live demo <hr /></a>
            </div>
            <Fade
                arrows={false}
                duration={4000}
                transitionDuration={1000}
                autoplay={true}
                pauseOnHover={false}
                easing='cubic'
            >
                {slidesSrcArray.map(({ src, alt }) => (
                    <div className={styles.eachSlide}>
                        <div>
                            <img src={src} alt={alt} />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
}

export default Slideshow;