const request = require("request-promise");
const options = {
  uri: "https://api.tronalddump.io/random/quote",
  headers: {
    Accept: "application/json",
  },
  json: true,
};

const getTronaldDumpQuote = async () => {
  try {
    const randomQuote = await request(options);
    return randomQuote.value;
  } catch (error) {
    // console.log(error);
  }
};

getTronaldDumpQuote().then((data) => console.log(data));
