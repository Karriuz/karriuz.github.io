import styles from './Projects.module.scss'
import ProjectSection from './ProjectSection/ProjectSection';

export const Projects = () => {
    return (
        <section className={styles.projects} id='Projects'>
            <div className={styles.innerContainer}>
                <h2>My Projects</h2>
                <ProjectSection
                    title='Task Manager'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur dolorum veniam totam magni minus reiciendis? Temporibus nisi provident necessitatibus. Voluptatem dolorem nobis consectetur debitis nemo laudantium id impedit reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt voluptatum at consequuntur saepe doloremque nostrum nam voluptates blanditiis tempora, rerum doloribus aspernatur alias velit omnis, sunt beatae maxime necessitatibus.'
                />
                <ProjectSection
                    title='Weather Forecast'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur dolorum veniam totam magni minus reiciendis? Temporibus nisi provident necessitatibus. Voluptatem dolorem nobis consectetur debitis nemo laudantium id impedit reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt voluptatum at consequuntur saepe doloremque nostrum nam voluptates blanditiis tempora, rerum doloribus aspernatur alias velit omnis, sunt beatae maxime necessitatibus.'
                />
                <ProjectSection
                    title='Pizzeria Site'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur dolorum veniam totam magni minus reiciendis? Temporibus nisi provident necessitatibus. Voluptatem dolorem nobis consectetur debitis nemo laudantium id impedit reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt voluptatum at consequuntur saepe doloremque nostrum nam voluptates blanditiis tempora, rerum doloribus aspernatur alias velit omnis, sunt beatae maxime necessitatibus.'
                />
                <ProjectSection
                    title='Tetris Game'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur dolorum veniam totam magni minus reiciendis? Temporibus nisi provident necessitatibus. Voluptatem dolorem nobis consectetur debitis nemo laudantium id impedit reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt voluptatum at consequuntur saepe doloremque nostrum nam voluptates blanditiis tempora, rerum doloribus aspernatur alias velit omnis, sunt beatae maxime necessitatibus.'
                />
            </div>
        </section>
    );
}