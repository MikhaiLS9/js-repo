// navigator.geolocation.getCurrentPosition((pos) => {
//     console.log(pos.coords.latitude, pos.coords.longitude)
// })

function getGeolacation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      resolve(`${latitude} ${longitude}`)
    });
  });
}

const promise = getGeolacation();
promise.then(data => console.log(data));
