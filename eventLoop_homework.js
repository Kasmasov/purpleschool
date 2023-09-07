/* 
Сделать функцию для получения геолокации пользователяб,используя Geolocation API, 
но преобразовав его в Promise
*/

/*

Функция получения геолокации

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
})

*/

function getGeolocation() {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			reject(new Error('Your geolocation is unavailable!'));
		}
    navigator.geolocation.getCurrentPosition((position) => {
		  resolve({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			});
		});
	});
}

getGeolocation()
	.then(({ latitude }) => console.log(latitude))
	.catch((error) => console.error(error.message));