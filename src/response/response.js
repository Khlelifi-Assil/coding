const data = [
  {
    id: 1,
    name: "Khelifi Assil",
    image: "https://github.com/Khlelifi-Assil",
    technology: "ReactJs, Javascript",
    country: "Tunisia",
    biography: "I am Full Stack Web Developer",
  },

  {
    id: 2,
    name: "Arseny Boykov",
    image: " ",
    technology: "Python, async.io",
    country: "Russia",
    biography: "Make staff since 2000. Love cakes and beer.",
  },
  {
    id: 3,
    name: "Martyn Son",
    image: " ",
    technology: "Javascript, React, Eslint/Stylelint",
    country: "Russia",
    biography: "Three years experience in web development",
  },

  {
    id: 4,
    name: "Krish",
    image: "",
    technology: "Java, ReactJs, Javascript",
    country: "United States",
    biography: "I am Full Stack Web Developer",
  },

  {
    id: 5,
    name: "Gurpreet Singh",
    image: "",
    technology: "Javascript, ReactJS",
    country: "Germany",
    biography: "Lead Front End Developer",
  },

  {
    id: 6,
    name: "Will",
    image: "",
    technology: "Javascript, Java",
    country: "USA",
    biography:
      "I am Sr Project Manager for the largest entertainment company in the world!",
  },
  {
    id: 7,
    name: "Weje Emmauel",
    image: "",
    technology: "PHP(Laravel), Ruby, React JS",
    country: "Ireland",
    biography: "I'm a software engineer",
  },
  {
    id: 8,
    name: "Matt",
    image: "",
    technology: "Javascript, ReactJS, NodeJS",
    country: "USA",
    biography:
      "I am a university professor with head in the cloud dreams of achieving Financial Independence through Full Stack Web Development.",
  },
  {
    id: 9,
    name: "Saliban",
    image: "",
    technology: "Javascript,React.js",
    country: "Iran",
    biography: "I am a FrontEnd developer",
  },

  {
    id: 10,
    name: "Gabriel",
    image: "",
    technology: "Python",
    country: "United Kingdom",
    biography: "I am study my Master in Computer Science",
  },

  {
    id: 11,
    name: "Haidar Rifki",
    image: "",
    technology: "Javascript, NodeJS, PHP",
    country: "Indonesia",
    biography:
      "I am Software Engineer based in Surakarta, Central Java, Indonesia.",
  },
  {
    id: 12,
    name: "Diego Rondão",
    image: "",
    technology: "C#, JS, PHP",
    country: "SÃO PAULO - BRAZIL",
    biography: "I am Full Stack Web Developer",
  },
  {
    id: 13,
    name: "Meriem Zaid",
    image: "",
    technology: "JavaScript, Python",
    country: "Morocco",
    biography: "I write code for living",
  },
  {
    id: 14,
    name: "Abdellah Ramadan",
    image: "",
    technology: "Laravel, Reactjs, Angular, PHP",
    country: "Cameroon",
    biography: "Software development as a career",
  },
  {
    id: 15,
    name: "Leanne Lacey",
    image: "",
    technology: "JavaScript, Angular, HTML, CSS, SASS, NodeJS", //'Php, Javascript',
    country: "Ireland",
    biography:
      "I'm a Developer from green 'ol Ireland. Working mainly with Angular 2",
  },
  {
    id: 16,
    name: "Waing La Min Lwin",
    image: "",
    technology: "Nodejs, React, Python",
    country: "Myanmar",
    biography: "Software developer focusing on building ML-powered products",
  },
  {
    id: 17,
    name: "Rafidah Affendi",
    image: "",
    technology: "HTML, JavaScript, Python",
    country: "Malaysia",
    biography: "Self-taught Data Scientist",
  },
  {
    id: 18,
    name: "Alandouglas",
    image: "",
    technology: "PHP, Javascript, HTML, CSS, Python",
    country: "Brazil",
    biography: "I am  a jr full-stack dev in formation",
  },
  {
    id: 19,
    name: "Caleb",
    image: "",
    technology: "Javascript, Reactjs, Java, Ruby",
    country: "USA",
    biography: "Junior software developer",
  },
  {
    id: 20,
    name: "Kay Ogunbowale",
    image: "",
    technology: "Nodejs, Android, Java, Javascript",
    country: "Nigeria",
    biography: "Passionate software developer",
  },
  {
    id: 21,
    name: "Razvan Sofian",
    image: "",
    technology: "Python, C++, C#, GDScript",
    country: "Romania",
    biography: "I am a full time student at computer science in Cluj, Romania",
  },

  {
    id: 22,
    name: "Ananda Aguiar",
    image: "",
    technology: "Java, JavaScript, HTML, CSS",
    country: "Brasil",
    biography: "Computer Engineer Student",
  },

  {
    id: 23,
    name: "Celestin Niyonsaba",
    image: "",
    technology: "JavaScript, NodeJS, React, Python",
    country: "Rwanda",
    biography: "Full stack Developer",
  },
];

function getProduct({ startIndex, getCount, filter }, callback) {
  let filteredData = data;
  if (filter) {
    // TODO: filter array and change filteredData
  }
  const result = filteredData.slice(startIndex, startIndex + getCount);
  callback(false, result);

  // additional return
  return result;
}

export default data;
export { data, getProduct };
