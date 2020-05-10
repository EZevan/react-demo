## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Preparation

1. JavaScript
2. Html+Css
3. Build Tools: Webpack
4. Install Node: https://nodejs.org/zh-cn/
5. Install cnpx: https://developer.aliyun.com/mirror/NPM?from=tnpm 

## Create First React Project

`npx create-react-app react-demo`

Use the command "**npx create-react-app react-demo**" to create first react project.

* Note: Please run the command "**npm config set registry https://registry.npm.taobao.org**" firstly to switch the packages repository if encounter creating project failed. 


## Project Structure

node_modules: including all kinds of dependencies.
public: various resource file.
src: source code.

## Basic Concept

### jsx syntax
jsx = JavaScript + XML/HTML   
Understand the **jsx** syntax: "< >" token will be resolved into HTML syntax, "{ }" token will be resolved into JavaScript syntax.

### Element Render

### Components
1. The suffix of components can be ".js" or ".jsx". Note that there will be syntax prompt within ".jsx" file, but not within ".js" file.  
2. The react project is consist of thousands of components.

### Props
1. DRY: Reusability of the components.
