// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Nilay",
  middleName: "",
  lastName: "Shah",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
          url: "https://github.com/nilay1943",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ns19/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/profile.png"),
  imageSize: 325,
  message:
    "My name is Nilay. I’m a graduate of 2023 from Georgia Institute of Technology with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.",
    resume: "https://docs.google.com/document/d/1iadqfY3AhseTexaYSaPUYnpA-ki_3QBrTe6ZAycclJM/edit",
};

const experiences = {
    show: true,
    heading: "Experiences",
    data: [
        {
            role: 'Freelance Website Developer',// Here Add Company Name
            companylogo: require('../assets/img/wordpressLogo.png'),
            date: 'March 2024 – Present',
        },
        {
            role: 'Institute of Nuclear Power Operations - Software Engineering Intern',
            companylogo: require('../assets/img/inpoLogo.png'),
            date: 'Jan 2022 – May 2022',
        },
        {
            role: 'Datascan - Software Engineering Intern',
            companylogo: require('../assets/img/DataScan_Logo.png'),
            date: 'June 2019 – August 2019',
        }
    ]
}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "nilay1943", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["TwitterGPTBot", "CucumberCrashCourse", "Battleship", "WayvSageWeb"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Java", value: 90 },
    { name: "JavaScript", value: 50 },
    { name: "React", value: 40 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Communication", value: 80 },
    { name: "Root Cause Analysis", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Critical Thinking", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nilay1943@gmail.com",
};



// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
