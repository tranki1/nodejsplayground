var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('hey.it worked');
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('arg must be number');
      }
    }, 1500);
  });
};

asyncAdd(7, 6)
  .then(res => {
    console.log(res);
    return asyncAdd(res, 30);
  })
  .then(res => {
    console.log(res);
    return asyncAdd(res, 30);
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('hey.it worked');
//     reject('unable to fullfill');
//   }, 2500);
// });

// somePromise.then(
//   msg => {
//     console.log('sucess', msg);
//   },
//   errorMessage => {
//     console.log('error:', errorMessage);
//   }
// );
