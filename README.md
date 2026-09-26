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


## Run with Docker on local

Run these commands from the project root (the folder containing the `Dockerfile`). Docker Desktop must be running, and a `.env` file must exist in this folder with a valid `MONGO_URI`.

This project connects to MongoDB using `MONGO_URI`; the current Docker setup does not start a MongoDB container. If MongoDB is running on your computer instead of a remote host, `localhost` in the URI points to the app container itself. On Docker Desktop, use `host.docker.internal` to reach a MongoDB server on the host.

### 1. Build the image

```powershell
# Build an image named "mern-app" using the Dockerfile in the current folder.
# The Dockerfile installs dependencies and builds the React frontend.
docker build -t mern-app .
```

Run this again after changing code that is copied into the image. Building an image does not start the application.

### 2. Start the application

Choose **one** of these options.

```powershell
# Run in the foreground; application logs appear in this terminal.
# Ctrl+C stops the container.
docker run --name mern-app -p 5000:5000 --env-file .env -e NODE_ENV=production mern-app
```

Or run it in the background:

```powershell
# -d runs detached, so the terminal prompt returns.
# --name gives the container a convenient name for logs/stop/start commands.
# -p maps your computer's port 5000 to the container's port 5000.
# --env-file passes variables from .env (including MONGO_URI) into the container.
# -e enables production mode; the server uses this to serve the built React app.
# No --rm is used, so the stopped container can be started again later.
docker run -d --name mern-app -p 5000:5000 --env-file .env -e NODE_ENV=production mern-app
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

### 3. Check, stop, and restart

```powershell
# Show running containers and their published ports.
docker ps

# Follow application logs. Ctrl+C exits log-following but leaves the container running.
docker logs -f mern-app

# Stop the background container.
docker stop mern-app

# Start the existing container again (it keeps the settings from docker run).
docker start mern-app
```

### 4. Rebuild after code changes or remove Docker resources

```powershell
# Stop and remove the old container before reusing its name and port.
docker stop mern-app
docker rm mern-app

# Build the updated image, then repeat one of the docker run commands above.
docker build -t mern-app .

# List images, including mern-app.
docker images

# Remove the image when you no longer need it (containers using it must be removed first).
docker rmi mern-app
```

The commands above use `Dockerfile` directly; they do not use `docker-compose.yml`.

## Run with Docker Compose

Compose reads `docker-compose.yml`, builds the app image from the `Dockerfile`, passes settings to the container, and publishes port 5000. The Compose file uses `.env` for `MONGO_URI` and sets `NODE_ENV=production`. The app connects to the MongoDB server specified by `MONGO_URI`; Compose does not start a MongoDB container.

If you started the app with `docker run` above, stop that container first because it is already using port 5000:

```powershell
# Stop the manually-created container, if it is running.
docker stop mern-app
```

Then start the app with Compose:

```powershell
# Build the image if needed, then start the app in the foreground.
# Logs appear in this terminal; Ctrl+C stops the Compose app.
docker compose up --build
```

Or run it in the background:

```powershell
# -d runs in the background; --build rebuilds the image if needed.
docker compose up --build -d

# Follow app logs; Ctrl+C stops following logs but leaves the app running.
docker compose logs -f app

# Stop containers but keep them so they can be started again.
docker compose stop

# Start the stopped Compose containers again.
docker compose start

# Stop and remove the Compose containers and its default network.
docker compose down
```

After changing app code, run `docker compose up --build -d` to rebuild and start the updated app. Compose creates its own container and network from the service definition; no separate `docker build` or long `docker run` command is needed for this workflow.
