require('dotenv').config();
module.exports = {
  apps : [{
    name: "Scorpion Test",
    script: 'npm start',
  }],
  deploy : {
    production : {
      user : process.env.DEPLOY_USER,
      host : process.env.DEPLOY_HOST,
      ref  : process.env.DEPLOY_REF,
      key: process.env.DEPLOY_KEY,
      repo : process.env.DEPLOY_REPO,
      path : process.env.DEPLOY_PATH,
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
    }
  }
};
