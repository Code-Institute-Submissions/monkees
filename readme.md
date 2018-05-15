# Monkees Bandpage
Deployed with surge to: [https://monkees.surge.sh](https://monkees.surge.sh)

## Get it running on your machine
### Install local dependencies
* In your chosen directory run `git clone https://github.com/danieldeiana/monkees.git`
* [https://nodejs.org/en/](Install Node)
* Use 5.0: `nvm use 5.0`
* Verify version and check installed: `nvm --version`
* To install dependencies, `cd` to the folder where package.json lies and enter `npm install` .

### Install global dependencies
#### nodemon
Nodemon is required to run the server locally
* `npm install -g nodemon`
* Verify installed: `nodemon --version`

#### karma
Karma is required to run the tests
* `npm install -g karma-cli`
* Verify installed: `karma --version`

### Invocation
#### View in browser
* cd to the root folder containing server.js
* Enter `nodemon server.js` to run the server
* Visit [localhost:8080](http://localhost:8080)

#### Run tests
* cd to the root folder containing karma.conf.js
* Enter `karma start` in the terminal to run the tests. (make sure the karma cli is installed, see above)
Test results will be shown in the terminal.

## Inspiration
Using a test driven approach and followed the same setup as
[Adam Morgan](https://twitter.com/atommorgan):
[Testing AngularJS with Jasmine and Karma](https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1)