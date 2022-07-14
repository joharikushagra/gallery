## Gallery App

Check out the hosted version - https://pic0-gallery.netlify.app

Github Link: https://github.com/joharikushagra/gallery

## Steps to setup

### Server

- Create a .env file as follows

```
DB_USER= db username
DB_PWD= db password
PORT=8000
```

- Install dependencies using `npm install`
- Write `node index.js` and your server starts

### Client

- Install dependencies using `npm install`
- Create a .env file as follows

  ```
  REACT_APP_BACKEND_DEV_URI='http://localhost:8000'
  ```

- `npm start`

## Deployment

### Client

#### Create a project on netlify and follow the steps:

- Import the project from github
- Add the base directory as client, build command as `npm run build` and publish directory as client/build in build settings.
- Add the following environment variables
  ```
  CI=false
  REACT_APP_BACKEND_DEV_URI= your deployed backend uri
  ```
- Publish your site

### Server

- Login to heroku and create a project
- Connect your github and choose the project
- Add following as buildpacks
  ```
  https://github.com/timanovsky/subdir-heroku-buildpack.git
  herkou/nodejs
  ```
- Create following config vars

  ```
  DB_USER= db username
  DB_PWD= db password
  PORT=8000
  PROJECT_PATH=server
  ```
- Deploy your project
