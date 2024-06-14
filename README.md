# portfolio

# 1st Commit-Create React App, layout

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

# 2nd Commit-Home/Jumbotron, About, Portfolio, WebDesign

FRONTEND
folder: components
Jumbotron.js > added
WebsiteCard.js > added

folder: pages
About.js > updated
Home.js > updated & Jumbotron
Portfolio.js > updated
WebDesign.js > updated

# 3rd Commit-backend MongoDB, Portfolio Static Data

Terminal: mkdir backend (Root of portfolio)
cd backend > npm init -y creates {}package.json

BACKEND
folder: models
userModel.js > added
websiteModel.js > added

folder: routes
seedRoutes.js > added

data.js > added (website data)
server.js > added
.env.example > added

FRONTEND
folder: public
images > added images

folder: components
WebsiteCard > added

folder: pages
Portfolio.js > updated

utils.js > added for error handling

# 4th Commit-Admin Login

BACKEND
folder: models
websiteModel > updated for url link

folder: routes
userRoutes > added

data.js > updated with url link
server.js > updated
utils.js > added

FRONTEND
folder: components
(new folder in components) forms
AdminPagination.js > added
Signin.js > added (forms)
Signup.js > added (forms)
AdminRoute.js > added
Header.js > updated for admin

folder: constants
actionTypes.js > added

folder: pages
Home.js > updated with /profile

folder: reducer
useReducer > added

App.js > updated
index.js > updated with StoreProvider
Store.js > added

# 5th Commit-WebsiteList

BACKEND
folder: routes
userRoutes.js > updated
websiteRoutes.js > updated

utils.js > updated

FRONTEND
folder: components
AdminPagination.js > added
LoadingBox.js > added
MessageBox.js > added
ProtectedRoute.js > added

folder: pages
WebsiteList.js > added

folder: reducers
websiteReducer.js > added

App.js > updated
WebsiteList.js > added

# 6th Commit-WebsiteEdit

BACKEND
folder: routes
uploadRoutes.js > added

data.js > updated with new item (teamcode.com)
server.js > updated
mkdir uploads > added to root (this stores images uploads)

FRONTEND
. moved forms into pages from components
app.js > updated

folder: pages
WebsiteEdit.js > added

# 7th Commit-UserList/Edit

BACKEND
folder: routes
userRoutes.js > updated with pagination

FRONTEND
folder: pages
UserList.js > added
UserEdit.js > added

app.js > updated with UserList/userEdit
Store.js > updated

# 8th Commit-Profile

BACKEND
folder: routes
userRoutes.js > updated

FRONTEND
folder: pages
WebsiteEdit.js > updated to fix warning
Profile.js > added

App.js > updated whit ProtectedRoute/Profile

# 9th Commit-Dashboard

BACKEND
folder: routes
summaryRoutes > added

server.js > updated

FRONTEND
. npm i react-google-charts
folder: pages
Dashboard.js > added

App.js > updated with Dashboard

# 10th Commit-Contact/Messages

BACKEND
. npm i nodemailer
.env.example > updated with nodemailer EMAIL

folder: models
messageModel.js > added

folder: routes
messageRoutes.js > added

config.js > added
server.js > updated
utils.js > updated

FRONTEND
folder: components
Header.js > updated with Contact

folder: pages
Contact.js > added
Messages.js > added
Dashboard.js > updated with messages
Home.js > updated for contact page

App.js > updated with Contact/Messages pages

# 11th Commit-FAQ

FRONTEND
folder: components
Footer.js > updated
Header.js > updated

folder: pages
Faq.js > added
Home.js > updated

App.js > updated with Faq
index.css > updated

# 12th Commit-Typewriter-Effect

FRONTEND
folder: components
Jumbotron.js > updated with typewriter-effect

folder: pages
Home.js > updated Jumbotron

index.css > updated with typewriter-effect
