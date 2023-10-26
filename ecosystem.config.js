module.exports = {
  apps: [
    {
      name: "frontend",
      script: "server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        NODE_PORT: "7000",
      },
    },
  ],
};
