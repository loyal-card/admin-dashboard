# Loyal card admin dashboard
## Background
I am a regular coffee consumer and see lots of the coffee shop use paper-based cards to reward customers with regular purchases. There are lots of paper waste of this solution and the data is not tracked and the stamp verification can be hacked easily.
So the idea is to create a digital loyalty card solution to reduce the paper usage that can protect our environment to some extent. Also, as the spreading of the COVID-19, this solution also reduces the unnecessary contact during the business activity as the whole process is contactless. Meanwhile, this digital solution will keep the data for reporting and future big-data analysis for the customer coffee consumption behavior if the data collection is accumulated to a certain amount, and the scan verification on the one time QR code token can make sure the security of the system.
This is a MVP (Most viable product) that verifies that the solution is feasible and makes sure the core functionalities are achieved, there will be an ongoing development roadmap to extend the features of this solution.
The whole solution consists of three components, `core-service` , `admin-dashboard` and `client-mobile-app`.
## Introduction
This`admin-dashboard` will be used by the shop staff to scan the customer generated QR Code while purchase, also the dashboard will provide the report and insights of the sales data.
### Highlights
- This project was bootstrapped with [Create React App]([https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)).
- Make use of Material UI to build the backend component.
- Use JWT for authentication with the backend `core-service`
- Use browser Camara API for the QR Code scanning.
- Deployed to Github pages
## Getting started  
### Prerequisites  
1. Node: any version starting with 10.16.0 or greater  
  - run `node --version` to check current node version  
  - If you need to upgrade or install [NodeJs]([http://nodejs.org/](http://nodejs.org/)) : suggest to install via [Node Version Manager NVM]([https://github.com/creationix/nvm](https://github.com/creationix/nvm))  
2. A clone or download of this repo on your local machine  
### Installation  
1. `cd` to the project root  
2. `npm install`to install the npm dependencies  
### Running locally  
- `npm run start` to start the development server.
### Deployment  
- You can run the `npm run deploy` to deploy the project directly to Github Pages.
- Will integrate Github Action to achive continous deployment to Github Pages (WIP).
