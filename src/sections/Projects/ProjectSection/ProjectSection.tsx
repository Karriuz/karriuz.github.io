import styles from './ProjectSection.module.scss'

interface ProjectSectionProps {
    title: string
    description: string

}

const ProjectSection = ({ title, description }: ProjectSectionProps) => {
    return (
        <section className={styles.projectSection}>
            <div className={styles.description}>
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
            </div>
            <div className={styles.imgCarousel} />
        </section>
    );
}

export default ProjectSection;