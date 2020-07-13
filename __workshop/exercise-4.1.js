const request = require("request-promise");
const requestPromise = require("request-promise");
const options = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    "User-Agent": "Request-Promise",
    Accept: "application/json",
  },
  json: true, // Automatically parses the JSON string in the response
};
const getDadJoke = async () => {
  try {
    const jokeObject = await request(options);
    // console.log(jokeObject);
    return jokeObject.joke;
  } catch (err) {
    console.log("Error: ", err);
  }
};

// getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
