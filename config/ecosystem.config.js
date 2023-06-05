module.exports = {
  apps: [
    {
      script: "app.js",
      watch: ".",
    },
    {
      script: "./service-worker/",
      watch: ["./service-worker"],
    },
  ],

  deploy: {
    production: {
      user: "rizkyathoriq19",
      host: "192.168.68.103",
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
