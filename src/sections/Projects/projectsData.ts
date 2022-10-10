import PW_home from '../../assets/PW-home.webp'
import PW_home2 from '../../assets/PW-home2.webp'
import PW_Menu from '../../assets/PW-Menu.webp'
import tetris_1 from '../../assets/tetris-1.webp'
import tetris_2 from '../../assets/tetris-2.webp'
import tetris_3 from '../../assets/tetris-3.webp'
import TM_Board from '../../assets/TM-Board.webp'
import TM_Daycal from '../../assets/TM-Daycal.webp'
import TM_List from '../../assets/TM-List.webp'
import TM_MonthCal from '../../assets/TM-MonthCal.webp'
import WF_Day from '../../assets/WF-Day.webp'
import WF_idk from '../../assets/WF-idk.webp'
import WF_week from '../../assets/WF-week.webp'

export const projectsData = [
  {
    slidesSrcArray: [
      { src: TM_Daycal, alt: 'Task manager app screenshot with day view calendar' },
      { src: TM_List, alt: 'Task manager app screenshot with todo list' },
      { src: TM_MonthCal, alt: 'Task manager app screenshot with month view calendar' },
      { src: TM_Board, alt: 'Task maanger app screenshot with semi-kanban board' },
    ],
    githubLink: 'https://github.com/Karriuz/task-maganer',
    demoLink: 'https://karriuz-taskmanager.netlify.app/',
    title: 'Task Manager',
    description:
      "Task manager is a complex work management tool and so far my largest and most extensive project. Application uses some popular task tracking solutions (to-do list, semi-kanban board, calendar) and allows user to group and display tasks according to user's preferences so that everyone can customize application depending on their needs. Additionally, app includes a feature to define larger goals and track their progress. I created it with typescript, react, headless ui library (to ensure proper accessibility and keyboard movement on components like dialogs and popups) and used firebase as a backend (auth & database). Feel free to check live demo and readme on github for more info.",
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
      { src: WF_week, alt: 'Weather forecast app screenshot' },
      { src: WF_Day, alt: 'Weather forecast app screenshot' },
      { src: WF_idk, alt: 'Weather forecast app screenshot' },
    ],
    title: 'Weather Forecast',
    githubLink: 'https://github.com/Karriuz/weather-forecast-app',
    demoLink: 'https://karriuz-weatherapp.netlify.app/',
    description:
      'Application for checking weather forecast for the next few days in most locations in Poland. The aim of the project was to learn typescript, Tailwind Css and use of fetch api with react. Free API used in this project: https://openweathermap.org/api',
    techStack: [
      { name: 'typescript', backgroundColor: '#3178c6', color: 'white' },
      { name: 'react', backgroundColor: '#282c34', color: '#61dafb' },
      { name: 'Tailwind Css', backgroundColor: '#C7E4EA', color: 'black' },
      { name: 'dayjs', backgroundColor: '#BD491F', color: 'white' },
      { name: 'fetch api', backgroundColor: 'black', color: 'white' },
    ],
  },
  {
    slidesSrcArray: [
      { src: PW_home, alt: 'Screenshot of pizzeria site home page' },
      { src: PW_Menu, alt: 'Screenshort of pizzeria site menu page' },
      { src: PW_home2, alt: 'Screenshot of pizzera site about section' },
    ],
    title: 'Pizzeria Site',
    githubLink: 'https://github.com/Karriuz/pizzeria-site-react-mui',
    demoLink: 'https://karriuz-pizzeria.netlify.app',
    description:
      'One of my first react projects. Sadly you will not find any complicated logic here. Aim of the project was to create a relatively aesthetic site while learning React, React Router and components from Material Ui v5',
    techStack: [
      { name: 'Javascript', color: 'black', backgroundColor: '#FFFE27' },
      { name: 'react', backgroundColor: '#282c34', color: '#61dafb' },
      { name: 'react router', backgroundColor: 'white', color: 'black' },
      { name: 'Material Ui v5', color: 'white', backgroundColor: 'royalblue' },
    ],
  },
  {
    slidesSrcArray: [
      { src: tetris_1, alt: 'Tetris game image' },
      { src: tetris_2, alt: 'Tetris game image' },
      { src: tetris_3, alt: 'Tetris game image' },
    ],
    githubLink: 'https://github.com/Karriuz/Tetris',
    demoLink: 'https://tetris-karrius.netlify.app',
    title: 'Tetris Game',
    description:
      'Tetris is one of my most interesting applications created using plain javascript. Project was created in my early days of learning js so code itself is very ugly and unreadable, but today I would definitely be able to do it in a much better, cleaner and smarter way. Nevertheless, I decided to share with it beacause I think that game itself is very interesting, unique and creating it was a lot of fun! I also made for it really simple express.js backend which connects to the mongoDB database to create a player scoreboard (But to be fair it has zero data validation so really anyone can make a simple post api call with any data)',
    techStack: [
      { name: 'Javascript', color: 'black', backgroundColor: '#FFFE27' },
      { name: 'CSS', color: 'white', backgroundColor: 'royalblue' },
      { name: 'AnimeJs', color: 'white', backgroundColor: '#252423' },
    ],
  },
]
