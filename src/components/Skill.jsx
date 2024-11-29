import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/redux.svg',
      label: 'Redux',
      desc: 'State management'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/bootstrap.svg',
      label: 'Bootstrap',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/typescript.svg',
      label: 'TypeScript',
      desc: 'Static Typing'
    },
    {
      imgSrc: '/images/scss.svg',
      label: 'SCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/trello.svg',
      label: 'Trello',
      desc: 'Taskboard'
    }
  ];
  

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 ">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] ">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
          {
            skillItem.map(({imgSrc,label,desc},key)=>(
              <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} classes="" />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skill
