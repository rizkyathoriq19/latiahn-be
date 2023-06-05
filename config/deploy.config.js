module.exports = {
  apps: [
    {
      name: "myapp-3",
      script: "app.js",
      instances: "1",
      autorestart: true,
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: "3808",
      },
    },
  ],
}
