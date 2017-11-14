
var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    if (session.message.text == "open cmd") {
		var child_process = require('child_process');
		child_process.execSync("start cmd.exe");    	
    } else if (session.message.text == "khoa") {
    	session.send("Bot said: A khoa đẹp trai vãi cả nhân nghĩa đường");
    } else if (session.message.text == "Duy") {
    	session.send("Bot said: Duy là mẹ bụng bự à?");
    } else if (session.message.text == "Lan") {
    	session.send("Bot said: Poker face :| :| :|");
    } else if (session.message.text == "Trung" || session.message.text == "Dang" || session.message.text == "Sang" || session.message.text == "Vinh") {
    	session.send("Bot said: ko biết nói gì hết");
    } else  {
    	session.send("Bot said: You just said %s", session.message.text);
    }
});


