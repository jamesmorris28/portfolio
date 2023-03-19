/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "James's Portfolio",
  description:
    "Passionate JavaScript full-stack developer, independent attributer, team member",
  og: {
    title: "James Morris Portfolio",
    type: "website",
    url: "http://JamesMorris.com/",
  },
};

//Home Page
const greeting = {
  title: "James Morris",
  logo_name: "JamesMorris",
  nickname: "james_morris",
  subTitle: "Lead Web Developer",
  resumeLink:
    "https://docs.google.com/document/d/1xUAWgPxYR4z8ggRtYB8WBXk2OMuGNqVPNU8GYW46ITw/edit?usp=sharing",
  portfolio_repository: "https://github.com/jamesmorris28",
  githubProfile: "https://github.com/jamesmorris28/portfolio",
  picture: "profile-picture.jpg",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/James1919",
  // linkedin: "https://www.linkedin.com/in/James-Morris-88710b138/",
  // gmail: "JamesMorris98@gmail.com",
  // gitlab: "https://gitlab.com/JamesMorris98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/James_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  // {
  //   name: "Github",
  //   link: "https://github.com/lang-sky",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jasmorrisconsulting/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:jmconsulting28@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/James_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux, Vue, and Svelte",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "Next.JS",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "simple-icons:vue-dot-js",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on several cloud services",
        "⚡ Hosting and maintaining websites on docker instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "CircleCI",
          fontAwesomeClassname: "simple-icons:circleci",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/James_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@James391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The Art Institute of Pittsburgh",
      subtitle: "Bachelor's in CS",
      logo_path: "logo-art-institutes.svg",
      alt_name: "The Art Institute of Pittsburgh",
      duration: "2009 - 2012",
      descriptions: [
        "⚡ I have studied software engineering subjects",
        "⚡ Apart from this, I have done some design courses",
      ],
      website_link: "https://en.wikipedia.org/wiki/Art_Institute_of_Pittsburgh",
    },
    {
      title: "Howard University",
      // subtitle: "Bachelor's in CS",
      logo_path: "howard_social.png",
      alt_name: "Howard University",
      duration: "2004 - 2008",
      descriptions: ["⚡ I have studied software engineering subjects"],
      website_link: "https://howard.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Research & Prototyping",
      subtitle: "- User Experience",
      logo_path: "uc-san-diego.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/7Z8E7ZSSAXCF",
      alt_name: "UC San Diego",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description: `Lead (FE heavy) fullstack web developer with bachelor of CS and overall 12 years of experience.
    Proven expertise in building websites and backend with modern JavaScript frameworks, TypeScript, and databases(SQL/NoSQL).
    Solid experience as a team lead mentoring team members.
    3 words to define myself: Quality, Efficiency, and Leadership.
    `,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Lead Frontend Engineer",
          company: "Recruitics",
          company_url: "https://www.recruitics.com/",
          logo_path: "recruitics-logo.png",
          duration: "Aug 2021 - Mar 2023",
          location: "New York, NY",
          // description:
          //   "I am working on building dashboard, maintaining landing page. I introduced A/B testing, led junior developers, monitored/updated performance and bugs",
          descriptions: [
            "Built websites using React, Context API, and React Query",
            "Introduced/Implemented React Query with Axios to control app data/states",
            "Introduced React Query Plugins(persistQueryClient, createWebStoragePersistor, and broadcastQueryClient) to sync data across tabs, and faster UI loading experience to improve UX",
            "Built responsive websites with Antd and Styled components",
            "Led/mentored team members",
            "Created React coding style that other team members can follow",
            "Effectively converted business requirements and designs into real web app",
            "Introduced Amplitude to implement A/B testing and user’s behavior insights",
            "Regularly reviewed PRs to give better solution to team members",
            "Built storybook components for visual testing and components documentation",
            "Implemented unit, integration testing and CI/CD with Circle",
          ],
          color: "#0879bf",
        },
        {
          title: "Senior Frontend Engineer",
          company: "Lowes",
          company_url: "https://www.lowes.com/",
          logo_path: "lowes-logo.png",
          duration: "Apr 2020 - May 2021",
          location: "Mooresville, NC",
          descriptions: [
            "Implemented user interfaces using React/Next and Redux",
            "Used Material UI for UI development",
            "Used all modern React skills like Context API, Reducer, and custom hooks",
            "Used Apollo GraphQL for api data fetching",
            "Defined core custom hooks that can be used for the whole project",
            "Built payment form integrated with Paypal and Credit Card",
            "Contributed to mobile application development with React Native",
            "Successfully increased new features and reduced code complexity",
            "Implemented SEO best practices to improve search engine visibility",
            "Used Cypress and Jest for integration/unit testing",
            "Communicated across multiple teams and contributed to backend development with Node/Express and PostgreSQL",
          ],
          color: "#9b1578",
        },
        {
          title: "FullStack web developer",
          company: "Magellan Healthcare",
          company_url: "https://www.magellanhealth.com/",
          logo_path: "magellan-healthcare-logo.png",
          duration: "Nov 2012 - Mar 2019",
          location: "Columbia, MD",
          descriptions: [
            "Built several websites with React and Vue",
            "Used Redux Thunk for async api fetching and global state management",
            "Migrated from REST api to GraphQL",
            "Worked in typical Agile team to define and work for sprint",
            "Improved test coverage from 60% to 85%",
            "Designed and implemented microservices by using cloud run, cloud functions, and cloudtasks",
            "Implemented secrets value management by introducing secret manager",
            "Designed and implemented SQL database",
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_James.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.JamesMorris.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
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
