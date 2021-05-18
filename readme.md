# Create Endpoints in Plivo

Output -> prints details of created endpoints to console output

- reads agent names from agents.csv file
- file should have a column name "name"
- agent names should not be > 15 characters
- agent names should not contain space or special symbols; they can contain numbers
- change environment.js file - auth creds, default password & default app id

## Run

- clone the repo and run `npm install`
- to run the app, `node app.js > targetfile.csv`
