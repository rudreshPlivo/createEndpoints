const csv = require("@fast-csv/parse");
const axios = require("axios");
const path = require("path");
const env = require("./environment");


//array to read agent names from csv file
let agentNames = [];

module.exports = function() {

  //options to parse csv file
    let agentFileName = `agents.csv`;

    let parserOptions = {
        objectMode: true,
        headers: true,
        trim: true
    }
    console.log(`reading agents file...`);
    //now parse csv file into an array of JSON
    csv.
    parseFile(agentFileName, parserOptions)
    .on("error", error => console.error(`couldn't parse file - ${error}`))
    .on ("data", (data) => agentNames.push(data))
    .on("end", () => createAgents());
}

//default password & application id from environment file
let defaultPassword = env.defaultPw;
let defaultApplication = env.defaultApp; 

function createAgents() {
  console.log(`file read successful...creating endpoints`);
    agentNames.forEach(async (agent) => {
          let url = `/Endpoint/`;
          let data = {
            username: agent.name,
            password: defaultPassword,
            alias: agent.name,
            app_id: defaultApplication
          };
        try {
            let newAgent = await axios.post(url, data);
            //log the created agents so that you can create it in a file
            console.log(`${newAgent.data.alias},${newAgent.data.username},${newAgent.data.endpoint_id},${newAgent.data.username}@phone.plivo.com`); 
          
        } catch (error) {
            console.log(`error in creating agent for - ${agent.name} error - ${error}`);
        }        
    })
}