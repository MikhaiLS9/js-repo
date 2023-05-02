
function race(...allPromise) {
    Promise.race([...allPromise]).then((value) => {
      console.log(value);
  
    });
  }
  race()