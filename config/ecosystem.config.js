module.exports = {
  apps: [
    {
      name: "myapp-3", // Nama aplikasi
      script: "./bin/www", // File utama aplikasi
      watch: true,
      exec_mode: "cluster",
      instance: "max",
    },
  ],
  deploy: {
    production: {
      user: "rizkyathoriq19", // Pengguna SSH pada server tujuan
      host: "rizkyathoriq.me", // Alamat IP atau hostname server tujuan
      ref: "origin/main", // Branch atau referensi git yang akan didistribusikan
      repo: "git@github.com:rizkyathoriq19/latiahn-be.git", // URL repositori Git
      path: "./bin/www", // Jalur di server tujuan untuk menyimpan aplikasi
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production", // Perintah yang akan dijalankan setelah proses deploy selesai
    },
  },
}
