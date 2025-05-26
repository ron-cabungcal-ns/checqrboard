const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.ENV || "dev";
      const envConfig = JSON.parse(fs.readFileSync("env.json"));
      return { ...config, ...envConfig[environment] };
    },
  },
});
