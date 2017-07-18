// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Users')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5b9e4ed638cd4e8f15ec3885')
        },
        {
          $set: {
            name: 'Trung'
          },
          $inc: {
            age: 3
          }
        },
        { returnOriginal: false }
      )
      .then(result => {
        console.log(result);
      });

    client.close();
  }
);
