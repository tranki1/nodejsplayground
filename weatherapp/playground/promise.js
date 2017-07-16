var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('hey.it worked');
    reject('unable to fullfill');
  }, 2500);
});

somePromise.then(
  msg => {
    console.log('sucess', msg);
  },
  errorMessage => {
    console.log('error:', errorMessage);
  }
);
