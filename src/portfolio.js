/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sejal Jaiswal",
  title: "Hi all, I'm Sejal",
  subTitle: emoji(
    "I am a dynamic Full-Stack Developer🚀 skilled in Frontend, Mobile Development (iOS & Android), Backend, and DevOps, dedicated to delivering innovative, scalable, and user-centric solutions with precision and excellence."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zhOuajJYkGPHvwD4l4ZErNQ3EEjiHeXV/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sejal710",
  linkedin: "https://www.linkedin.com/in/sejal-jaiswal-645b4b217",
  gmail: "710sejal@gmail.com",
  "instagram": "https://www.instagram.com/sejal_jaiswal__",
  "whatsapp": '916261019377',
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@710sejal",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "tailwind-css",
      fontAwesomeClassname: "fab fa-css3-alt" // Tailwind doesn't have its own FA icon, using CSS3
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react" // React Native shares the React logo
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react" // Next.js doesn't have its own FA icon, using React
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fas fa-code" // TypeScript doesn't have its own FA icon
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "zod-validation",
      fontAwesomeClassname: "fas fa-check-circle" // Using a generic validation/check icon
    },
    {
      skillName: "redux",
      fontAwesomeClassname: "fas fa-cogs" // Redux doesn't have its own FA icon
    },
    {
      skillName: "webrtc",
      fontAwesomeClassname: "fas fa-video" // WebRTC is related to video/audio
    },
    {
      skillName: "shopify",
      fontAwesomeClassname: "fas fa-store" // Shopify doesn't have its own FA icon
    },
    {
      skillName: "cron-jobs",
      fontAwesomeClassname: "fas fa-clock"
    },
    {
      skillName: "ui-ux-design",
      fontAwesomeClassname: "fas fa-paint-brush"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Masai Bengaluru",
      logo: require("./assets/images/masai.jpeg"),
      subHeader: "Full Stack Web Development (MERN)",
      duration: "September 2022 - June 2023",
    },
    {
      schoolName: "Devi Ahilya Vishwavidyalaya Indore",
      logo: require("./assets/images/davv.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - April 2022",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", // Insert stack or technology you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "90%" // Add your relative proficiency here
    },
    {
      Stack: "DevOps",
      progressPercentage: "80%" // Add your relative proficiency here
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Hypercode",
      companylogo: require("./assets/images/Hypercode.jpg"),
      date: "June 2023 – Present",
      desc: "As an SDE at Hypercode, I specialize in React Native (Android & iOS), React, Next.js, Node.js, AWS (Instances, S3), and GoDaddy. I also work with Flutter to build scalable, user-friendly applications. I collaborate with cross-functional teams to deliver high-performance solutions across mobile, web, and backend platforms.",
      descBullets: [
        "Built and optimized web, Android, and iOS applications for better performance",
        "Managed deployments, S3 buckets, and created domains for efficient and secure rollouts.",
        "Integrated Google subscriptions and AWS Textract to automate workflows."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "I work on some live projects.",
  projects: [
    {
      image: require("./assets/images/gsa.png"),
      projectName: "Get Set Admit",
      projectDesc: " Get Set Admit is a platform designed to simplify the college application process for students. As a full-stack developer, I contributed to both the frontend and backend of the application. I used React for building the web interface and React Native to develop mobile applications for iOS and Android. The backend was built with Node.js, ensuring a smooth and efficient flow of data across the platform. Additionally, I integrated Razorpay for secure payment processing, allowing students to complete their application fees seamlessly.",
      footerLink: [
        // {
        //   name: "Visit",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ],

    },
    {
      image: require("./assets/images/Dandy.png"),
      projectName: "Dandy",
      projectDesc: "Developed a full-stack solution with a React-based website, a React Native mobile app, and a Node.js backend. Deployed the project on an AWS EC2 instance, utilizing S3 buckets for image storage and AWS Textract to extract tables from images into JSON format. Implemented a CI/CD pipeline using a Bitbucket YAML configuration file for seamless deployment and continuous integration, ensuring efficient development and deployment workflows.",
      footerLink: [
        // {
        //   name: "Visit",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ],

    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      // image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@710sejal/what-is-devops-8a4781a95650",
      title: "What is DevOps",
      description:
        `DevOps is a combination of "Development" and "Operations" practices aimed at improving collaboration between software development (Dev) and IT operations (Ops) teams.`
    },
    {
      url: "https://medium.com/@710sejal/what-is-software-development-lifecycle-sdlc-cb23f40ab8fa",
      title: "What is Software Development Lifecycle (SDLC)?",
      description:
        `The Software Development Lifecycle (SDLC) is a structured process used to design, develop, test, deploy, and maintain software efficiently and effectively. It provides a systematic approach to ensure software is high-quality, meets user requirements, and is delivered on time and within budget.`
    },
    {
      url: "https://medium.com/@710sejal/what-is-virtual-machine-231bfbbf49dc",
      title: "What is Virtual Machine?",
      description:
        `A Virtual Machine (VM) is a software-based emulation of a physical computer. It runs an operating system (OS) and applications just like a physical machine, but it is hosted on a physical computer or server. Virtual machines allow multiple operating systems to run on a single physical system, enabling better utilization of hardware resources.`
    },
    {
      url: "https://medium.com/@710sejal/understanding-linux-and-shell-scripting-882fa39dae06",
      title: "Understanding Linux and Shell Scripting",
      description:
        `Linux and shell scripting are essential tools for developers and system administrators. They simplify complex tasks, enhance efficiency, and provide powerful solutions for system management.`
    },
    {
      url: "https://medium.com/@710sejal/understanding-linux-and-shell-scripting-882fa39dae06",
      title: "Live Tracking AWS Projects Using Shell Scripting",
      description:
        `We will walk you through creating a shell script to live track your AWS project, focusing on EC2 instances and S3 buckets.`
    },
    {
      url: "https://medium.com/@710sejal/how-to-integrate-the-github-api-into-your-project-ce9c2a8bff53",
      title: "How to Integrate the GitHub API into Your Project",
      description:
        `The GitHub API is a powerful tool that allows developers to interact with GitHub programmatically. From fetching user data to automating workflows, it simplifies tasks and enhances functionality`
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 6261019377",
  email_address: "710sejal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
