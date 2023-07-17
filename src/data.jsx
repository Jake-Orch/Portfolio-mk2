import { DiHtml5, DiCss3, DiJsBadge, DiMongodb, DiMysql, DiNodejsSmall, DiReact } from 'react-icons/di';
import images from './assets/images/projects'

export const projects = [
    {
      name: "WizDumb",
      img: images.WizDumb,
      alt: "WizDumb Homepage",
      deployed: "https://wizdumb-app-a832fc305640.herokuapp.com/",
      git: "https://github.com/Cdrcar/Wizdumb",
    },
    {
      name: "Safe Keeping",
      img: images.SafeKeeping,
      alt: "Safe Keeping Homepage",
      deployed: "https://safekeeping.herokuapp.com/",
      git: "https://github.com/Jake-Orch/Project2",
    },
    {
      name: "Weather I Go",
      img: images.WeatherIGo,
      alt: "Weather I Go Homepage",
      deployed: "https://faithscoding.github.io/weather-i-go/",
      git: "https://github.com/FaithsCoding/weather-i-go",
    },
    {
      name: "Note Maker PWA",
      img: images.NoteMakerPWA,
      alt: "Note Maker PWA Homepage",
      deployed: "https://note-maker-pwa-48cf86482d7b.herokuapp.com/",
      git: "https://github.com/Jake-Orch/myNoteMakerPWA",
    },
    {
      name: "Weather Dashboard",
      img: images.WeatherDashboard,
      alt: "Weather Dashboard Homepage",
      deployed: "https://jake-orch.github.io/Weather-dashboard/",
      git: "https://github.com/Jake-Orch/Weather-dashboard",
    },
    {
      name: "Quiz",
      img: images.Quiz,
      alt: "Quiz Homepage",
      deployed: "https://jake-orch.github.io/Quiz/",
      git: "https://github.com/Jake-Orch/Quiz",
    },
  ];

export const skills = [
    {
        id: 1,
        title: 'HTML',
        src: <DiHtml5 className='h-full w-full' />
    },
    {
        id: 2,
        title: 'CSS',
        src: <DiCss3 className='h-full w-full' />
    },
    {
        id: 3,
        title: 'JavaScript',
        src: <DiJsBadge className='h-full w-full' />
    },
    {
        id: 4,
        title: 'mySQL',
        src: <DiMysql className='h-full w-full' />
    },
    {
        id: 5,
        title: 'MongoDB',
        src: <DiMongodb className='h-full w-full' />
    },
    {
        id: 7,
        title: 'Node',
        src: <DiNodejsSmall className='h-full w-full' />
    },
    {
        id: 8,
        title: 'React',
        src: <DiReact className='h-full w-full' />
    }
]

export const attributes = [
    {
        id: 1,
        title: 'Hard Working',
    },
    {
        id: 2,
        title: 'Eager to Learn',
    },
    {
        id: 3,
        title: 'Team Worker',
    },
    {
        id: 4,
        title: 'Friendly',
    },
    {
        id: 5,
        title: 'Attentive',
    },
    {
        id: 6,
        title: 'Fast Learner',
    },
]

