interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Propulsion Fluids Notes',
    description: `My attempt at compiling everything I've learned about designing fluids systems
    for stage propulsion systems during my time at SpaceX and MASA. I hope it's useful!`,
    imgSrc: '/static/images/starship.png',
    href: 'https://jaychen35.github.io/propulsion_notes/',
  },
  {
    title: '2024 Videography Portfolio',
    description: `A trip to Taiwan, candid shots of my cozy college town of Ann Arbor, and more: 
    I'm trying to build my filmmaking portfolio, and here's a peak at my work so far!`,
    imgSrc: '/static/images/filmmaking_24.png',
    href: '/blog/2024-videography',
  },
]

export default projectsData
