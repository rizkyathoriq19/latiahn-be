module.exports = {
  apps: [
    {
      script: "app.js",
      watch: ".",
    },
  ],

  deploy: {
    production: {
      key: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCnyjjLFMLmOE4dZ6mzFy8uOryMLbOSgYPjZ+PYs1e6YjRDRi3OZZRtPick/ylN9KqcdOdYa8iKWsaFwdgc4e3qIfV7i0GorskCE8fejxUmKq8z0jaUxS+P0IsJ+BVwQmCXDKEmUPiZNk3kikhszpY2W64odSVnzcfZPd693tZb/Mnz38l3rtpzxCYxmYhyXthPLfeO4T6jmBAF94adBlWv4sbUtGpfRKkgwcWvJ/omvrMOwNJ2pn2XQHp2cljIzQD7uI7mo3tmfZR6rEF52wF7cOmGjxnu1hlRW/wD4/ecOkP1MWmUTP5oe9WPRHBPAOjGR9ZX+zWaSAneqPfA8eXDxhZoc63XL+t+BVvUf4zvr2KKjdcZyTRiU/5YiYvy+ji/gN64a2RmSN8K/B39HLO9ZJGP0dssHhwK6S/POgwaOk4HPa2fbwsukVF7u/E5+vCwsijNR7Y+uS81M3calzRece7MMLqSWVdd8j4KN8OFVl1DBxAmWrIbaV9J+jruchs= rizky@DESKTOP-3J3Q961",
      user: "rizkyathoriq19",
      host: ["192.168.68.103"],
      ssh_options: "StrictHostKeyChecking=no",
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
