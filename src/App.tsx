import React from 'react';
import styles from './App.module.scss'
import loozak from './assets/l00zak.jpg'
import expand_icon from './assets/expand_icon.svg'
import NavBar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import { Projects } from './sections/Projects/Projects';

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Header />
      <main>
        <Projects />
        <section className={styles.about}></section>
        <section className={styles.contact}></section>
      </main>
    </div>
  );
}

export default App;
