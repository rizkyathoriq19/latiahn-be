module.exports = {
  apps: [
    {
      name: "myapp-3", // Nama aplikasi
      script: "app.js", // File utama aplikasi
      instances: "1", // Jumlah instansi aplikasi yang akan dijalankan
      watch: true, // Memantau perubahan file untuk restart otomatis
      max_memory_restart: "1G", // Batas memori untuk restart aplikasi
      env: {
        NODE_ENV: "production", // Environment production
        PORT: 3808, // Port aplikasi
      },
    },
  ],
  deploy: {
    production: {
      user: "rizkyathoriq19", // Pengguna SSH pada server tujuan
      host: "127.0.0.1", // Alamat IP atau hostname server tujuan
      ref: "origin/main", // Branch atau referensi git yang akan didistribusikan
      repo: "git@github.com:rizkyathoriq19/latiahn-be.git", // URL repositori Git
      path: "/var/www/latiahn-be", // Jalur di server tujuan untuk menyimpan aplikasi
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production", // Perintah yang akan dijalankan setelah proses deploy selesai
    },
  },
}
