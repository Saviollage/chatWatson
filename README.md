# chatWatson

ChatBot developed using NodeJS and IBM Watson


## Usage
src/index.js
```dart
const assistant = new watson({
  apikey: "<YOUR API KEY>",
  username: "<YOUR USERNAME>",
  password: "<YOUR PASSWORD>",
  url: "https://gateway.watsonplatform.net/assistant/api",
  version: "2019-02-19"
});

  const params = {
    input: { text },
    workspace_id: "<YOUR WORKSPACE ID>",
    context
  };
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
