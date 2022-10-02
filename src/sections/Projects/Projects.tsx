import styles from './Projects.module.scss'
import ProjectSection from './ProjectSection/ProjectSection';
import PW_home from '../../assets/PW-home.webp'
import PW_home2 from '../../assets/PW-home2.webp'
import PW_Menu from '../../assets/PW-Menu.webp'
import tetris_1 from '../../assets/tetris-1.webp'
import tetris_2 from '../../assets/tetris-2.webp'
import Tetris_3 from '../../assets/Tetris-3.webp'
import TM_Board from '../../assets/TM-Board.webp'
import TM_Daycal from '../../assets/TM-Daycal.webp'
import TM_List from '../../assets/TM-List.webp'
import TM_MonthCal from '../../assets/TM-MonthCal.webp'
import WF_Day from '../../assets/WF-Day.webp'
import WF_idk from '../../assets/WF-idk.webp'
import WF_week from '../../assets/WF-week.webp'

export const Projects = () => {
    return (
        <section className={styles.projects} id='Projects'>
            <div className={styles.innerContainer}>
                <h2>My Projects</h2>
                <ProjectSection
                    slidesSrcArray={[TM_Daycal, TM_List, TM_MonthCal, TM_Board]}
                    title='Task Manager'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur dolorum veniam totam magni minus reiciendis? Temporibus nisi provident necessitatibus. Voluptatem dolorem nobis consectetur debitis nemo laudantium id impedit reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt voluptatum at consequuntur saepe doloremque nostrum nam voluptates blanditiis tempora, rerum doloribus aspernatur alias velit omnis, sunt beatae maxime necessitatibus.'
                />
                <ProjectSection
                    slidesSrcArray={[WF_week, WF_Day, WF_idk]}
                    title='Weather Forecast'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur dolorum veniam totam magni minus reiciendis? Temporibus nisi provident necessitatibus. Voluptatem dolorem nobis consectetur debitis nemo laudantium id impedit reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt voluptatum at consequuntur saepe doloremque nostrum nam voluptates blanditiis tempora, rerum doloribus aspernatur alias velit omnis, sunt beatae maxime necessitatibus.'
                />
                <ProjectSection
                    slidesSrcArray={[PW_home, PW_Menu, PW_home2]}
                    title='Pizzeria Site'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur dolorum veniam totam magni minus reiciendis? Temporibus nisi provident necessitatibus. Voluptatem dolorem nobis consectetur debitis nemo laudantium id impedit reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt voluptatum at consequuntur saepe doloremque nostrum nam voluptates blanditiis tempora, rerum doloribus aspernatur alias velit omnis, sunt beatae maxime necessitatibus.'
                />
                <ProjectSection
                    slidesSrcArray={[tetris_1, tetris_2, Tetris_3]}
                    title='Tetris Game'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur dolorum veniam totam magni minus reiciendis? Temporibus nisi provident necessitatibus. Voluptatem dolorem nobis consectetur debitis nemo laudantium id impedit reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt voluptatum at consequuntur saepe doloremque nostrum nam voluptates blanditiis tempora, rerum doloribus aspernatur alias velit omnis, sunt beatae maxime necessitatibus.'
                />
            </div>
        </section>
    );
}