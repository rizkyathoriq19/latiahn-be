module.exports = {
  apps: [
    {
      script: "app.js",
      watch: ".",
    },
  ],

  deploy: {
    production: {
      user: "rizkyathoriq19",
      host: "125.160.101.13",
      ref: "origin/master",
      repo: "git@github.com:rizkyathoriq19/latiahn-be.git",
      path: "www.rizkyathoriq.me",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
}
