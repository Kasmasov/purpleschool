const prom = new Promise((resolve, reject) => {
    if (new Date() < new Date('01/01/2024')) {
        reject(new Error('Error')) //reject лучше вызывать с new Error, а не со строкой
    }
    resolve('Success');
})

prom
  .then((data) => console.log(data))
	.catch((error) => console.log(error));

	function timeout(sec) { 
		return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
			}, 1000 * sec)
		});
	}

	timeout(1).then(() => {  // при оборачивании setTimeout в Promise мы можем вызывать эту функцию многократно
		console.log(1);
		return timeout(2)
	})
	  .then(() => {
			console.log(2);
		})

		const prom2 = new Promise((resolve) => {
			console.log('Constructor'); // внутри промиса будет выполняться код синхронно
			setTimeout(() => {
        console.log('Timer');
			}, 1000);
		})

    prom2.then((data) => console.log(data));		
		Promise.reject(new Error('Error')).catch((error) => console.log(error));
		Promise.resolve('Instance').then((data) => console.log(data));

		/*
		Вывод будет таким

		Constructor - будет первым, т к внутри промиса будет выполняться код синхронно, далее все промисы из микротаски, а потом setTimeout, т к он в макротаски
		eventLoop.js:36 Error: Error
				at eventLoop.js:36:18
		Instance
		Timer
		*/