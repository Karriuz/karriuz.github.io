import PW_home from '../../assets/PW-home.webp'
import PW_home_Blur from '../../assets/PW-home-blur.webp'
import PW_home2 from '../../assets/PW-home2.webp'
import PW_home2_Blur from '../../assets/PW-home2-blur.webp'
import PW_Menu from '../../assets/PW-Menu.webp'
import PW_Menu_Blur from '../../assets/PW-Menu-blur.webp'
import tetris_1 from '../../assets/tetris-1.webp'
import tetris_1_Blur from '../../assets/tetris-1-blur.webp'
import tetris_2 from '../../assets/tetris-2.webp'
import tetris_2_Blur from '../../assets/tetris-2-blur.webp'
import tetris_3 from '../../assets/tetris-3.webp'
import tetris_3_Blur from '../../assets/tetris-3-blur.webp'
import TM_Board from '../../assets/TM-Board.webp'
import TM_Board_Blur from '../../assets/TM-Board-blur.webp'
import TM_Daycal from '../../assets/TM-Daycal.webp'
import TM_Daycal_Blur from '../../assets/TM-Daycal-blur.webp'
import TM_List from '../../assets/TM-List.webp'
import TM_List_Blur from '../../assets/TM-List-blur.webp'
import TM_MonthCal from '../../assets/TM-MonthCal.webp'
import TM_MonthCal_Blur from '../../assets/TM-MonthCal-blur.webp'
import WF_Day from '../../assets/WF-Day.webp'
import WF_Day_Blur from '../../assets/WF-Day-blur.webp'
import WF_idk from '../../assets/WF-idk.webp'
import WF_idk_Blur from '../../assets/WF-idk-blur.webp'
import WF_week from '../../assets/WF-week.webp'
import WF_week_Blur from '../../assets/WF-week-blur.webp'
import notes_1 from '../../assets/notes-1.webp'
import notes_1_Blur from '../../assets/notes-1-blur.webp'
import notes_2 from '../../assets/notes-2.webp'
import notes_2_Blur from '../../assets/notes-2-blur.webp'
import notes_3 from '../../assets/notes-3.webp'
import notes_3_Blur from '../../assets/notes-3-blur.webp'

export const projectsData = [
  {
    slidesSrcArray: [
      { src: notes_3, srcBlur: notes_3_Blur, alt: 'MemoPro app screenshot' },
      { src: notes_2, srcBlur: notes_2_Blur, alt: 'MemoPro app screenshot' },
      { src: notes_1, srcBlur: notes_1_Blur, alt: 'MemoPro app screenshot' },
    ],
    githubLink: 'https://github.com/m-jezewski/memo-pro',
    demoLink: 'https://memo-pro.vercel.app/',
    title: 'MemoPro',
    description: 'MemoPro is a note-taking application built with Next.js, Prisma ORM and Docker. With MemoPro, users can easily create, edit, and delete notes, as well as give them titles and sort them in any order they desire. MemoPro also provides a range of functionalities, including user authentication via NextAuth.js and data-fetching with Tanstack React Query, making it a reliable and secure option for note-taking on the go.',
    techStack: [
      { name: 'Next.js', backgroundColor: 'white', color:'black' },
      { name: 'Prisma', backgroundColor: 'rgb(90, 103, 216)', color: 'white' },
      { name: 'Docker', backgroundColor: '#003f8c', color: 'white'},
      { name: 'typescript', backgroundColor: '#3178c6', color: 'white' },
      { name: 'react', backgroundColor: '#282c34', color: '#61dafb' },
      { name: 'NextAuth', backgroundColor: '#9333ea', color: '#99f6e4' },
      { name: 'Tanstack React Query', backgroundColor: '#f59e0b', color: 'black'},
      { name: 'Tailwind Css', backgroundColor: '#C7E4EA', color: 'black' },
      { name: 'Formik', backgroundColor: '#f5e3fd', color: 'black' },
      { name: 'Dnd-kit', backgroundColor: 'black', color: 'white' },
    ]
  },
  {
    slidesSrcArray: [
      { src: TM_Daycal, srcBlur: TM_Daycal_Blur, alt: 'Task manager app screenshot with day view calendar' },
      { src: TM_List, srcBlur: TM_List_Blur, alt: 'Task manager app screenshot with todo list' },
      { src: TM_MonthCal, srcBlur: TM_MonthCal_Blur, alt: 'Task manager app screenshot with month view calendar' },
      { src: TM_Board, srcBlur: TM_Board_Blur, alt: 'Task maanger app screenshot with semi-kanban board' },
    ],
    githubLink: 'https://github.com/m-jezewski/task-manager',
    demoLink: 'https://mjezewski-taskmanager.netlify.app/',
    title: 'Task Manager',
    description:
      "Task Manager is a comprehensive work management tool, and my largest and most extensive project to date. The application offers multiple task tracking solutions including to-do list, kanban board, and calendar. Users can group and display tasks according to their preferences and customize the application to suit their needs. Additionally, the app includes a feature to define larger goals and track their progress. Task Manager is built with TypeScript, React, Headless UI library (for accessibility and keyboard movement on components like dialogs and popups), and Firebase (for authentication and database). Check out the live demo and readme on GitHub for more information.",
    techStack: [
      { name: 'typescript', backgroundColor: '#3178c6', color: 'white' },
      { name: 'react', backgroundColor: '#282c34', color: '#61dafb' },
      { name: 'firebase', backgroundColor: '#FF761C', color: '#454545' },
      { name: 'react router', backgroundColor: 'white', color: 'black' },
      { name: 'Headless UI', backgroundColor: '#111827', color: 'white' },
      { name: 'dayjs', backgroundColor: '#BD491F', color: 'white' },
      { name: 'Sass', color: 'white', backgroundColor: '#bb9097' },
    ],
  },
  {
    slidesSrcArray: [
      { src: WF_week, srcBlur: WF_week_Blur, alt: 'Weather forecast app screenshot' },
      { src: WF_Day, srcBlur: WF_Day_Blur, alt: 'Weather forecast app screenshot' },
      { src: WF_idk, srcBlur: WF_idk_Blur, alt: 'Weather forecast app screenshot' },
    ],
    title: 'Weather Forecast',
    githubLink: 'https://github.com/m-jezewski/weather-forecast-app',
    demoLink: 'https://mjezewski-weatherapp.netlify.app/',
    description:
      "Weather Forecast is an application that allows users to check the weather forecast for the next few days in most locations in Poland. The project's aim was to learn TypeScript, Tailwind CSS, and the use of fetch API with React. Free API used in this project: https://openweathermap.org/api",
    techStack: [
      { name: 'typescript', backgroundColor: '#3178c6', color: 'white' },
      { name: 'react', backgroundColor: '#282c34', color: '#61dafb' },
      { name: 'Tailwind Css', backgroundColor: '#C7E4EA', color: 'black' },
      { name: 'dayjs', backgroundColor: '#BD491F', color: 'white' },
      { name: 'fetch api', backgroundColor: 'black', color: 'white' },
    ],
  },
  // {
  //   slidesSrcArray: [
  //     { src: PW_home, srcBlur: PW_home_Blur, alt: 'Screenshot of pizzeria site home page' },
  //     { src: PW_Menu, srcBlur: PW_Menu_Blur, alt: 'Screenshort of pizzeria site menu page' },
  //     { src: PW_home2, srcBlur: PW_home2_Blur, alt: 'Screenshot of pizzera site about section' },
  //   ],
  //   title: 'Pizzeria Site',
  //   githubLink: 'https://github.com/m-jezewski/pizzeria-site-react-mui',
  //   demoLink: 'https://mjezewski-pizzeria.netlify.app',
  //   description:
  //     "Pizzeria Site is a simple website designed for a fictional pizzeria. The project's aim was to create an aesthetically pleasing site while learning React, React Router, and components from Material UI v5",
  //   techStack: [
  //     { name: 'Javascript', color: 'black', backgroundColor: '#FFFE27' },
  //     { name: 'react', backgroundColor: '#282c34', color: '#61dafb' },
  //     { name: 'react router', backgroundColor: 'white', color: 'black' },
  //     { name: 'Material Ui v5', color: 'white', backgroundColor: 'royalblue' },
  //   ],
  // },
  {
    slidesSrcArray: [
      { src: tetris_1, srcBlur: tetris_1_Blur, alt: 'Tetris game image' },
      { src: tetris_2, srcBlur: tetris_2_Blur, alt: 'Tetris game image' },
      { src: tetris_3, srcBlur: tetris_3_Blur, alt: 'Tetris game image' },
    ],
    githubLink: 'https://github.com/m-jezewski/Tetris',
    demoLink: 'https://mjezewski-tetris.netlify.app',
    title: 'Tetris Game',
    description:
      "Tetris Game is a interesting game that I created using plain JavaScript. Although the code itself is not the highest quality, I decided to include it in my portfolio because I believe the game is fascinating and creating it was a lot of fun! The project also includes a simple Express.js backend that connects to a MongoDB database to create a player scoreboard.",
    techStack: [
      { name: 'Javascript', color: 'black', backgroundColor: '#FFFE27' },
      { name: 'CSS', color: 'white', backgroundColor: 'royalblue' },
      { name: 'AnimeJs', color: 'white', backgroundColor: '#252423' },
    ],
  },
]
