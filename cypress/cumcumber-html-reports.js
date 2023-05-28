//create cucumber-html-report.js file in the root of project folder and add the following:
                    const report = require("multiple-cucumber-html-reporter");
                    report.generate({
                    jsonDir: "jsonlogs", // ** Path of .json file
                    reportPath: "./reports/cucumber-htmlreport.html",
                    metadata: {
                        browser: {
                        name: "chrome",
                        version: "XX",
                        },
                        device: "Local test machine",
                        platform: {
                        name: "Windows",
                        version: "11",
                        },
                    },
                    });