// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  (err, client) => {
    if (err) {
      console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne(
    //   {
    //     text: 'Something to do',
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable tonsert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection('Users').insertOne(
    //   {
    //     name: 'Kim',
    //     age: 27,
    //     location: 'Finland'
    //   },
    //   (err, result) => {
    //     if (err) {
    //       console.log('Unable to insert User', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());

    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    client.close();
  }
);
