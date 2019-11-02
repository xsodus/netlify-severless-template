const configs = require('./environment.json')

exports.handler = function(event, context, callback) {
    console.log(event);
    console.log(context);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({msg:"Hello, World",envName:configs.environment.name})
    });
}