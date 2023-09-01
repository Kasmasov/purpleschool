function race(promises) {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(
        (response) => resolve(response),
        (error) => reject(error)
        );
    }
  });
};

async function getIdea() {
    return await fetch('https://www.boredapi.com/api/activity');
}

async function getError() {
    return await fetch('https://www2.boredapi.com/api/activity');
}

const raceMethod = race([getIdea(), getIdea(), getError()]);
console.log(raceMethod);