const alexaSDK = require('alexa-sdk');
const awsSDK = require('aws-sdk');
const {promisify} = require('es6-promisify');

const appId = 'amzn1.ask.skill.635d3cb2-cfd8-4185-96c9-6283cc1afc09';
const dataTable = 'celebs';
const docClient = new awsSDK.DynamoDB.DocumentClient();
var clueCount =0;
var dataRecord;
// convert callback style functions to promises
const dbGet = promisify(docClient.get, docClient);

const launchInstructions = `Welcome to Who am I? <break strength="medium" /> 
                      The following commands are available: Play game, Instructions,
                      What would you like to do?`;

const handlers = {
    'LaunchRequest'() {
        this.emit(':ask', launchInstructions);
    },

    'StartGameIntent'() {

        const {userId} = this.event.session.user;
        const randomNumber = 1;
        const dynamoParams = {
            TableName: 'celebs',
            Key: {
                Name: randomNumber,
                UserId: userId
            }
        };
        console.log('DB');

        dbGet(dynamoParams)
            .then(data => {
                console.log('Get item succeeded', data);

                dataRecord = data.Item;
                this.emit(':tell', `The person is a ${dataRecord.nationality} ${dataRecord.occupation} aged ${dataRecord.age}`);
                this.emit(':tell', `${dataRecord.description}`);
            })
            .catch(err => console.error(err));
    },

     'GetClueIntent'() {
        if(clueCount<3) {
            var clue = "clue" + clueCount++;
            this.emit(':tell', `Here is your clue ${dataRecord.clue1}`);
            }
        },

    'GiveUpIntent'() {
        this.emit(':tell', `The answer is ${dataRecord.name}`);
    },

    'AnswerIntent'() {
        this.emit(':tell', 'Answer please');
    },

    'AMAZON.HelpIntent'() {
        const speechOutput = launchInstructions;
        const reprompt = launchInstructions;
        this.emit(':ask', speechOutput, reprompt);
    },

    'AMAZON.CancelIntent'() {
        this.emit(':tell', 'Goodbye!');
    },

    'AMAZON.StopIntent'() {
        this.emit(':tell', 'Goodbye!');
    }

};


exports.handler = function handler(event, context) {
    const alexa = alexaSDK.handler(event, context);
    alexa.APP_ID = appId;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
