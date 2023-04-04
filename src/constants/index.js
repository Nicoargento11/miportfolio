import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    // carrent,
    // jobit,
    henry,
    flexagenda,
    miniworld,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "sobre mi",
      title: "sobre mi",
    },
    {
      id: "Proyectos",
      title: "Proyectos",
    },
    {
      id: "Contacto",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "[Academico] Proyecto Individual",
      company_name: "SoyHenry",
      icon: henry,
      iconBg: "#383E56",
      date: "Enero 2023 - Febrero 2023",
      points: [
        "Resolución de problemas: enfrentarme a muchos desafíos y obstáculos. Aprender a resolver problemas y a encontrar soluciones creativas",
        "Planificación y organización: planificacion y organizacion del tiempo y recursos para poder cumplir con los plazos y objetivos del proyecto",
        "Creatividad: Capacidad de explorar nuevas ideas y soluciones creativas. Aprender a pensar de forma más creativa y a desarrollar nuevas habilidades.",
        "Desarrollo de habilidades técnicas: oportunidad de aprender nuevas habilidades técnicas relacionadas con el desarrollo web.",
      ],
    },
    {
      title: "[Academico] Proyecto grupal",
      company_name: "SoyHenry",
      icon: henry,
      iconBg: "#E6DEDD",
      date: "Febrero 2023 - Marzo 2023",
      points: [
        "Colaboraracion con otros miembros del equipo y trabajo en conjunto hacia un objetivo común.",
        "Comunicacion de manera efectiva con los demás miembros del equipo. Expresion de las ideas de manera clara y concisa. Escucha y retroalimentación constructiva a los demás.",
        "Planificacion y organizacion de tareas y plazos en conjunto. Coordinacion de los esfuerzos de los miembros del equipo y cumplimiento con los plazos establecidos.",
        "Resolucion de conflictos de manera efectiva y trabajo en equipo a pesar de las diferencias.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "mini-world",
      description:
        "aplicacion web basada en ordenamiento, filtrado y busquedas de paises de todo el mundo traidos a traves de una API y guardados en una base de datos relacional",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: 'css',
          color: 'orange-text-gradient',
        }
      ],
      image: miniworld,
      source_code_link: "https://github.com/Nicoargento11/Henry-Pi-countries",
    },
    {
      name: "Flex-agenda",
      description:
        "aplicacion web basada en una agenda virtual, dando asi al profesional la capacidad de llevar un mejor control de sus turnos y clientes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: 'firebase',
          color: 'orange-text-gradient',
        }
      ],
      image: flexagenda,
      source_code_link: "https://github.com/Nicoargento11/FlexAgenda-Front",
    },
    // {
    //   name: "Coming soon",
    //   description:
    //     "coming soon.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };