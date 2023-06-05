module.exports = {
  apps: [
    {
      script: "app.js",
      watch: ".",
    },
  ],

  deploy: {
    production: {
      key: "KEY_SSH",
      user: "rizkyathoriq19",
      host: ["192.168.68.103"],
      ssh_options: "StrictHostKeyChecking=no",
      ref: "origin/master",
      repo: "git@github.com:rizkyathoriq19/latiahn-be.git",
      path: "/var/www/myapp-3",
      "pre-setup": "apt-get install git ; ls -la",
      "post-setup": "ls -la",
      "pre-deploy-local": "echo 'This is a local executed command'",
      "post-deploy": "npm install",
    },
  },
}
