'use strict';

module.exports.hello = async (event, context) => {
  const {first, second} = event;
  const added = first + second;
  return {
    statusCode: 200,
    body: JSON.stringify({
      //message: 'Go Serverless v1.0! Your function executed successfully!',
      message: "Hello there!"
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
