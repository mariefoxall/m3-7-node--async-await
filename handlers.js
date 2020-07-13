const { getDadJoke } = require("./__workshop/exercise-4.1");

const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");

const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (req, res) => {
  const type = req.params.type;
  try {
    switch (type) {
      case "dad":
        const dadJoke = await getDadJoke();
        res.status(200).send({ status: 200, data: dadJoke });
        break;
      case "tronald":
        const tronaldJoke = await getTronaldDumpQuote();
        res.status(200).send({ status: 200, data: tronaldJoke });
        break;
      case "geek":
        const geekJoke = await getGeekJoke();
        res.status(200).send({ status: 200, data: geekJoke });
      default:
        res
          .status(400)
          .send({ status: 400, data: { type }, message: "Invalid type." });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { handleJoke };
