const authId = process.env.PLIVO_AUTH_ID; //replace auth Id
const authToken = process.env.PLIVO_AUTH_TOKEN; //replace auth token

const defaultPassword = `defaultpassword`; //default password for sip endpoint
const defaultAppId = `21737891106530978`; // default appliation attached to sip url https://console.plivo.com/voice/applications/

const plivoCred = {
    auth: getAuth(),
    baseURL: `https://api.plivo.com/v1/Account/${authId}`,
    defaultPw: defaultPassword,
    defaultApp: defaultAppId,
  };
  
  function getAuth() {
    let buf = Buffer.from(authId + ":" + authToken).toString("base64");
    return `Basic ${buf}`;
  }
  
  module.exports = plivoCred;