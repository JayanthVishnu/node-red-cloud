module.exports = {
  // Enable verbose logging for troubleshooting
  verbose: true,

  // User directory for Node-RED ('.' means current directory)
  userDir: "./",

  // Flow file name
  flowFile: process.env.FLOWS || "flows.json",

  // Server port from environment variable
  uiPort: process.env.PORT || 1880,

  // Disable adminAuth for now (enable if you add authentication)
  adminAuth: null,

  // Enable editor and runtime logging
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false,
    },
  },

  // Other settings can be added here as needed
};
