import { useRef, useEffect } from 'react'
import styles from './ProjectSection.module.scss'

interface SlideInfoProps {
    githubLink: string
    demoLink: string
}

const isFirefox = navigator.userAgent.match(/firefox|fxios/i)

const SlideInfo = ({ githubLink, demoLink }: SlideInfoProps) => {
    return (
        <div
            className={isFirefox ? styles.slideInfoFirefox : styles.slideInfo}>
            <a href={githubLink} target='_blank' rel='noreferrer'>Github <hr /></a>
            <a href={demoLink} target='_blank' rel='noreferrer'>Live demo <hr /></a>
        </div>
    );
}

export default SlideInfo;