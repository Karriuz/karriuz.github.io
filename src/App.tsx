import React from 'react';
import styles from './App.module.scss'
import NavBar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import { Projects } from './components/Projects/Projects';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Header />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
