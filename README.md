# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- create react application (using VITE) :
# npm create vite@latest

- Add dependencies (package.json) for Project :
# "dependencies": {
    "@reduxjs/toolkit": "^1.9.1",
    "axios": "^1.2.2",
    "dayjs": "^1.11.7",
    "react": "^18.2.0",
    "react-circular-progressbar": "^2.1.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-infinite-scroll-component": "^6.1.0",
    "react-lazy-load-image-component": "^1.5.6",
    "react-player": "^2.11.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.6.2",
    "react-select": "^5.7.0",
    "sass": "^1.57.1"
  }

- Added Required Images and Project Logo :
- For Data - (Using TMDb API ) : 
# setting it up: 
  - .env --> (through) API Read Access Token -- (instead of) API Key
  - utils folder --> api.js

# Redux Toolkit Setup :
 - install this 2 packages :
    "@reduxjs/toolkit": "^1.9.1",
    "react-redux": "^8.0.5",
- https://redux-toolkit.js.org/tutorials/quick-start

- Creating Components and Pages
- Import export using index.js to App.js 


# React Router Setup : 


# Officail youtube url poster fetch :

  // console.log(data.results);
    // Officail youtube url poster fetch :
    // https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api

# infinte Scrolling :
https://github.com/ankeetmaini/react-infinite-scroll-component#readme