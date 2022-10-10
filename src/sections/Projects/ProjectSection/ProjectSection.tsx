import Slideshow from './Slideshow';
import styles from './ProjectSection.module.scss'
import { useState } from 'react'

interface ProjectSectionProps {
    project: {
        title: string
        description: string
        githubLink: string
        demoLink: string
        slidesSrcArray: {
            src: string
            alt: string
        }[]
        techStack: { name: string; backgroundColor: string; color: string; }[]
    }
}

const ProjectSection = ({ project: { title, description, githubLink, demoLink, slidesSrcArray, techStack } }: ProjectSectionProps) => {

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
                <div className={styles.techUsed}>
                    {techStack.map(({ backgroundColor, color, name }) =>
                        <div
                            style={{ backgroundColor: backgroundColor, color: color }}
                            className={styles.techBadge} >
                            {name}
                        </div>)}
                </div>
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