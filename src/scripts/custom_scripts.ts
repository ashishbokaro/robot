// custom-scripts.js

// Define your custom scripts as JavaScript functions
function start() {
    return "npm install && npm run build && node dist/src/fileRead.js"
}

function build() {
    return "rm -rf ./dist && tsc"
}

function runTest() {
    return "mocha dist/src/test_case/**/*.spec.js"
}

function testReport() {
    return "mocha dist/src/test_case/**/*.spec.js --reporter mochawesome --reporter-options reportDir=testCaseReport --require mochawesome/register"
}

// Export the functions so they can be accessed from the package.json
module.exports = {
    start,
    build,
    runTest,
    testReport,
};
