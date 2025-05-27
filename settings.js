require("dotenv").config(); // Load .env file variables

module.exports = {
  // Enable verbose logging for troubleshooting
  verbose: true,

  // User directory (where flows.json and other files are stored)
  userDir: "./",

  // Flow file name from environment or default
  flowFile: process.env.FLOWS || "flows.json",

  // Server port from environment or default 1880
  uiPort: process.env.PORT || 1880,

  // Disable admin authentication for now (can enable later)
  adminAuth: null,

  // Logging configuration
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false,
    },
  },

  // Make environment variables available inside function nodes via env.get()
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
  },
};
