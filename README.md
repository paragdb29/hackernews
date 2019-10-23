# The HACHERNEWS API # 
UI techstack used is:
* This project was bootstrapped with [Create React App]
* Redux
* React router dom
* Axios
* React Bootstrap
* Recharts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Below is the app structure:

* components
* containers
* services
* store
* utils

Its divided into three views
* Main - Loading list of top 10 randomly selected stories
* Detail - Loading the detail view of the clicked story having first 10 comments
* Chart - Plotting the top 10 randomly selected stories onto a line chart
The same division has been done for store, whereas the service call have been implemented in hackerNewsApi.js