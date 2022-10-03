import React from 'react';
import styles from './App.module.scss'
import NavBar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import { About } from './sections/About/About';
import { Contact } from './sections/Contact/Contact'
import { Projects } from './sections/Projects/Projects'

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Header />
      <main>
        <Projects />
        <div className={styles.backgroundDark}>
          <About />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
