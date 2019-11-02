exports.handler = function(event, context, callback) {
    // Read envrionment variable on Netlify process
    var result = process.env.ACTIVE === "true" ? "_ACTIVE": "_INACTIVE";
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({msg:result})
    });
}