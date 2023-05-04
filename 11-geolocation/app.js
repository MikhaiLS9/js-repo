function getGeolacation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      resolve(`${latitude} ${longitude}`)
    });
  });
}

getGeolacation().then(data => console.log(data));
