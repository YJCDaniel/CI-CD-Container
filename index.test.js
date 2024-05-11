const { pranata, pranatapost } = require('./index')

describe('pranata', () => {
  it('should return status code 200 and the correct message', async () => {
    const event = {};
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v3.0! Get function executed successfully!",
      }, null, 2),
    };
    const result = await pranata(event);
    expect(result).toEqual(expectedResponse);
  });
});

describe('pranatapost', () => {
  it('should return status code 200 and the correct message', async () => {
    const event = {};
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v3.0! Post function executed successfully!",
      }, null, 2),
    };
    const result = await pranatapost(event);
    expect(result).toEqual(expectedResponse);
  });
});