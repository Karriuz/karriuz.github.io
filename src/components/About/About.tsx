import styles from './About.module.scss'
import myImage from '../../assets/myImage3.webp'

export const About = () => {
    return (
        <section className={styles.about} id='About'>
            <div>
                <h2>About me</h2>
                <p>
                    Hi and thanks for visiting my website!<br />
                    My name is Maciej, and I'm 20 years old computer science student, developing my skills in frontend technologies.
                    <br /> My main goal at the moment, is to continuously expand my knowledge around the React ecosystem, assimilate best practices, and improve as a developer overall.
                    <br /><br />
                    I am currently creating my projects using technologies like <b>typescript</b> and <b>react</b>. At the moment I'm starting to learn next.js framework.<br />
                    Thanks to education in an IT profile at technical school, I also have a set of very basic skills in the fields of; computer hardware, OS administration, local area networks, SQL and PHP.
                    <br /><br />
                    Besides spending my time on coding, I love to play chess and follow chess sports scene, go for long, late-night walks and play competitive computer games.

                </p>
            </div>
            <img src={myImage} className={styles.myImg} width={350} alt='Me' />
        </section>
    );
}