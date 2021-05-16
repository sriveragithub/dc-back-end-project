# Hire Me Please

https://hidden-beyond-92828.herokuapp.com/

What is the project? - This is an app that allow users to create job seeking profiles that can be searched for by hiring managers. The app features a home page, a profile creation page and a page to list and search through all job seekers.

What is the MVP? - Minimum viable product for this app is to create and host an app that has a working database and accomplishes the creation, reading and deletion of data.

What are the nice to haves? - Nice to haves are styling/animation for the app, login functionality, update profile functionality and keyword searching for the bios.

When will the project be complete? - This project will be presented as a part of the DigitalCrafts back-end project on Tuesday, May 18th, 2021.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and [Postgres](https://www.postgresql.org/) installed.

```sh
$ git clone https://github.com/sriveragithub/dc-back-end-project.git # or clone your own fork
$ cd dc-back-end-project
$ npm install
$ cd config
# make edits to config.js for local postgreSQL user/pass
$ cd ..
# Initialize local dev DB with following commands
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
$ npm run dev
```

Your app should now be running on [localhost:5000](http://localhost:5000/).
