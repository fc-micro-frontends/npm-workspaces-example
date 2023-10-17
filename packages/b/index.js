// npm-workspaces-example/package-b/index.js

const axios = require("axios");

module.exports = async function () {
  const response = await axios.get("https://api.github.com/users");

  return response.data;
};
