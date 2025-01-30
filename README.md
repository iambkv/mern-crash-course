# MERN Crash Course

This is a simple project showcasing the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

- **MongoDB**: Database to store application data.
- **Express.js**: Backend framework to handle API routes.
- **React.js**: Frontend library to build the user interface.
- **Node.js**: Runtime environment for executing server-side JavaScript.

---

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js**: [Download](https://nodejs.org/)
- **MongoDB**: [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn**: Comes with Node.js.

## Installation Steps and running the app

### 1. Clone the repository

## Run app on Local

```Shell
# clone repo
$ git clone git@github.com:iambkv/mern-crash-course.git

# change directory
$ cd mern-crash-course

# Create build folder
$ npm run build

# Run the app
$ npm run start
```

## Run with Docker on local

```Shell
# Command to build
$ docker build -t mern-app .

# Command to run
$ docker run -p 5000:5000 --env-file .env mern-app

# To run in background
$ docker run -p 5000:5000 --env-file .env mern-app

# To Stop
$ docker ps
$ docker stop <container_id>

# To list docker images
$ docker images
```
