function race(allPromise) {
  return new Promise((resolve, reject) =>
    allPromise.forEach((item) => item.then(resolve, reject))
  );
}
Promise.race([]).then((result) => console.log(result));
