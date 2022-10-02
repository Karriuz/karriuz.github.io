import Slideshow from '../Slideshow/Slideshow';
import styles from './ProjectSection.module.scss'

interface ProjectSectionProps {
    title: string
    description: string
    slidesSrcArray: string[]
}

const ProjectSection = ({ title, description, slidesSrcArray }: ProjectSectionProps) => {
    return (
        <section className={styles.projectSection}>
            <div className={styles.description}>
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
            </div>
            <Slideshow slidesSrcArray={slidesSrcArray} />
        </section>
    );
}

export default ProjectSection;