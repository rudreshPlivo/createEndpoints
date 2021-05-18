const axios = require("axios");
const env = require("./environment");
const agent = require("./endpoint");

//set-up axios defaults
axios.defaults.baseURL = env.baseURL;
axios.defaults.headers.common["Authorization"] = env.auth;
axios.defaults.headers.post["Content-Type"] = "application/json";

//create endpoints
agent();

