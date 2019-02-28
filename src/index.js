const express = require("express");
const bodyParser = require("body-parser");
const watson = require("watson-developer-cloud/assistant/v1");
const app = express();

app.use(bodyParser.json());
app.use(express.static("./src/public"));

const assistant = new watson({
  apikey: "<YOUR API KEY>",
  username: "<YOUR USERNAME>",
  password: "<YOUR PASSWORD>",
  url: "https://gateway.watsonplatform.net/assistant/api",
  version: "2019-02-19"
});

app.post("/chat", (req, res) => {
  const { text, context } = req.body;

  const params = {
    input: { text },
    workspace_id: "<YOUR WORKSPACE ID>",
    context
  };

  assistant.message(params, (err, response) => {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else res.json(response);
  });
});

app.listen(3000);
//response['output']['generic'][0]['text']
