'use strict';

const querystring = require('querystring');

module.exports.hodor = (event, context, callback) => {
  let qs = querystring.parse(event.body);
  let response;
  
  if(verify(qs.token)){
    //token matches

    let responses = [
    "Hodor.", 
    "Hodor!", 
    "HODOR!", 
    "Hodor?", 
    "HODOR?!",
    "Ho...Dor?",
    "Hoooooodoooooooooooor.",
    "Hodor. Hodor Hodor Hodor Hodor.",
    "HODOR! HODOR!! HODOR!!! HODOR!!!! HODOR!!!!!",
    "Hodor? Hodor Hodor Hodor.",
    "H.O.D.O.R... HODOR!"
    ];
    
    let hodorResponse = responses[Math.floor((Math.random() * responses.length))];

    /*
    So, you may have noticed that Hodor isn't the best conversationalist.  
    If actually you wanted to do something intelligent with the text typed 
    after the slash command like: 

    /hodor What time is it?

    You can get the question like this:

    let question = qs.text;
    */
    
    response = {
        statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "response_type": "in_channel", //this makes Hodor's response viewable by everyone in the channel
        "text": hodorResponse,
      })
    };
  }else{
      //token doesn't match or wasn't sent, 
      response = {
          statusCode: 403,
        headers: {
          'Content-Type': 'application/json',
        },
        "body": JSON.stringify('You shall not pass!')
      };
  }
  callback(null, response);

};

/*
slacktoken must be set as an environment variable and
must match the Token value from the Slack integration
setup page
*/
function verify(token) {
  if(token === process.env.slacktoken){
    return true;
  }
  return false;
}