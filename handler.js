'use strict';

module.exports.hello = async (event, context) => {
  
  console.log(event.pathParameters.name);

  const name = event.pathParameters.name;
  const reply = `Hello there, ${name}!`

  return {
    statusCode: 200,
    body: JSON.stringify({
      //message: 'Go Serverless v1.0! Your function executed successfully!',
      message: JSON.stringify(reply)
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
