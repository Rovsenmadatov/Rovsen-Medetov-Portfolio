import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/pro1.jpg',
      title: 'Chat-App',
      tags: ['API', 'Unit Testing'],
      projectLink: 'https://chat-app-alpha-umber.vercel.app/'
    },
    {
      imgSrc: '/images/pro2.jpg',
      title: 'Car-Rental',
      tags: ['API', 'TypeScript'],
      projectLink: 'https://github.com/Rovsenmadatov/Car-Rental-App'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Recipe app',
      tags: ['Development', 'API'],
      projectLink: 'https://github.com/Rovsenmadatov/Food-Bs-Project'
    },
    {
      imgSrc: '/images/pro3.jpg',
      title: 'Covid-App',
      tags: ['Web-design', 'Unit Testing'],
      projectLink: 'https://github.com/Rovsenmadatov/COVID-APP'
    },
    {
      imgSrc: '/images/pro5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/Rovsenmadatov/Netflix-Clone'
    },
    {
      imgSrc: '/images/pro4.jpg',
      title: 'Easy-Bank ',
      tags: ['Web-design', 'SCSS'],
      projectLink: 'https://github.com/Rovsenmadatov/Easy-Bank'
    },
  ];

const Work = () => {
  return (
    <section id='work' className='section'>
        <div className='container'>

            <h2 className="headline-2 mb-8">
              My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} key={key} classes="" />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work
