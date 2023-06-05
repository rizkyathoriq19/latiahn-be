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
      host: ["192.168.68.103"],
      ref: "origin/master",
      repo: "git@github.com:rizkyathoriq19/latiahn-be.git",
      path: "/var/www/myapp-3",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
}
