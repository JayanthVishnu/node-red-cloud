// settings.js
module.exports = {
  uiPort: process.env.PORT || 1880, // ✅ Use Render's dynamic port

  adminAuth: null, // You can add admin credentials here if needed

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
      editable: true,
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
