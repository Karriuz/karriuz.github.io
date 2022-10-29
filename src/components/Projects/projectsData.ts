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

export const projectsData = [
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
      "Task manager is a complex work management tool and so far my largest and most extensive project. The application uses some popular task tracking solutions (to-do list, semi-kanban board, calendar) and allows user to group and display tasks according to user's preferences so that everyone can customize the application depending on their needs. Additionally, app includes a feature to define larger goals and track their progress. I created it with typescript, react, headless ui library (to ensure proper accessibility and keyboard movement on components like dialogs and popups) and used firebase as a backend (auth & database). Feel free to check live demo and readme on github for more info.",
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
      { src: PW_home, srcBlur: PW_home_Blur, alt: 'Screenshot of pizzeria site home page' },
      { src: PW_Menu, srcBlur: PW_Menu_Blur, alt: 'Screenshort of pizzeria site menu page' },
      { src: PW_home2, srcBlur: PW_home2_Blur, alt: 'Screenshot of pizzera site about section' },
    ],
    title: 'Pizzeria Site',
    githubLink: 'https://github.com/m-jezewski/pizzeria-site-react-mui',
    demoLink: 'https://mjezewski-pizzeria.netlify.app',
    description:
      'Simple pizzeria website. The aim of the project was to create a relatively aesthetic site while learning React, React Router and components from Material Ui v5.',
    techStack: [
      { name: 'Javascript', color: 'black', backgroundColor: '#FFFE27' },
      { name: 'react', backgroundColor: '#282c34', color: '#61dafb' },
      { name: 'react router', backgroundColor: 'white', color: 'black' },
      { name: 'Material Ui v5', color: 'white', backgroundColor: 'royalblue' },
    ],
  },
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
      'Tetris is one of my most interesting applications created using plain javascript. The project was created in my early days of learning js so the code itself is very unreadable, but today I would definitely be able to do it in a much better, cleaner and smarter way. Nevertheless, I decided to share it because I think that the game itself is very interesting, unique and creating it was a lot of fun! I also made for it a really simple express.js backend which connects to the mongoDB database to create a player scoreboard',
    techStack: [
      { name: 'Javascript', color: 'black', backgroundColor: '#FFFE27' },
      { name: 'CSS', color: 'white', backgroundColor: 'royalblue' },
      { name: 'AnimeJs', color: 'white', backgroundColor: '#252423' },
    ],
  },
]
