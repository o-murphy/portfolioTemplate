/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "o-murphy's portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.", // FIXME
  og: {
    title: "Dmytro Yaroshenko Portfolio",
    type: "website",
    url: "http://www.o-murphy.com/",
  },
};

//Home Page
const greeting = {
  title: "Dmytro Yaroshenko",
  logo_name: "DmytroYaroshenko",
  nickname: "o-murphy",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.", // FIXME
  // resumeLink:    // FIXME
  // "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/o-murphy",
  githubProfile: "https://github.com/o-murphy",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/o-murphy",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dmytro-yaroshenko/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@murphyslawproductions9838",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:thehelixpg@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@o_murphy",
    fontAwesomeIcon: "fa-tiktok", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Telegram",
    link: "https://t.me/beanyone",
    fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#0088cc", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_o_murphy_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Soundcloud",
    link: "https://soundcloud.com/murphythebastard",
    fontAwesomeIcon: "fa-soundcloud", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#F26F23", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Spotify",
    link:
      "https://open.spotify.com/artist/5MMonfU5cEE3wKrAmIUmoi?si=1og0gXxwRVq9XjlJhZYZKw",
    fontAwesomeIcon: "fa-spotify", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#1ED760", // Reference https://simpleicons.org/?q=instagram
  },
  // {
  //   name: "X-Twitter",
  //   link: "",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
];

const skills = {
  data: [
    {
      title: "Desktop and SingleBoard Apps",
      fileName: "DataScienceImg", // FIXME
      skills: [
        "⚡ Complex desktop apps using most popular GUI frameworks",
        "⚡ Kiosk mode apps for single-board computers",
      ],
      softwareSkills: [
        {
          skillName: "Python3",
          fontAwesomeClassname: "skill-icons:python-dark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyQt/PySide",
          // imageSrc: "pyqt-logo.svg",
          imageSrc: "pyqt.png",
          // fontAwesomeClassname: "logos-qt",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Kivy GUI Framework",
          fontAwesomeClassname: "vscode-icons:file-type-kivy",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "KivyMD",
          imageSrc: "kivymd_logo_blue.png",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "opencv-python",
          fontAwesomeClassname: "devicon:opencv",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PySimpleGUI",
          // imageSrc: "pyqt-logo.svg",
          imageSrc: "pysimplegui_logo.svg",
          // fontAwesomeClassname: "logos-qt",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQLite",
          // imageSrc: "pyqt-logo.svg",
          imageSrc: "python_sqlite_icon.svg",
          // fontAwesomeClassname: "logos-qt",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Services", // FIXME
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend with Django & Flask",
        "⚡ Building an architecture of a web service's with RESTfull API",
      ],
      softwareSkills: [
        {
          skillName: "REST",
          imageSrc: "rest-api-icon.svg",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "skill-icons:django",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "skill-icons:flask-light",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            color: "#E34F26",
          },
        },
        // {
        //   skillName: "GoLang",
        //   fontAwesomeClassname: "mdi:language-go",
        //   style: {
        //     color: "#29BEB0",
        //   },
        // },

        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
      ],
    },

    {
      title: "Python for Android",
      fileName: "Py4Android", // FIXME
      skills: [
        "⚡ Designing highly attractive user interface for mobile applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Kivy GUI Framework",
          fontAwesomeClassname: "vscode-icons:file-type-kivy",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "KivyMD",
          imageSrc: "kivymd_logo_blue.png",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "mdi:android",
          style: {
            backgroundColor: "transparent",
            color: "#32DE84",
          },
        },
      ],
    },
    {
      title: "Micropython and Embedded",
      fileName: "Micropython", // FIXME
      skills: [
        "⚡ Creating embedded solutions for microcontrollers using Micropython",
      ],
      softwareSkills: [
        {
          skillName: "Micropython",
          fontAwesomeClassname: "simple-icons:micropython",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "PySerial",
          fontAwesomeClassname: "fluent:serial-port-24-filled",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "GPS Monitoring, Telematics and Fleet Management",
      fileName: "Telematics", // FIXME
      skills: [
        "",
        // "⚡ Creating embedded solutions for microcontrollers using Micropython",
      ],
      softwareSkills: [
        {
          skillName: "Wialon",
          imageSrc: "wialon_logo.png",
        },
        {
          skillName: "Flespi",
          imageSrc: "flespi-logo-big.png",
        },
        {
          skillName: "Teltonika",
          imageSrc: "teltonika-logo.png",
        },
        {
          skillName: "Bitrek",
          imageSrc: "bitrek.png",
        },
        // {
        //   skillName: "Fleetrun",
        //   imageSrc: "fleetrun_logo.png",
        // },
        // {
        //   skillName: "ANT-Logistics",
        //   // fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
  ],
};

const degrees = {
  degrees: [
    // {
    //   title: "Indian Institute of Information Technology Kurnool",
    //   subtitle: "B.Tech. in Computer Engineering",
    //   logo_path: "iiitk_logo.png",
    //   alt_name: "IIITDM Kurnool",
    //   duration: "2016 - 2020",
    //   descriptions: [
    //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
    //   ],
    //   website_link: "http://iiitk.ac.in",
    // },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "", // "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Python Developer",
          company: "Thermal Vision Technologies",
          company_url: "https://archer.ua/",
          logo_path: "archer-logo.png",
          duration: "", // "May 2022 - Aug 2022",
          location: "Kyiv, Ukraine",
          description: "", // "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Python Developer",
          company: "Thermal Vision Technologies",
          company_url: "https://archer.ua/",
          logo_path: "archer-logo.png",
          duration: "", // "May 2022 - Aug 2022",
          location: "Kyiv, Ukraine",
          description: "", // "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Python Developer",
          company: "Thermal Vision Technologies",
          company_url: "https://archer.ua/",
          logo_path: "archer-logo.png",
          duration: "", // "May 2022 - Aug 2022",
          location: "Kyiv, Ukraine",
          description: "", // "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "", // "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "", // "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "blogs_image.svg", //FIXME "animated_ashutosh.png",
    description: "", // "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "", // "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blog.o-murphy.net",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    //   //   subtitle:  "", // "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    //   //   locality: "Kanodar",
    //   //   country: "IN",
    //   //   region: "Gujarat",
    //   //   postalCode: "385520",
    //   //   streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    //   //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
