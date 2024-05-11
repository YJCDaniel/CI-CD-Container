module.exports.pranata = async (event) => {
    console.log (event)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v3.0! Get function executed successfully!",
        },
        null,
        2
      ),
    };
  };
  
  module.exports.pranatapost = async (event) => {
    console.log (event)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v3.0! Post function executed successfully!",
        },
        null,
        2
      ),
    };
  };  