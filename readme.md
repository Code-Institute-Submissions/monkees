# Monkees Bandpage
Deployed with surge to: [https://monkees.surge.sh](https://monkees.surge.sh)

## Get it running on your machine
In your chosen directory run `git clone https://github.com/danieldeiana/monkees.git`
[https://nodejs.org/en/](Install Node)
Use 5.0: `nvm use 5.0`
Verify version and check installed: `nvm --version`
To install dependencies, `cd` to the folder where package.json lies and enter `npm install` .

To run in local browser install nodemon: `npm install -g nodemon`
Verify installed: `nodemon --version`

If you want to run the tests install the karma cli: `npm install -g karma-cli`
Verify installed: `karma --version`

## Terminal Commands

### To view in local browser:

Enter `nodemon server.js` to run the server then visit [localhost:8080](http://localhost:8080)

Enter `karma start` to run the tests. (make sure the karma cli is installed, see above)
Test results will be shown in the terminal.

## Inspiration

Using a test driven approach and followed the same setup as
[Adam Morgan](https://twitter.com/atommorgan):
[Testing AngularJS with Jasmine and Karma](https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1)