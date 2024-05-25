// http://localhost:8000/api/seed
// Go to this link and it will load the data into the database
const bcrypt = require('bcryptjs');
const User = require('./models/userModel.js');
const Website = require('./models/websiteModel.js');

const data = {
  users: [
    {
      name: 'Gabe',
      email: 'gabudemy2@gmail.com',
      password: bcrypt.hashSync('Gabe1234'),
      isAdmin: true,
    },
    {
      name: 'Jack',
      email: 'jack@email.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  websites: [
    {
      name: 'exoticwoodpen.com',
      slug: 'exoticwoodpen',
      image: '/images/ewp.jpg',
      language: 'MERN Stack',
      languageDescription: 'MongoDB, Express, ReactJS, Node.js',
      description:
        "Welcome to ExoticWoodPen, where craftsmanship meets luxury. Our bespoke pens, made from exotic wood, segmented designs, ebonite, and acrylic materials, are the epitome of elegance. Whether you're a fountain pen enthusiast or prefer the smooth glide of a rollerball, ExoticWoodPen offers a unique and exquisite writing instrument for every discerning writer.",
      link: 'https://www.exoticwoodpen.com', // Added link property
    },
    {
      name: 'antiquepox.com',
      slug: 'antiquepox',
      image: '/images/antiques.png',
      language: 'MERN Stack',
      languageDescription: 'MongoDB, Express, ReactJS, Node.js',
      description:
        'Step into the past with AntiquePox, your premier online destination for rare and unique antiques. Our curated collection features timeless treasures from all corners of the globe, each piece with its own rich history and story. Whether you are a seasoned collector or just starting your journey into the world of antiques, AntiquePox offers a selection that promises to captivate and inspire.',
      link: 'https://www.antiquepox.com', // Added link property
    },
    {
      name: 'artperfection.com',
      slug: 'art-perfection',
      image: '/images/art.png',
      language: 'MEAN Stack',
      languageDescription: 'MongoDB, Express, AngularJS, Node.js',
      description:
        "Welcome to Art Perfection, where creativity meets mastery. Our platform is dedicated to showcasing bespoke artworks crafted by talented painters from around the world. Whether you're an art collector or simply appreciate the beauty of fine art, Art Perfection offers a unique and exquisite collection of paintings that cater to every artistic taste. Elevate your space with the elegance and sophistication of our one-of-a-kind artworks.",
      link: 'https://www.artperfection.com', // Added link property
    },
    {
      name: 'homepaintpros.com',
      slug: 'home-paint-pros',
      image: '/images/home-paint.png',
      language: 'LAMP Stack',
      languageDescription: 'Linux, Apache, MySql, PHP, Composer',
      description:
        "Welcome to Home Paint Pros, your premier destination for expert home painting services. Our team of skilled painters is dedicated to transforming your living space with top-quality paint jobs that reflect your unique style. Whether you're looking for a fresh coat of paint or a complete color overhaul, Home Paint Pros delivers exceptional results with attention to detail and professionalism. Elevate your home's aesthetic with our bespoke painting services, tailored to bring your vision to life.",
      link: 'https://www.homepaintpros.com', // Added link property
    },
  ],
};

module.exports = data;
