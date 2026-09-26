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

## Run app on local

```Shell
# Command to clone repo
$ git clone git@github.com:iambkv/mern-crash-course.git

# Command to change directory
$ cd mern-crash-course

# Update MongoDB URL in .env file
  MONGO_URI= <Enter MONGODB URL Here>

# Command to set the environment local
$ $env:NODE_ENV="development"

# Command to build app
$ npm run build

# Command to run app
$ npm run start
```


## Run with Docker (manual commands)

Run the commands from the project root, where the `Dockerfile` and `.env` file are located. Make sure `.env` contains a valid `MONGO_URI`. This project connects to that MongoDB URI; it does not start a MongoDB container. If MongoDB is running on your computer, use `host.docker.internal` instead of `localhost` in its URI so the app container can reach it.

```powershell
# Build the image from the Dockerfile. This installs dependencies and builds React,
# but does not start the app.
docker build -t mern-app .

# Run in the foreground. Logs appear here; Ctrl+C stops the container.
# --env-file passes MONGO_URI and other .env variables into the container.
# NODE_ENV=production makes Express serve the built React frontend.
docker run --name mern-app -p 5000:5000 --env-file .env -e NODE_ENV=production mern-app
```

To run it in the background instead, use this run command in place of the one above:

```powershell
# -d runs in the background; --name makes later log/stop commands easier.
docker run -d --name mern-app -p 5000:5000 --env-file .env -e NODE_ENV=production mern-app

# View app logs. Ctrl+C stops following logs, not the container.
docker logs -f mern-app

# Stop and later restart the container.
docker stop mern-app
docker start mern-app
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

## Run with Docker Compose

Compose reads `docker-compose.yml` and applies the build, port, and environment settings declared there. The file uses the Dockerfile to build the image, passes `.env` to the app, and sets `NODE_ENV=production`. It does not start MongoDB; the app connects to the server configured in `MONGO_URI`.

If you started the app using the manual `docker run` command above, stop it first because it is already using port 5000:

```powershell
# Stop the manually-created container if it is running.
docker stop mern-app
```

Then start the application with Compose:

```powershell
# Build the image if needed, then run the app in the foreground.
# Logs appear in this terminal; Ctrl+C stops the Compose app.
docker compose up --build
```

To run in the background and manage it later:

```powershell
# Build if needed and run in the background; the terminal prompt returns.
docker compose up --build -d

# Follow app logs. Ctrl+C stops log-following but leaves the app running.
docker compose logs -f app

# Stop containers but keep them so they can be started again.
docker compose stop
docker compose start

# Stop and remove the Compose containers and its default network.
docker compose down
```

After changing app code, use `docker compose up --build -d` to rebuild and start the updated image. With Compose, you do not need to run a separate `docker build` or type the long `docker run` command; those settings are stored in `docker-compose.yml`.
