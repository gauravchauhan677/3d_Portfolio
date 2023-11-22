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
    carrent,
    jobit,
    tripguide,
    threejs,
    tourTravelHome,
    movixHome,
    youtubeCloneHome,
    restaurantHome,
    gauravPayHome
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "iOS App Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
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
    {
      name: "MongoDB",
      icon: mongodb,
    },
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "IOS APP DEVELOPER | REACTJS DEVELOPER",
      company_name: "Freelance | Self-Employed",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2022 - Oct 2023",
      points: [
        "Collaborated with clients to develop custom iOS solutions, addressing unique business needs.",
        "Participated in hackathons and coding challenges, fostering continuous learning and skill improvement.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Delivered projects on time and within budget, earning positive feedback from satisfied clients.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Startup | Gullak App",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2022 - Oct 2022",
      points: [
        "Developed a cutting-edge financial management mobile application called Gullak using React Native for the frontend and Node.js for the backend.",
        "Led the end-to-end development process, from conceptualization to design, implementation, and testing of the app.",
        "Gained valuable entrepreneurial insights through the startup journey, honing project management and market analysis skills.",
      ],
    },
    {
      title: "iOS App Developer",
      company_name: "IMPACT APP",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2019 - Oct 2021",
      points: [
        "Involved in planning and developing detailed project plans",
        "Collaborated with cross-functional teams to define, design, and ship new features.",
        "Improved product quality through code reviews, writing effective unit tests, and collaborating with QA on implementing automation testing.",
        "Identified and corrected bottlenecks and fixed bugs to improve application performance.",
        "Worked with CoreData, UIKit, Restful API, collections, and Design Patterns.",
        "Worked with Dependency Managers i.e. CocoaPods & third-party libraries.",
      ],
    },
    {
      title: "iOS App Developer Intern",
      company_name: "IMPACT APP",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2019 - Nov 2019",
      points: [
        "Experienced in real-world Programming environments in Swift.",
        "Writing Unit tests in Swift and reporting bugs in the code.",
        "Worked on bug fixing and testing iOS applications",
        " Assisted senior developers in designing and coding iOS applications.",
        "Photo Editor App - You can click the photo or select the photo from your phone & can edit it & can apply filters to it. and the photo is being saved to Coredata.",
      ],
    },
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
      name: "Tour & Travel",
      description:
        "Web-based platform that allows users to search, book, and manage Tour & travel rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tourTravelHome,
      source_code_link: "https://github.com/gauravchauhan677/Tour_Travel",
      website_code_link:"https://tour-travel-theta.vercel.app/",
    },
    {
      name: "Movix.",
      description:
        "Watch trailers, browse movies and actors, save your's favorite movies. Sort the movies by top-rated, In theaters, most popular and more..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: movixHome,
      source_code_link: "https://github.com/gauravchauhan677/movix.",
      website_code_link:"https://movix-seven-lake.vercel.app/",
    },
    {
      name: "Youtube Clone",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: youtubeCloneHome,
      source_code_link: "https://github.com/gauravchauhan677/Youtube_clone",
      website_code_link:"https://youtube-clone-mocha-eta.vercel.app/",
    },
    {
      name: "Restaurant",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: restaurantHome,
      source_code_link: "https://github.com/gauravchauhan677/manchao_restaurant",
      website_code_link:"http://manchao-restaurant.vercel.app/",
    },
    {
      name: "Gaurav FirePay",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gauravPayHome,
      source_code_link: "https://github.com/gauravchauhan677/gaurav_firePay",
      website_code_link:"https://gaurav-fire-pay.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };