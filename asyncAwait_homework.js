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
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getIdea() {
  await delay(120);
  return await fetch('https://www.boredapi.com/api/activity');
};

async function getError() {
  await delay(2500);
  return await fetch('https://www2.boredapi.com/api/activity');
};

const raceMethod = race([getIdea(), getIdea(), getError()]);
console.log(raceMethod);
