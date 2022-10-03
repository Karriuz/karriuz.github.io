import Slideshow from './Slideshow';
import styles from './ProjectSection.module.scss'
import { useState } from 'react'

interface ProjectSectionProps {
    title: string
    description: string
    githubLink: string
    demoLink: string
    slidesSrcArray: {
        src: string
        alt: string
    }[]
}

const ProjectSection = ({ title, description, slidesSrcArray, demoLink, githubLink }: ProjectSectionProps) => {

    const [docVisible, setDocVisible] = useState(false)

    document.addEventListener('visibilitychange', () => {
        setDocVisible(document.visibilityState === 'visible' ? true : false)
    })

    return (
        <section className={styles.projectSection}>
            <div className={styles.description}>
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
            </div>
            {(docVisible || !document.hidden)
                && <Slideshow
                    slidesSrcArray={slidesSrcArray}
                    githubLink={githubLink}
                    demoLink={demoLink}
                />}
        </section>
    );
}

export default ProjectSection;