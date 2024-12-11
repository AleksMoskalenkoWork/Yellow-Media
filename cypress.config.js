const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('cypress-fail-fast/plugin')(on, config);
      return config;
    },
  },
});
