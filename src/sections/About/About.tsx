import styles from './About.module.scss'

export const About = () => {
    return (
        <section className={styles.about} id='About'>
            <div>
                <h2>About me</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum sapiente odit corporis exercitationem. Accusamus ut reiciendis tempore at nemo facere aperiam quas? Perferendis explicabo quisquam unde nostrum. Labore, alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam necessitatibus veritatis officia repudiandae quia ab possimus animi fuga dignissimos! Nulla, modi. Tenetur, ipsam ea soluta quod aperiam perspiciatis? Officia!
                </p>
            </div>
            <div className={styles.hereImg} />
        </section>
    );
}