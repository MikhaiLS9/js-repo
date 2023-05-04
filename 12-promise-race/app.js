async function race(...allPromise) {
  const resolve_1 = await new Promise((resolve, reject) =>
    [...allPromise].forEach((item) => item.then(resolve, reject))
  );
  return console.log(resolve_1);
}
race();
