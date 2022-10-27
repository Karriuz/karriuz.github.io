import { Fade } from 'react-slideshow-image';
import styles from '../ProjectSection/ProjectSection.module.scss'
import SlideInfo from './SlideInfo';

interface SlideshowProps {
    githubLink: string
    demoLink: string
    slidesSrcArray: {
        src: string
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
                <div>
                    <img src={slidesSrcArray[0].src} alt={slidesSrcArray[0].alt} />
                </div> :
                <Fade
                    arrows={false}
                    duration={4000}
                    transitionDuration={1000}
                    autoplay={true}
                    pauseOnHover={false}
                    easing='cubic'
                >
                    {slidesSrcArray.map(({ src, alt }) => (
                        <div
                            className={styles.eachSlide}
                            key={src}
                        >
                            <div>
                                <img src={src} alt={alt} />
                            </div>
                        </div>
                    ))}
                </Fade>}
        </div>
    );
}

export default Slideshow;