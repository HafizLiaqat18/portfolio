module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust according to your project's file types and structure
    "./*.html" // Include all HTML files in the root directory
  ],
  theme: {
    extend: {
      colors:{
        primary: "#3498db",
        secondary:"#2ecc71",
        background:"#f7f7f7",
        textColor:"#333333",
        accentColor :"#e74c3c"
      }
    },
  },
  plugins: [],
};