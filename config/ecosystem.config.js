module.exports = {
  apps: [
    {
      name: "myapp-3",
      script: "app.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: "3808",
      },
    },
  ],

  deploy: {
    production: {
      user: "rizkyathoriq19",
      host: "rizkyathoriq.me",
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
