import { Fade } from 'react-slideshow-image';
import styles from '../ProjectSection/ProjectSection.module.scss'
import SlideInfo from './SlideInfo';

interface SlideshowProps {
    githubLink: string
    demoLink: string
    slidesSrcArray: {
        src: string
        srcBlur: string
        alt: string
    }[]
}

const isFirefox = navigator.userAgent.match(/firefox|fxios/i)

const Slideshow = ({ slidesSrcArray, githubLink, demoLink }: SlideshowProps) => {
    return (
        <div className={styles.slideShowWrapper}>
            <SlideInfo
                githubLink={githubLink}
                demoLink={demoLink}
            />
            {isFirefox ?
                <div className={styles.eachSlide}>
                    <img src={slidesSrcArray[0].srcBlur} alt={slidesSrcArray[0].alt} className={styles.imageNormalVersion} />
                </div>
                :
                <Fade
                    arrows={false}
                    duration={4000}
                    transitionDuration={1000}
                    autoplay={true}
                    pauseOnHover={false}
                    easing='cubic'
                >
                    {slidesSrcArray.map(({ src, srcBlur, alt }) => (
                        <div className={styles.eachSlide}>
                            <img src={src} alt={alt} className={styles.imageNormalVersion} />
                            <img src={srcBlur} alt={alt} className={styles.imageBlurVersion} />
                        </div>
                    ))}
                </Fade>}
        </div>
    );
}

export default Slideshow;