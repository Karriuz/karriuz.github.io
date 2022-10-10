import styles from './Projects.module.scss'
import ProjectSection from './ProjectSection/ProjectSection';
import { projectsData } from './projectsData';

export const Projects = () => {
    return (
        <section className={styles.projects} id='Projects'>
            <div className={styles.innerContainer}>
                <h2>My Projects</h2>
                {projectsData.map((project) =>
                    <ProjectSection
                        project={project}
                    />)}
            </div>
        </section>
    );
}