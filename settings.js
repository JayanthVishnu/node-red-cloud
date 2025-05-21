require("dotenv").config();

module.exports = {
  // Use port from environment variable (Render supplies it)
  uiPort: process.env.PORT || 1880,

  // No admin authentication
  adminAuth: null,

  // Optional credential secret for encrypting credentials
  credentialSecret: process.env.CREDENTIAL_SECRET || null,

  // Use flow file from env or default
  flowFile: process.env.FLOWS || undefined,

  editorTheme: {
    page: {
      title: "Node-RED Cloud",
      favicon: "/favicon.ico",
    },
    header: {
      title: "Node-RED on Render",
      image: null,
    },
    deployButton: {
      type: "simple",
    },
    palette: {
      // Deprecated, replaced with externalModules
    },
    externalModules: {
      palette: {
        allowInstall: true,
      },
    },
    projects: {
      enabled: false,
    },
    codeEditor: {
      lib: "monaco",
      options: {},
    },
  },

  functionGlobalContext: {},

  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false,
    },
  },
};
