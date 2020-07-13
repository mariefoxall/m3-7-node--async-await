const request = require("request-promise");
const options = {
  uri: "https://geek-jokes.sameerkumar.website/api?format=json",
  json: true,
};

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const randomGeekJoke = await request(options);
    return randomGeekJoke.joke;
  } catch (error) {
    console.log(error);
  }
};

getGeekJoke().then((data) => console.log(data));
