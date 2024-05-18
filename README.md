# portfolio

# 1nd Commit-Create React App, layout

. node -v (v18.20.2) // nvm use v18 //
. npx create-react-app frontend
. delete some files:
. App.css
. App.test.css
. Delete contents of index.css
. logo.svg
. setupTests.js
. App.js delete contents:
. import logo from "./logo.svg";
. import "./App.css";
. App.js: import React from "react"; > added
. .gitignore frontend > update with .env

FRONTEND

. {}package.json | npm i:
bootstrap,
react-axios,
bootstrap,
react-bootstrap,
react-helmet,
react-router-bootstrap,
react-router-dom
react-toastify,
typewriter-effect

WARNING:
.env > GENERATE_SOURCEMAP=false (root)
npm install --save-dev @babel/plugin-transform-private-property-in-object
npm install --save-dev @babel/plugin-proposal-private-property-in-object

CREATE HOME PAGE WITH REACT FUNCTIONAL COMPONENTS:
#########################################

// rfc <= this is the one we are using in the lessons
import react from 'react';

export default function Home () {
Return {

<div>Home</Home>
}
};

##########################################

Accounts needed
Canva: https://www.canva.com/ we will use this to create our logo and jumbotron
Express: https://expressjs.com/ we will use to build our backend API application
Mongodb: https://www.mongodb.com/ to save and retrieve data from the database
JWT: https://jwt.io/ for user auth
Nodemailer: https://nodemailer.com/usage/using-gmail/ to email the customer’s purchase receipt, shipping confirmation, respond to questions from contact form
Git: https://github.com for version control
Render: https://render.com/ to host our application online

folder: components
Header.js > added
Footer.js > added
BottomFooter.js > added

folder: pages
About.js > added
Home.js > added
Portfolio.js > added

App.js > updated

.steps for second commit, ect: Open new terminal or command prompt in VSCode

1. git add . (space between add .)
2. git status (shows staged files ready to commit in green)
3. git commit -m "2nd Commit add static data and steps for second commit" (I copy and paste this)
4. git status (tells us that everything is committed "working tree clean" on main branch)
5. git push

GIT 1st Commit
Now you can check repository for updated code.
